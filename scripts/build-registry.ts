/**
 * Registry build script for shadcn-svelte registry projects.
 *
 * Usage:
 *   bun run scripts/build-registry.ts build-registry
 *
 * Reads `registry.config.ts` from the project root, crawls registry directories
 * using declarative CrawlSpecs, resolves dependencies via AST analysis, and outputs:
 *   - registry.json
 *   - src/__registry__/blocks.ts & index.js
 *   - static/schema/*.json
 */

import fs from 'node:fs';
import path from 'node:path';
import * as acorn from 'acorn';
import { tsPlugin } from '@sveltejs/acorn-typescript';
import { walk, type Node } from 'estree-walker';
import * as svelte from 'svelte/compiler';
import prettier from 'prettier';
import { rimraf } from 'rimraf';
import {
	componentsJsonSchema,
	registryItemSchema,
	registrySchema,
	type Registry,
	type RegistryItemFileType,
	type RegistryItemType
} from '@shadcn-svelte/registry';
import { createPathsMatcher, getTsconfig } from 'get-tsconfig';
import { toJSONSchema } from 'zod/v4';
import packageJson from '../package.json' with { type: 'json' };

// ============================================================================
// Types
// ============================================================================

type RegistryItems = Registry['items'];
type RegistryItemFiles = RegistryItems[number]['files'];
type RegistryAliases = NonNullable<Registry['aliases']>;
type RegistryAliasKey = keyof RegistryAliases;
type CrawlItemType = Exclude<
	RegistryItemType,
	'registry:file' | 'registry:page' | 'registry:theme' | 'registry:style' | 'registry:internal'
>;

export type ComponentMeta = Record<
	string,
	{
		cssVars?: RegistryItems[number]['cssVars'];
		css?: RegistryItems[number]['css'];
	}
>;

/** Vite-like plugin for injecting custom registry items. */
export type RegistryPlugin = {
	name: string;
	/** Called before crawling. Use for setup (e.g. creating directories). */
	buildStart?: () => void | Promise<void>;
	/** Return additional registry items to merge into the registry. */
	items: () => RegistryItems | Promise<RegistryItems>;
};

/** Registry directory configuration. Only include the dirs you use. */
export type RegistryDirs = {
	ui?: string;
	blocks?: string;
	components?: string;
	examples?: string;
	hooks?: string;
	lib?: string;
};

export type RegistryConfig = {
	name: string;
	homepage: string;
	aliases: RegistryAliases;
	overrideDependencies?: string[];
	dirs?: RegistryDirs;
	componentMeta?: ComponentMeta;
	plugins?: RegistryPlugin[];
};

/** Helper for type-safe config definition. */
export function defineConfig(config: RegistryConfig): RegistryConfig {
	return config;
}

// ============================================================================
// Crawl specs — declarative per-type configuration
// ============================================================================

/** Describes how to crawl a single registry type directory. */
type CrawlSpec = {
	/** Registry item type assigned to crawled items. */
	type: CrawlItemType;
	/** File type assigned to files within single-file items. */
	fileType: RegistryItemFileType;
	/** How top-level entries are handled. @default 'none' (files only) */
	folders?: 'only' | 'mixed' | 'none';
	/** File type for files within folder-based items. @default 'registry:file' */
	folderFileType?: RegistryItemFileType;
	/** Apply componentMeta from config to items. */
	componentMeta?: boolean;
	/** When both file and folder share a base name, folder wins. */
	folderTakesPriority?: boolean;
	/** Each nested file becomes its own item instead of one multi-file item (lib-style). */
	flattenFolders?: boolean;
	/** Name nested files as `basename-parentDir` to avoid conflicts. */
	nestedNaming?: boolean;
};

const CRAWL_SPECS = {
	ui: {
		type: 'registry:ui',
		fileType: 'registry:file',
		folders: 'only'
	},
	examples: {
		type: 'registry:example',
		fileType: 'registry:component'
	},
	blocks: {
		type: 'registry:block',
		fileType: 'registry:component',
		folders: 'mixed',
		folderFileType: 'registry:component'
	},
	components: {
		type: 'registry:component',
		fileType: 'registry:component',
		folders: 'mixed',
		componentMeta: true,
		folderTakesPriority: true
	},
	hooks: {
		type: 'registry:hook',
		fileType: 'registry:hook'
	},
	lib: {
		type: 'registry:lib',
		fileType: 'registry:lib',
		folders: 'mixed',
		flattenFolders: true,
		nestedNaming: true
	}
} satisfies Record<keyof RegistryDirs, CrawlSpec>;

