import fs from 'node:fs';
import path from 'node:path';
import * as acorn from 'acorn';
import { tsPlugin } from '@sveltejs/acorn-typescript';
import { walk, type Node } from 'estree-walker';
import * as svelte from 'svelte/compiler';
import { registryItemSchema, type Registry } from '@shadcn-svelte/registry';
import { presetThemes } from '../src/lib/assets/data/preset-themes.js';

const REGISTRY_DEPENDENCY = '$lib/registry';
const UTILS_PATH = '$lib/utils';
const PACKAGE_DEPENDENCIES: string[] = [
	'@lucide/svelte',
	'bits-ui',
	'@internationalized/date',
	'@tanstack/table-core',
	'@dnd-kit-svelte/core',
	'@dnd-kit-svelte/modifiers',
	'@dnd-kit-svelte/sortable',
	'@dnd-kit-svelte/utilities',
	'@types/cleave.js',
	'@types/inputmask',
	'@types/papaparse',
	'chrono-node',
	'inputmask',
	'layerchart',
	'little-date',
	'motion-start',
	'papaparse',
	'runed',
	'svelte-sonner',
	'sveltekit-superforms',
	'zod'
];
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

	// Add themes from presetThemes
	items.push(...buildThemesRegistry());

	return items;
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

		// Build the relative path from blockPath to the file
		const compPath =
			isPage || isFile
				? dirent.name
				: path.relative(blockPath, path.join(dirent.parentPath, dirent.name));
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

