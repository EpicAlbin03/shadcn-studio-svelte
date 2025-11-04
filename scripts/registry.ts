import fs from 'node:fs';
import path from 'node:path';
import * as acorn from 'acorn';
import { tsPlugin } from '@sveltejs/acorn-typescript';
import { walk, type Node } from 'estree-walker';
import * as svelte from 'svelte/compiler';
import { registryItemSchema, type Registry } from '@shadcn-svelte/registry';

const REGISTRY_DEPENDENCY = '$lib/registry';
const UTILS_PATH = '$lib/utils';
const PACKAGE_DEPENDENCIES: string[] = ['@lucide/svelte', 'bits-ui', 'runed'];
const DYNAMIC_IMPORTS: string[] = [];

const tsParser = acorn.Parser.extend(tsPlugin());

type RegistryItems = Registry['items'];
type RegistryItemFiles = Registry['items'][number]['files'];

async function crawlIfExists(
	rootPath: string,
	crawler: (rootPath: string) => Promise<RegistryItems>
): Promise<RegistryItems> {
	if (!fs.existsSync(rootPath)) {
		return [];
	}

	return crawler(rootPath);
}

export async function buildRegistry(): Promise<RegistryItems> {
	const registryRootPath = path.resolve('src', 'lib', 'registry');
	const items: RegistryItems = [];

	const paths = {
		ui: path.resolve(registryRootPath, 'ui'),
		examples: path.resolve(registryRootPath, 'examples'),
		blocks: path.resolve(registryRootPath, 'blocks'),
		components: path.resolve(registryRootPath, 'components'),
		hooks: path.resolve(registryRootPath, 'hooks'),
		lib: path.resolve(registryRootPath, 'lib')
	};

	const resolvedItems = await Promise.all([
		crawlIfExists(paths.ui, crawlUI),
		crawlIfExists(paths.examples, crawlExamples),
		crawlIfExists(paths.blocks, crawlBlocks),
		crawlIfExists(paths.components, crawlComponents),
		crawlIfExists(paths.hooks, crawlHooks),
		crawlIfExists(paths.lib, crawlLib)
	]);

	resolvedItems.forEach((i) => items.push(...i));

	for (const item of items) {
		const description = readComponentDescriptionFromContent(item.name);
		if (description) {
			(item as unknown as { description?: string }).description = description;
		}
	}

	return items;
}

function readComponentDescriptionFromContent(componentName: string): string | undefined {
	const mdPath = path.resolve('content', 'components', `${componentName}.md`);
	if (!fs.existsSync(mdPath)) return undefined;

	const raw = fs.readFileSync(mdPath, { encoding: 'utf8' });
	const fmMatch = raw.match(/^---[\s\S]*?---/);
	if (!fmMatch) return undefined;

	const fm = fmMatch[0];
	const descMatch = fm.match(/^description:\s*(.+)$/im);
	if (!descMatch) return undefined;

	let desc = descMatch[1].trim();
	if (
		(desc.startsWith('"') && desc.endsWith('"')) ||
		(desc.startsWith("'") && desc.endsWith("'"))
	) {
		desc = desc.slice(1, -1);
	}
	return desc;
}

async function crawlUI(rootPath: string): Promise<RegistryItems> {
	const dir = fs.readdirSync(rootPath, { recursive: true, withFileTypes: true });
	const items: RegistryItems = [];

	for (const dirent of dir) {
		if (!dirent.isDirectory()) continue;

		const componentPath = path.resolve(rootPath, dirent.name);
		const ui = await buildUIRegistry(componentPath, dirent.name);
		items.push(ui);
	}

	return items;
}

async function buildUIRegistry(
	componentPath: string,
	componentName: string
): Promise<RegistryItems[number]> {
	const dir = fs.readdirSync(componentPath, {
		withFileTypes: true
	});

	const files: RegistryItemFiles = [];
	const registryDependencies = new Set<string>();
	const packageDependencies = new Set<string>();

	let meta = {};

	for (const dirent of dir) {
		if (!dirent.isFile()) continue;
		const filepath = path.join(componentPath, dirent.name);
		const relativePath = path.relative(process.cwd(), filepath);
		const source = fs.readFileSync(filepath, { encoding: 'utf8' });

		if (dirent.name === 'meta.json') {
			meta = registryItemSchema.partial().parse(JSON.parse(source));
			continue;
		}

		files.push({ path: relativePath, type: 'registry:file' });

		const deps = await getFileDependencies(filepath, source);
		if (!deps) continue;

		deps.registryDependencies.forEach((dep) => registryDependencies.add(dep));
		deps.packageDependencies.forEach((dep) => packageDependencies.add(dep));
	}

	return {
		...meta,
		type: 'registry:ui',
		files,
		name: componentName,
		registryDependencies: Array.from(registryDependencies),
		dependencies: Array.from(packageDependencies)
	} satisfies RegistryItems[number];
}