// ============================================================================
// Constants
// ============================================================================

const tsParser = acorn.Parser.extend(tsPlugin());

type PackageDependencyMap = Record<string, string>;

const projectPackageJson = packageJson as {
	dependencies?: PackageDependencyMap;
	devDependencies?: PackageDependencyMap;
};

const IGNORED_PACKAGE_DEPENDENCIES = new Set(['svelte', '@sveltejs/kit', 'tailwindcss', 'vite']);

const PROJECT_PACKAGE_MAP = {
	...(projectPackageJson.dependencies ?? {}),
	...(projectPackageJson.devDependencies ?? {})
};

const PACKAGE_DEPENDENCIES = Object.keys(PROJECT_PACKAGE_MAP).filter(
	(dep) => !IGNORED_PACKAGE_DEPENDENCIES.has(dep)
);

const SOURCE_FILE_EXTENSIONS = new Set(['.svelte', '.ts', '.js', '.mjs', '.cjs']);

const PACKAGE_PEER_DEPENDENCIES = buildPackagePeerDependencies();

const OUTPUT_ITEM_TYPES = [
	'registry:ui',
	'registry:hook',
	'registry:component',
	'registry:lib',
	'registry:block',
	'registry:style'
] as const satisfies readonly RegistryItemType[];

const OUTPUT_ITEM_TYPE_SET = new Set<RegistryItemType>(OUTPUT_ITEM_TYPES);

const OUTPUT = {
	registryJson: 'registry.json',
	schemas: 'static/schema',
	internalRegistry: 'src/__registry__'
} as const;

// ============================================================================
// Config loading
// ============================================================================

async function loadConfig(): Promise<RegistryConfig> {
	const configPath = path.resolve('registry.config.ts');
	if (!fs.existsSync(configPath)) {
		throw new Error('Missing registry.config.ts in project root. Create one using defineConfig().');
	}
	const mod = await import(configPath);
	const config = mod.default as RegistryConfig;
	const dirs = config.dirs ? resolvePathRecord(config.dirs) : undefined;
	return { ...config, ...(dirs && { dirs }) };
}

// ============================================================================
// Helpers
// ============================================================================

function writeFileWithDirs(filePath: string, data: string): void {
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, data, 'utf8');
}

function stripExtension(filename: string): string {
	const lastDot = filename.lastIndexOf('.');
	if (lastDot <= 0) return filename;
	const secondLastDot = filename.lastIndexOf('.', lastDot - 1);
	const cutIndex = secondLastDot > 0 ? secondLastDot : lastDot;
	return filename.slice(0, cutIndex);
}

function getTypesPackageName(dep: string): string {
	if (!dep.startsWith('@')) return `@types/${dep}`;
	const [scope, pkg] = dep.slice(1).split('/');
	if (!scope || !pkg) return `@types/${dep.slice(1)}`;
	return `@types/${scope}__${pkg}`;
}

function toSortedArray(values: Set<string>): string[] {
	return [...values].sort((a, b) => a.localeCompare(b));
}

function toRegistryDependencyName(name: string): string {
	return name.startsWith('local:') ? name.slice('local:'.length) : name;
}

function toLocalRegistryDependency(name: string): string {
	return name.startsWith('local:') ? name : `local:${name}`;
}

function getTsconfigPathsMatcher(): (specifier: string) => string[] {
	const tsconfig =
		getTsconfig(path.resolve('package.json'), 'tsconfig.json') ??
		getTsconfig(path.resolve('package.json'), 'jsconfig.json');
	if (!tsconfig) {
		throw new Error('Failed to find a tsconfig.json or jsconfig.json from the project root.');
	}

	const matcher = createPathsMatcher(tsconfig);
	if (!matcher) {
		throw new Error(`Unable to create a tsconfig paths matcher from ${path.basename(tsconfig.path)}.`);
	}

	return matcher;
}