function buildThemesRegistry(): RegistryItems {
	const items: RegistryItems = [];

	// Get default theme as fallback
	const defaultTheme = presetThemes.find((t) => t.name === 'default')!;
	const defaultLightVars = defaultTheme.cssVars.light as Record<string, string>;
	const defaultDarkVars = defaultTheme.cssVars.dark as Record<string, string>;

	for (const theme of presetThemes) {
		const lightCssVars = theme.cssVars.light as Record<string, string>;
		const darkCssVars = theme.cssVars.dark as Record<string, string>;

		const lightVars = { ...lightCssVars };

		for (const [key, value] of Object.entries(defaultLightVars)) {
			if (!lightVars[key]) {
				lightVars[key] = value;
			}
		}

		const darkVars = { ...darkCssVars };

		for (const [key, value] of Object.entries(defaultDarkVars)) {
			if (!darkVars[key]) {
				darkVars[key] = value;
			}
		}

		lightVars['tracking-normal'] = lightVars['letter-spacing'];

		const shadowColor = lightVars['shadow-color'];
		const shadowOpacity = parseFloat(lightVars['shadow-opacity']);
		const shadowBlur = lightVars['shadow-blur'];
		const shadowSpread = lightVars['shadow-spread'];
		const shadowOffsetX = lightVars['shadow-offset-x'];
		const shadowOffsetY = lightVars['shadow-offset-y'];

		// Helper function to clean shadow color and add opacity
		const addOpacity = (color: string, opacity: string) => {
			const cleanColor = color.replace(/\s*\/\s*\d+(\.\d+)?%?\s*\)/, ')').replace(/\s+\)/, ')');
			return cleanColor.replace(')', ` / ${opacity})`);
		};

		const opacity2xs = (shadowOpacity * 0.5).toFixed(2);
		const opacityXs = (shadowOpacity * 0.5).toFixed(2);
		const opacitySm = shadowOpacity.toFixed(2);
		const opacityMd = shadowOpacity.toFixed(2);
		const opacityLg = shadowOpacity.toFixed(2);
		const opacityXl = shadowOpacity.toFixed(2);
		const opacity2xl = (shadowOpacity * 2.5).toFixed(2);

		lightVars['shadow-2xs'] =
			`${shadowOffsetX} ${shadowOffsetY} ${shadowBlur} ${shadowSpread} ${addOpacity(shadowColor, opacity2xs)}`;
		lightVars['shadow-xs'] =
			`${shadowOffsetX} ${shadowOffsetY} ${shadowBlur} ${shadowSpread} ${addOpacity(shadowColor, opacityXs)}`;
		lightVars['shadow-sm'] =
			`${shadowOffsetX} ${shadowOffsetY} ${shadowBlur} ${shadowSpread} ${addOpacity(shadowColor, opacitySm)}, 0px 1px 2px -1px ${addOpacity(shadowColor, opacitySm)}`;
		lightVars['shadow'] = lightVars['shadow-sm'];
		lightVars['shadow-md'] =
			`${shadowOffsetX} ${shadowOffsetY} ${shadowBlur} ${shadowSpread} ${addOpacity(shadowColor, opacityMd)}, 0px 2px 4px -1px ${addOpacity(shadowColor, opacityMd)}`;
		lightVars['shadow-lg'] =
			`${shadowOffsetX} ${shadowOffsetY} ${shadowBlur} ${shadowSpread} ${addOpacity(shadowColor, opacityLg)}, 0px 4px 6px -1px ${addOpacity(shadowColor, opacityLg)}`;
		lightVars['shadow-xl'] =
			`${shadowOffsetX} ${shadowOffsetY} ${shadowBlur} ${shadowSpread} ${addOpacity(shadowColor, opacityXl)}, 0px 8px 10px -1px ${addOpacity(shadowColor, opacityXl)}`;
		lightVars['shadow-2xl'] =
			`${shadowOffsetX} ${shadowOffsetY} ${shadowBlur} ${shadowSpread} ${addOpacity(shadowColor, opacity2xl)}`;

		const darkShadowColor = darkVars['shadow-color'];
		const darkShadowOpacity = parseFloat(darkVars['shadow-opacity']);
		const darkShadowBlur = darkVars['shadow-blur'];
		const darkShadowSpread = darkVars['shadow-spread'];
		const darkShadowOffsetX = darkVars['shadow-offset-x'];
		const darkShadowOffsetY = darkVars['shadow-offset-y'];

		const darkOpacity2xs = (darkShadowOpacity * 0.5).toFixed(2);
		const darkOpacityXs = (darkShadowOpacity * 0.5).toFixed(2);
		const darkOpacitySm = darkShadowOpacity.toFixed(2);
		const darkOpacityMd = darkShadowOpacity.toFixed(2);
		const darkOpacityLg = darkShadowOpacity.toFixed(2);
		const darkOpacityXl = darkShadowOpacity.toFixed(2);
		const darkOpacity2xl = (darkShadowOpacity * 2.5).toFixed(2);

		darkVars['shadow-2xs'] =
			`${darkShadowOffsetX} ${darkShadowOffsetY} ${darkShadowBlur} ${darkShadowSpread} ${addOpacity(darkShadowColor, darkOpacity2xs)}`;
		darkVars['shadow-xs'] =
			`${darkShadowOffsetX} ${darkShadowOffsetY} ${darkShadowBlur} ${darkShadowSpread} ${addOpacity(darkShadowColor, darkOpacityXs)}`;
		darkVars['shadow-sm'] =
			`${darkShadowOffsetX} ${darkShadowOffsetY} ${darkShadowBlur} ${darkShadowSpread} ${addOpacity(darkShadowColor, darkOpacitySm)}, 0px 1px 2px -1px ${addOpacity(darkShadowColor, darkOpacitySm)}`;
		darkVars['shadow'] = darkVars['shadow-sm'];
		darkVars['shadow-md'] =
			`${darkShadowOffsetX} ${darkShadowOffsetY} ${darkShadowBlur} ${darkShadowSpread} ${addOpacity(darkShadowColor, darkOpacityMd)}, 0px 2px 4px -1px ${addOpacity(darkShadowColor, darkOpacityMd)}`;
		darkVars['shadow-lg'] =
			`${darkShadowOffsetX} ${darkShadowOffsetY} ${darkShadowBlur} ${darkShadowSpread} ${addOpacity(darkShadowColor, darkOpacityLg)}, 0px 4px 6px -1px ${addOpacity(darkShadowColor, darkOpacityLg)}`;
		darkVars['shadow-xl'] =
			`${darkShadowOffsetX} ${darkShadowOffsetY} ${darkShadowBlur} ${darkShadowSpread} ${addOpacity(darkShadowColor, darkOpacityXl)}, 0px 8px 10px -1px ${addOpacity(darkShadowColor, darkOpacityXl)}`;
		darkVars['shadow-2xl'] =
			`${darkShadowOffsetX} ${darkShadowOffsetY} ${darkShadowBlur} ${darkShadowSpread} ${addOpacity(darkShadowColor, darkOpacity2xl)}`;

		const themeVars: Record<string, string> = {
			'font-sans': lightVars['font-sans'],
			'font-serif': lightVars['font-serif'],
			'font-mono': lightVars['font-mono'],
			radius: lightVars['radius'],
			'tracking-tighter': 'calc(var(--tracking-normal) - 0.05em)',
			'tracking-tight': 'calc(var(--tracking-normal) - 0.025em)',
			'tracking-wide': 'calc(var(--tracking-normal) + 0.025em)',
			'tracking-wider': 'calc(var(--tracking-normal) + 0.05em)',
			'tracking-widest': 'calc(var(--tracking-normal) + 0.1em)'
		};

		items.push({
			name: theme.name,
			type: 'registry:style',
			files: [],
			registryDependencies: [],
			css: {
				'@layer base': {
					body: {
						'letter-spacing': 'var(--letter-spacing)'
					}
				}
			},
			cssVars: {
				theme: themeVars,
				light: lightVars,
				dark: darkVars
			}
		});
	}

	return items;
}

function extractComponentName(importPath: string): string {
	const parts = importPath.split('/');
	const lastPart = parts.at(-1)!;

	if (lastPart === 'index.js') {
		return parts.at(-2)!;
	}

	if (lastPart.endsWith('.svelte')) {
		return parts.at(-2)!;
	}

	return lastPart;
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
					const component = extractComponentName(source);
					registryDependencies.add(`local:${component}`);
				} else if (source.includes('hook')) {
					const hook = source.split('/').at(-1)!.split('.')[0];
					registryDependencies.add(`local:${hook}`);
				}
			} else if (source.startsWith('$lib/')) {
				if (source.includes('ui')) {
					const component = extractComponentName(source);
					registryDependencies.add(component);
				} else if (source.includes('hook')) {
					const hook = source.split('/').at(-1)!.split('.')[0];
					registryDependencies.add(hook);
				} else if (source.includes(UTILS_PATH)) {
					registryDependencies.add('utils');
				}
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