async function crawlExamples(rootPath: string): Promise<RegistryItems> {
	const dir = fs.readdirSync(rootPath, { withFileTypes: true });
	const items: RegistryItems = [];

	for (const dirent of dir) {
		if (!dirent.name.endsWith('.svelte') || !dirent.isFile()) continue;

		const [name] = dirent.name.split('.svelte');

		const filepath = path.join(rootPath, dirent.name);
		const source = fs.readFileSync(filepath, { encoding: 'utf8' });
		const relativePath = path.relative(process.cwd(), filepath);

		const { registryDependencies, packageDependencies } = await getFileDependencies(
			filepath,
			source
		);

		items.push({
			name,
			type: 'registry:example',
			files: [{ path: relativePath, type: 'registry:component' }],
			registryDependencies: Array.from(registryDependencies),
			dependencies: Array.from(packageDependencies)
		});
	}

	return items;
}

async function buildBlockRegistry(
	blockPath: string,
	blockName: string
): Promise<RegistryItems[number]> {
	const dir = fs.readdirSync(blockPath, { withFileTypes: true, recursive: true });
	const files: RegistryItemFiles = [];
	const registryDependencies = new Set<string>();
	const packageDependencies = new Set<string>();

	const pagesNames = ['+page.svelte'];
	const fileNames = ['data.json', 'data.ts'];
	for (const dirent of dir) {
		if (!dirent.isFile()) continue;
		const isPage = pagesNames.includes(dirent.name);
		const isFile = fileNames.includes(dirent.name);

		const type = isPage || isFile ? 'registry:page' : 'registry:component';

		// TODO: fix
		const compPath =
			isPage || isFile ? dirent.name : path.join(path.basename(dirent.parentPath), dirent.name);
		const filepath = path.join(blockPath, compPath);
		const relativePath = path.relative(process.cwd(), filepath);
		const source = fs.readFileSync(filepath, { encoding: 'utf8' });

		files.push({ path: relativePath, type });

		const deps = await getFileDependencies(filepath, source);
		if (!deps) continue;

		deps.registryDependencies.forEach((dep) => registryDependencies.add(dep));
		deps.packageDependencies.forEach((dep) => packageDependencies.add(dep));
	}

	return {
		type: 'registry:block',
		files,
		name: blockName,
		registryDependencies: Array.from(registryDependencies),
		dependencies: Array.from(packageDependencies)
	} satisfies RegistryItems[number];
}

async function crawlBlocks(rootPath: string): Promise<RegistryItems> {
	const dir = fs.readdirSync(rootPath, { withFileTypes: true });
	const items: RegistryItems = [];

	for (const dirent of dir) {
		const filepath = path.join(rootPath, dirent.name);
		if (!dirent.isFile()) {
			const result = await buildBlockRegistry(filepath, dirent.name);
			items.push(result);
			continue;
		}
		if (!dirent.name.endsWith('.svelte') || !dirent.isFile()) continue;

		const [name] = dirent.name.split('.svelte');

		const source = fs.readFileSync(filepath, { encoding: 'utf8' });
		const relativePath = path.relative(process.cwd(), filepath);

		const { registryDependencies, packageDependencies } = await getFileDependencies(
			filepath,
			source
		);

		items.push({
			name,
			type: 'registry:block',
			files: [{ path: relativePath, type: 'registry:component' }],
			registryDependencies: Array.from(registryDependencies),
			dependencies: Array.from(packageDependencies)
		});
	}

	return items;
}

async function crawlComponents(rootPath: string): Promise<RegistryItems> {
	const dir = fs.readdirSync(rootPath, { withFileTypes: true });
	const items: RegistryItems = [];

	for (const dirent of dir) {
		const filepath = path.join(rootPath, dirent.name);
		if (!dirent.isFile()) {
			const result = await buildComponentRegistry(filepath, dirent.name);
			items.push(result);
			continue;
		}

		if (!dirent.name.endsWith('.svelte')) continue;

		const [name] = dirent.name.split('.svelte');
		const source = fs.readFileSync(filepath, { encoding: 'utf8' });
		const relativePath = path.relative(process.cwd(), filepath);

		const { registryDependencies, packageDependencies } = await getFileDependencies(
			filepath,
			source
		);

		items.push({
			name,
			type: 'registry:component',
			files: [{ path: relativePath, type: 'registry:component' }],
			registryDependencies: Array.from(registryDependencies),
			dependencies: Array.from(packageDependencies)
		});
	}

	return items;
}

