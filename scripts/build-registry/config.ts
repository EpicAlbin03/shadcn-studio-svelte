import fs from 'node:fs';
import path from 'node:path';
import { createPathsMatcher, getTsconfig } from 'get-tsconfig';
import type { RegistryConfig, RegistryDirs } from './types';

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
	return config;
}

export async function loadConfig(): Promise<RegistryConfig> {
	const configPath = path.resolve('registry.config.ts');
	if (!fs.existsSync(configPath)) {
		throw new Error('Missing registry.config.ts in project root. Create one using defineConfig().');
	}
	const mod = await import(configPath);
	const config = mod.default as RegistryConfig;
	const dirs = config.dirs ? resolvePathRecord(config.dirs) : undefined;
	return { ...config, ...(dirs && { dirs }) };
}
