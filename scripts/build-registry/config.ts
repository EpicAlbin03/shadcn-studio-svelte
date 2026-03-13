import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { createPathsMatcher, getTsconfig } from 'get-tsconfig';
import type { RegistryConfig, RegistryDirs } from './types';

const DEFAULT_REGISTRY_DIR = '$lib/registry';

function inferRegistryDirs(registryDir: string): RegistryDirs {
	return {
		ui: `${registryDir}/ui`,
		blocks: `${registryDir}/blocks`,
		components: `${registryDir}/components`,
		examples: `${registryDir}/examples`,
		hooks: `${registryDir}/hooks`,
		lib: `${registryDir}/lib`
	};
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

/** Helper for type-safe config definition. */
export function defineConfig(config: RegistryConfig): RegistryConfig {
	return {
		...config,
		registryDir: config.registryDir ?? DEFAULT_REGISTRY_DIR,
		ignoredPackageDependencies:
			config.ignoredPackageDependencies ?? ['svelte', '@sveltejs/kit', 'vite', 'tailwindcss', '@tailwindcss/vite', '@sveltejs/vite-plugin-svelte'],
		crawlExtensions: config.crawlExtensions ?? ['.svelte', '.ts', '.js', '.mjs', '.cjs']
	};
}

export async function loadConfig(): Promise<RegistryConfig> {
	const configPath = path.resolve('registry.config.ts');
	if (!fs.existsSync(configPath)) {
		throw new Error('Missing registry.config.ts in project root. Create one using defineConfig().');
	}
	const mod = await import(pathToFileURL(configPath).href);
	const config = mod.default as RegistryConfig;
	const registryDir = config.registryDir ?? DEFAULT_REGISTRY_DIR;
	const inferredDirs = inferRegistryDirs(registryDir);
	const dirs = resolvePathRecord({ ...inferredDirs, ...(config.dirs ?? {}) });
	return { ...config, registryDir, dirs };
}
