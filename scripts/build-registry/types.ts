import type {
	Registry,
	RegistryItemFileType,
	RegistryItemType
} from '@shadcn-svelte/registry';

export type RegistryItems = Registry['items'];
export type RegistryItemFiles = RegistryItems[number]['files'];
export type RegistryAliases = NonNullable<Registry['aliases']>;
export type RegistryAliasKey = keyof RegistryAliases;
export type CrawlItemType = Exclude<
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
	/** Base path for inferred registry dirs. @default '$lib/registry' */
	registryDir?: string;
	overrideDependencies?: string[];
	ignoredPackageDependencies?: string[];
	crawlExtensions?: string[];
	/** Optional per-dir overrides for inferred paths. */
	dirs?: RegistryDirs;
	componentMeta?: ComponentMeta;
	plugins?: RegistryPlugin[];
};

/** Describes how to crawl a single registry type directory. */
export type CrawlSpec = {
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