function resolvePathSpecifier(
	specifier: string,
	matchPath: (specifier: string) => string[]
): string {
	if (!specifier.startsWith('$')) {
		return path.resolve(specifier);
	}

	const [resolved] = matchPath(specifier);
	if (!resolved) {
		throw new Error(`Unable to resolve "${specifier}" from tsconfig compilerOptions.paths.`);
	}

	return path.resolve(resolved);
}

function resolvePathRecord(dirs: RegistryDirs): RegistryDirs {
	const matchPath = getTsconfigPathsMatcher();
	const resolved: RegistryDirs = {};

	for (const [key, value] of Object.entries(dirs) as [keyof RegistryDirs, string | undefined][]) {
		if (!value) continue;
		resolved[key] = resolvePathSpecifier(value, matchPath);
	}

	return resolved;
}

function parseDependencyName(importSource: string): string | undefined {
	if (!importSource || importSource.startsWith('.') || importSource.startsWith('/'))
		return undefined;
	if (importSource.startsWith('@')) {
		const [scope, pkg] = importSource.split('/');
		if (!scope || !pkg) return undefined;
		return `${scope}/${pkg}`;
	}
	return importSource.split('/')[0];
}

function getPackageDependenciesFromImport(importSource: string): string[] {
	const depName = parseDependencyName(importSource);
	if (!depName || !PROJECT_PACKAGE_MAP[depName]) return [];
	if (IGNORED_PACKAGE_DEPENDENCIES.has(depName)) return [];

	const dependencies = new Set<string>([depName]);
	for (const peer of PACKAGE_PEER_DEPENDENCIES.get(depName) ?? []) {
		if (!IGNORED_PACKAGE_DEPENDENCIES.has(peer)) dependencies.add(peer);
	}

	return [...dependencies];
}

function buildPackagePeerDependencies(): Map<string, Set<string>> {
	const peersByPackage = new Map<string, Set<string>>();

	for (const depName of PACKAGE_DEPENDENCIES) {
		const peers = new Set<string>();
		const packageJsonPath = path.resolve('node_modules', ...depName.split('/'), 'package.json');

		if (fs.existsSync(packageJsonPath)) {
			try {
				const depPackage = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8')) as {
					peerDependencies?: Record<string, string>;
					peerDependenciesMeta?: Record<string, { optional?: boolean }>;
				};

				for (const peerName of Object.keys(depPackage.peerDependencies ?? {})) {
					if (IGNORED_PACKAGE_DEPENDENCIES.has(peerName)) continue;
					if (depPackage.peerDependenciesMeta?.[peerName]?.optional) continue;
					if (PROJECT_PACKAGE_MAP[peerName]) peers.add(peerName);
				}
			} catch {
				// Ignore malformed dependency package metadata.
			}
		}

		const typesPackage = getTypesPackageName(depName);
		if (PROJECT_PACKAGE_MAP[typesPackage]) peers.add(typesPackage);

		peersByPackage.set(depName, peers);
	}

	return peersByPackage;
}

// ============================================================================
// AST-based dependency extraction
// ============================================================================

/**
 * Parses a file's imports to determine registry and package dependencies.
 * Uses config aliases to map import paths to registry item names.
 */
