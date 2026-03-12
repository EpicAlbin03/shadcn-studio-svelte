import fs from 'node:fs';
import path from 'node:path';
import { getFileDependencies } from './dependencies';
import type { CrawlSpec, RegistryConfig, RegistryDirs, RegistryItemFiles, RegistryItems } from './types';
import { stripExtension, toSortedArray } from './utils';

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

/** Crawl a registry type directory using the given spec. */
async function crawl(rootPath: string, spec: CrawlSpec, config: RegistryConfig): Promise<RegistryItems> {
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

export async function buildRegistry(config: RegistryConfig): Promise<RegistryItems> {
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
