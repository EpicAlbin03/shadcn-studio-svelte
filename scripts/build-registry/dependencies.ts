import fs from 'node:fs';
import path from 'node:path';
import * as acorn from 'acorn';
import { tsPlugin } from '@sveltejs/acorn-typescript';
import { walk, type Node } from 'estree-walker';
import * as svelte from 'svelte/compiler';
import packageJson from '../../package.json' with { type: 'json' };
import type { RegistryAliasKey, RegistryConfig } from './types';
import {
	getTypesPackageName,
	stripExtension,
	toLocalRegistryDependency,
	toRegistryDependencyName
} from './utils';

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

/**
 * Parses a file's imports to determine registry and package dependencies.
 * Uses config aliases to map import paths to registry item names.
 */
export async function getFileDependencies(
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