async function getFileDependencies(
	filename: string,
	content: string,
	config: RegistryConfig
): Promise<{ registryDependencies: Set<string>; packageDependencies: Set<string> }> {
	const extension = path.extname(filename);
	if (!SOURCE_FILE_EXTENSIONS.has(extension)) {
		return { registryDependencies: new Set(), packageDependencies: new Set() };
	}

	let ast: unknown;
	let moduleAst: unknown;

	if (filename.endsWith('.svelte')) {
		const { code } = await svelte.preprocess(content, [], { filename });
		const result = svelte.parse(code, { filename });
		ast = result.instance;
		if (result.module) moduleAst = result.module;
	} else {
		ast = tsParser.parse(content, { ecmaVersion: 'latest', sourceType: 'module' });
	}

	const registryDependencies = new Set<string>();
	const packageDependencies = new Set<string>();

	const aliasMap = new Map<string, RegistryAliasKey>();
	for (const [key, value] of Object.entries(config.aliases)) {
		if (!value) continue;
		aliasMap.set(value, key as RegistryAliasKey);
	}

	const enter = (node: Node) => {
		if (node.type === 'ImportDeclaration') {
			const source = node.source.value as string;

			let matched = false;
			for (const [aliasPath, aliasKey] of aliasMap) {
				if (!source.startsWith(aliasPath)) continue;
				matched = true;

				const afterAlias = source.slice(aliasPath.length + 1);
				const parts = afterAlias.split('/');
				const lastPart = parts.at(-1)!;

				if (aliasKey === 'utils') {
					registryDependencies.add(toRegistryDependencyName('utils'));
				} else if (aliasKey === 'components') {
					const name = stripExtension(lastPart);
					registryDependencies.add(toLocalRegistryDependency(name));
				} else if (aliasKey === 'ui') {
					const name =
						lastPart === 'index.js' || lastPart.endsWith('.svelte')
							? (parts.at(-2) ?? lastPart)
							: lastPart;
					registryDependencies.add(toRegistryDependencyName(name));
				} else if (aliasKey === 'lib') {
					const fileName = stripExtension(lastPart);
					if (parts.length > 1) {
						const parentDir = parts.at(-2)!;
						registryDependencies.add(toRegistryDependencyName(`${fileName}-${parentDir}`));
					} else {
						registryDependencies.add(toRegistryDependencyName(fileName));
					}
				} else {
					const name = stripExtension(lastPart);
					registryDependencies.add(toRegistryDependencyName(name));
				}
				break;
			}

			if (!matched && source.startsWith('$lib/')) {
				if (source.includes('/ui/')) {
					const parts = source.split('/');
					const lastPart = parts.at(-1)!;
					const name =
						lastPart === 'index.js' || lastPart.endsWith('.svelte') ? parts.at(-2)! : lastPart;
					registryDependencies.add(toRegistryDependencyName(name));
				} else if (source.includes('/hook')) {
					const name = stripExtension(source.split('/').at(-1)!);
					registryDependencies.add(toRegistryDependencyName(name));
				} else {
					const utilsAlias = config.aliases['utils'];
					if (utilsAlias && source.startsWith(utilsAlias)) {
						registryDependencies.add(toRegistryDependencyName('utils'));
					}
				}
			}

			for (const dep of getPackageDependenciesFromImport(source)) {
				packageDependencies.add(dep);
			}
		}
	};

	// @ts-expect-error estree-walker types don't perfectly match acorn/svelte AST
	walk(ast, { enter });
	if (moduleAst) {
		// @ts-expect-error same as above
		walk(moduleAst, { enter });
	}

	return { registryDependencies, packageDependencies };
}

// ============================================================================
// Generic crawlers
// ============================================================================

/** Crawl a registry type directory using the given spec. */
async function crawl(
	rootPath: string,
	spec: CrawlSpec,
	config: RegistryConfig
): Promise<RegistryItems> {
	if (!fs.existsSync(rootPath)) return [];

	const dir = fs.readdirSync(rootPath, { withFileTypes: true });
	const items: RegistryItems = [];
	const folders = spec.folders ?? 'none';

	const folderNames = spec.folderTakesPriority
		? new Set(dir.filter((d) => d.isDirectory()).map((d) => d.name))
		: undefined;

	for (const dirent of dir) {
		const entryPath = path.join(rootPath, dirent.name);

		if (dirent.isDirectory()) {
			if (folders === 'none') continue;
			if (spec.flattenFolders) {
				items.push(...(await crawlFlatFolder(entryPath, dirent.name, spec, config)));
			} else {
				items.push(await crawlFolder(entryPath, dirent.name, spec, config));
			}
			continue;
		}

		if (folders === 'only') continue;

		const name = stripExtension(dirent.name);
		if (folderNames?.has(name)) continue;

		const source = fs.readFileSync(entryPath, 'utf8');
		const relativePath = path.relative(process.cwd(), entryPath);
		const { registryDependencies, packageDependencies } = await getFileDependencies(
			entryPath,
			source,
			config
		);

		const meta = spec.componentMeta ? config.componentMeta?.[name] : undefined;

		items.push({
			name,
			type: spec.type,
			dependencies: toSortedArray(packageDependencies),
			registryDependencies: toSortedArray(registryDependencies),
			files: [{ path: relativePath, type: spec.fileType }],
			...(meta?.cssVars && { cssVars: meta.cssVars }),
			...(meta?.css && { css: meta.css })
		});
	}

	return items;
}