async function buildComponentRegistry(
	componentPath: string,
	componentName: string
): Promise<RegistryItems[number]> {
	const dir = fs.readdirSync(componentPath, { withFileTypes: true, recursive: true });
	const files: RegistryItemFiles = [];
	const registryDependencies = new Set<string>();
	const packageDependencies = new Set<string>();

	for (const dirent of dir) {
		if (!dirent.isFile()) continue;
		const absPath = path.join(dirent.parentPath ?? componentPath, dirent.name);
		const relativePath = path.relative(process.cwd(), absPath);
		const source = fs.readFileSync(absPath, { encoding: 'utf8' });

		files.push({ path: relativePath, type: 'registry:file' });

		const deps = await getFileDependencies(absPath, source);
		deps.registryDependencies.forEach((dep) => registryDependencies.add(dep));
		deps.packageDependencies.forEach((dep) => packageDependencies.add(dep));
	}

	return {
		type: 'registry:component',
		files,
		name: componentName,
		registryDependencies: Array.from(registryDependencies),
		dependencies: Array.from(packageDependencies)
	} satisfies RegistryItems[number];
}

async function crawlLib(rootPath: string): Promise<RegistryItems> {
	const dir = fs.readdirSync(rootPath, { withFileTypes: true });
	const items: RegistryItems = [];
	for (const dirent of dir) {
		if (!dirent.isFile()) continue;

		const [name] = dirent.name.split('.ts');

		const filepath = path.join(rootPath, dirent.name);
		const source = fs.readFileSync(filepath, { encoding: 'utf8' });
		const relativePath = path.relative(process.cwd(), filepath);

		const { registryDependencies, packageDependencies } = await getFileDependencies(
			filepath,
			source
		);

		items.push({
			name,
			type: 'registry:lib',
			files: [{ path: relativePath, type: 'registry:lib' }],
			registryDependencies: Array.from(registryDependencies),
			dependencies: Array.from(packageDependencies)
		});
	}

	return items;
}

async function crawlHooks(rootPath: string): Promise<RegistryItems> {
	const dir = fs.readdirSync(rootPath, { withFileTypes: true });
	const items: RegistryItems = [];

	for (const dirent of dir) {
		if (!dirent.isFile()) continue;

		const [name] = dirent.name.split('.svelte.ts');

		const filepath = path.join(rootPath, dirent.name);
		const source = fs.readFileSync(filepath, { encoding: 'utf8' });
		const relativePath = path.relative(process.cwd(), filepath);

		const { registryDependencies, packageDependencies } = await getFileDependencies(
			filepath,
			source
		);

		items.push({
			name,
			type: 'registry:hook',
			files: [{ path: relativePath, type: 'registry:hook' }],
			registryDependencies: Array.from(registryDependencies),
			dependencies: Array.from(packageDependencies)
		});
	}

	return items;
}

async function getFileDependencies(
	filename: string,
	content: string
): Promise<{ registryDependencies: Set<string>; packageDependencies: Set<string> }> {
	let ast: unknown;
	let moduleAst: unknown;

	if (filename.endsWith('.svelte')) {
		const { code } = await svelte.preprocess(content, [], { filename });
		const result = svelte.parse(code, { filename });
		ast = result.instance;
		if (result.module) {
			moduleAst = result.module;
		}
	} else {
		ast = tsParser.parse(content, { ecmaVersion: 'latest', sourceType: 'module' });
	}

	const registryDependencies = new Set<string>();
	const packageDependencies = new Set<string>();

	const enter = (node: Node) => {
		if (node.type === 'ImportDeclaration') {
			const source = node.source.value as string;

			if (source.startsWith(REGISTRY_DEPENDENCY)) {
				if (source.includes('ui')) {
					const component = source.split('/').at(-1)!;
					registryDependencies.add(`local:${component}`);
				} else if (source.includes('hook')) {
					const hook = source.split('/').at(-1)!.split('.')[0];
					registryDependencies.add(`local:${hook}`);
				}
			} else if (source.startsWith('$lib/')) {
				if (source.includes('ui')) {
					const component = source.split('/').at(-1)!;
					registryDependencies.add(component);
				} else if (source.includes('hook')) {
					const hook = source.split('/').at(-1)!.split('.')[0];
					registryDependencies.add(hook);
				}
			} else if (source.includes(UTILS_PATH)) {
				registryDependencies.add('utils');
			}

			PACKAGE_DEPENDENCIES.forEach((dep) => {
				if (source === dep) {
					packageDependencies.add(dep);
				}
			});
		} else if (node.type === 'ImportExpression' && node.source.type === 'Literal') {
			const source = node.source.value as string;

			DYNAMIC_IMPORTS.forEach((dep) => {
				if (source === dep) {
					packageDependencies.add(dep);
				}
			});
		}
	};

	// @ts-expect-error yea, stfu
	walk(ast, { enter });

	if (moduleAst) {
		// @ts-expect-error yea, stfu x2
		walk(moduleAst, { enter });
	}

	return { registryDependencies, packageDependencies };
}