/** Crawl a folder into a single multi-file registry item. */
async function crawlFolder(
	folderPath: string,
	folderName: string,
	spec: CrawlSpec,
	config: RegistryConfig
): Promise<RegistryItems[number]> {
	const dir = fs.readdirSync(folderPath, { withFileTypes: true, recursive: true });
	const files: RegistryItemFiles = [];
	const registryDeps = new Set<string>();
	const packageDeps = new Set<string>();
	const isBlockItem = spec.type === 'registry:block';
	const defaultFileType = spec.folderFileType ?? 'registry:file';

	for (const dirent of dir) {
		if (!dirent.isFile()) continue;

		const absPath = path.join(dirent.parentPath ?? folderPath, dirent.name);

		const relativePath = path.relative(process.cwd(), absPath);
		const source = fs.readFileSync(absPath, 'utf8');

		const isPageFile = dirent.name === '+page.svelte';
		const fileType = isPageFile ? 'registry:page' : defaultFileType;

		const entry: RegistryItemFiles[number] = { path: relativePath, type: fileType };

		// Block-style folders: all files get target paths
		if (isBlockItem) {
			const compPath = isPageFile
				? dirent.name
				: path.relative(folderPath, absPath).replace(/\\/g, '/');
			entry.target = `${folderName}/${compPath}`;
		}

		files.push(entry);

		const deps = await getFileDependencies(absPath, source, config);
		deps.registryDependencies.forEach((d) => registryDeps.add(d));
		deps.packageDependencies.forEach((d) => packageDeps.add(d));
	}

	const configMeta = spec.componentMeta ? config.componentMeta?.[folderName] : undefined;

	return {
		name: folderName,
		type: spec.type,
		dependencies: toSortedArray(packageDeps),
		registryDependencies: toSortedArray(registryDeps),
		files,
		...(configMeta?.cssVars && { cssVars: configMeta.cssVars }),
		...(configMeta?.css && { css: configMeta.css })
	};
}

/** Crawl a folder where each nested file becomes its own registry item (lib-style). */
async function crawlFlatFolder(
	folderPath: string,
	folderName: string,
	spec: CrawlSpec,
	config: RegistryConfig
): Promise<RegistryItems> {
	const dir = fs.readdirSync(folderPath, { withFileTypes: true, recursive: true });
	const items: RegistryItems = [];

	for (const dirent of dir) {
		if (!dirent.isFile()) continue;

		const basename = stripExtension(dirent.name);
		const absPath = path.join(dirent.parentPath || folderPath, dirent.name);
		const relativePath = path.relative(process.cwd(), absPath);
		const source = fs.readFileSync(absPath, 'utf8');

		const relativeToFolder = path.relative(folderPath, absPath);
		const target = `${folderName}/${relativeToFolder.replace(/\\/g, '/')}`;
		const pathParts = relativeToFolder.split(path.sep);
		const name =
			spec.nestedNaming && pathParts.length > 1 ? `${basename}-${pathParts.at(-2)}` : basename;

		const { registryDependencies, packageDependencies } = await getFileDependencies(
			absPath,
			source,
			config
		);

		const file: RegistryItemFiles[number] = { path: relativePath, type: spec.fileType, target };

		items.push({
			name,
			type: spec.type,
			dependencies: toSortedArray(packageDependencies),
			registryDependencies: toSortedArray(registryDependencies),
			files: [file]
		});
	}

	return items;
}

// ============================================================================
// Registry builder
// ============================================================================

async function buildRegistry(config: RegistryConfig): Promise<RegistryItems> {
	const dirs = config.dirs ?? {};

	const crawlTasks = Object.entries(dirs)
		.filter(([, dir]) => dir)
		.map(([key, dir]) => crawl(path.resolve(dir!), CRAWL_SPECS[key as keyof RegistryDirs], config));

	const items: RegistryItems = (await Promise.all(crawlTasks)).flat();

	if (config.plugins) {
		for (const plugin of config.plugins) {
			items.push(...(await plugin.items()));
		}
	}

	return items;
}

// ============================================================================
// Output generation
// ============================================================================

export async function build(): Promise<void> {
	const config = await loadConfig();

	if (config.plugins) {
		for (const plugin of config.plugins) {
			await plugin.buildStart?.();
		}
	}

	const prettierConfig = await prettier.resolveConfig(import.meta.url);
	if (!prettierConfig) throw new Error('Failed to resolve prettier config.');

	const registry = await buildRegistry(config);

	// Validate: no self-references
	const selfReferenced = registry.filter((item) => {
		const localName = `local:${item.name}`;
		return (
			item.registryDependencies.includes(item.name) || item.registryDependencies.includes(localName)
		);
	});
	if (selfReferenced.length) {
		const msg = selfReferenced.map((item) => `  - '${item.name}' depends on itself`).join('\n');
		throw new Error(`Self-referencing registry items:\n${msg}`);
	}

	// Validate: no duplicate names
	const nameCounts = new Map<string, number>();
	for (const item of registry) {
		nameCounts.set(item.name, (nameCounts.get(item.name) ?? 0) + 1);
	}
	const duplicates = [...nameCounts.entries()].filter(([, count]) => count > 1);
	if (duplicates.length) {
		const msg = duplicates
			.map(([name, count]) => `  - '${name}' appears ${count} times`)
			.join('\n');
		throw new Error(`Duplicate registry item names:\n${msg}`);
	}

	// Build registry.json
	const registryInput: Registry = {
		$schema: `./${OUTPUT.schemas}/registry.json`,
		name: config.name,
		homepage: config.homepage,
		aliases: config.aliases,
		...(config.overrideDependencies && {
			overrideDependencies: config.overrideDependencies
		}),
		items: [...registry]
	};

	const result = registrySchema.parse(registryInput, { jitless: true });

	const filteredItems = result.items.filter((item) => OUTPUT_ITEM_TYPE_SET.has(item.type));
	const registryJsonPath = path.resolve(OUTPUT.registryJson);
	const registryJson = JSON.stringify({ ...result, items: filteredItems }, null, '\t');
	const formatted = await prettier.format(registryJson, {
		...prettierConfig,
		filepath: registryJsonPath
	});
	fs.writeFileSync(registryJsonPath, formatted, 'utf8');

	// Build __registry__ (internal dev files)
	const internalDir = path.resolve(OUTPUT.internalRegistry);
	rimraf.sync(internalDir);

	if (config.dirs?.blocks) {
		const blocks = result.items.filter((item) => item.type === 'registry:block');

		if (blocks.length) {
			const blocksIndex = [
				'// This file is autogenerated by scripts/build-registry.ts',
				'// Do not edit this file directly.',
				'export const blocks = [',
				...blocks.map((b) => `"${b.name}",`),
				'] as const;',
				''
			].join('\n');
			writeFileWithDirs(path.resolve(internalDir, 'blocks.ts'), blocksIndex);
		}
	}

	if (config.dirs?.examples) {
		const examples = result.items.filter((item) => item.type === 'registry:example');

		let index =
			'// This file is autogenerated by scripts/build-registry.ts\n// Do not edit this file directly.\nexport const Index = {';

		for (const item of examples) {
			const resolveFiles = item.files.map((f) =>
				f.path.replace('src/', '../').replaceAll(path.sep, '/')
			);
			index += `\n"${item.name}": {\n\tfiles: [${resolveFiles.map((f) => `"${f}"`)}],\n},`;
		}

		index += '\n}\n';
		writeFileWithDirs(path.resolve(internalDir, 'index.js'), index);
	}

	// Build JSON schemas
	const schemaDir = path.resolve(OUTPUT.schemas);

	writeFileWithDirs(
		path.resolve('static', 'schema.json'),
		JSON.stringify(toJSONSchema(componentsJsonSchema), null, '\t')
	);

	writeFileWithDirs(
		path.resolve(schemaDir, 'registry.json'),
		JSON.stringify(toJSONSchema(registrySchema), null, '\t')
	);

	writeFileWithDirs(
		path.resolve(schemaDir, 'registry-item.json'),
		JSON.stringify(toJSONSchema(registryItemSchema), null, '\t')
	);

	console.log('Registry build complete.');
}

// ============================================================================
// CLI entry point
// ============================================================================

if (process.argv.includes('build-registry')) {
	build();
}
