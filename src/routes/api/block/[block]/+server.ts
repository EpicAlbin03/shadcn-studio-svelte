import path from 'node:path';
import { z } from 'zod/v4';
import { json } from '@sveltejs/kit';
import { registryItemFileSchema, registryItemSchema } from '@shadcn-svelte/registry';
import { highlightCode } from '$lib/utils/highlight-code.js';
import {
	transformUIPath,
	transformComponentPath,
	transformImportPaths,
	transformBlockPath,
	transformLibPath,
	transformBlockRelativeImports,
	transformHookPath,
	transformPagePath
} from '$lib/registry/registry-utils';
import type { RequestHandler } from './$types.js';
import { blockMeta } from '$lib/registry/registry-block-meta.js';
import { BLOCKS_QUERY_DELIMITER } from '$lib/utils/blocks';

export type HighlightedBlock = z.output<typeof highlightedBlockSchema>;

const highlightedBlockSchema = registryItemSchema
	.pick({ name: true, description: true, meta: true, type: true })
	.extend({
		files: z.array(
			registryItemFileSchema.extend({
				highlightedContent: z.string()
			})
		)
	});

type HighlightedFile = z.infer<typeof registryItemFileSchema> & { highlightedContent: string };

async function loadRegistryDependencies(
	dependencies: string[],
	visited: Set<string>
): Promise<HighlightedFile[]> {
	const dependencyFiles = await Promise.all(
		dependencies.map(async (dep) => {
			// Handle both "local:component-name" and "./component-name.json" formats
			const depName = dep
				.replace(/^local:/, '')
				.replace(/^\.\//, '')
				.replace(/\.json$/, '');

			try {
				const depItem = await loadItem(depName, new Set(visited));
				return depItem.files;
			} catch (error) {
				// Skip dependencies that don't exist in the registry
				// (e.g., base UI components like "button" that are part of shadcn-svelte)
				if (error instanceof Error && error.message.includes('Unknown variable dynamic import')) {
					return [];
				}
				console.error(`Failed to load dependency: ${depName}`, error);
				return [];
			}
		})
	);

	return dependencyFiles.flat();
}

async function loadItem(block: string, visited = new Set<string>()): Promise<HighlightedBlock> {
	// Prevent infinite loops
	if (visited.has(block)) {
		throw new Error(`Circular dependency detected: ${block}`);
	}
	visited.add(block);

	const { default: mod } = await import(`../../../../__registry__/json/${block}.json`);
	const item = registryItemSchema.parse(mod);
	const meta = blockMeta[item.name as keyof typeof blockMeta];
	const files = item.files.map(async (file) => {
		const lang = path.extname(file.target).slice(1);

		file.content = transformImportPaths(file.content);
		if (item.type === 'registry:block' && file.type === 'registry:page') {
			file.content = transformBlockRelativeImports(file.content, item.name);
		}

		const highlightedContent = await highlightCode(file.content, lang);
		let target;

		if (file.type === 'registry:page') {
			target = transformPagePath(file.target);
		} else if (item.type === 'registry:component') {
			target = transformComponentPath(file.target);
		} else if (item.type === 'registry:block') {
			target = transformBlockPath(file.target);
		} else if (item.type === 'registry:lib') {
			target = transformLibPath(file.target);
		} else if (item.type === 'registry:ui') {
			target = transformUIPath(file.target);
		} else if (item.type === 'registry:hook') {
			target = transformHookPath(file.target);
		} else {
			target = file.target;
		}
		return { ...file, highlightedContent, target };
	});

	let allFiles = await Promise.all(files);

	// Load registry dependencies and include their files
	if (item.registryDependencies && item.registryDependencies.length > 0) {
		const dependencyFiles = await loadRegistryDependencies(item.registryDependencies, visited);
		allFiles = [...allFiles, ...dependencyFiles];
	}

	return highlightedBlockSchema.parse({
		...item,
		files: allFiles,
		description: meta?.description,
		meta
	});
}

function normalizeBlockNames(blockNames: string[]): string[] {
	return Array.from(
		new Set(
			blockNames
				.map((name) => {
					const trimmed = name.trim();
					try {
						return decodeURIComponent(trimmed);
					} catch {
						return trimmed;
					}
				})
				.filter((name) => name.length > 0)
		)
	);
}

function parseBlockParam(blockParam: string): string[] | null {
	if (blockParam.includes(BLOCKS_QUERY_DELIMITER)) {
		return blockParam.split(BLOCKS_QUERY_DELIMITER);
	}

	if (blockParam.includes(',')) {
		return blockParam.split(',');
	}

	return null;
}

async function loadMultipleBlocks(blockNames: string[]): Promise<HighlightedBlock[]> {
	const items = await Promise.all(
		blockNames.map(async (name) => {
			try {
				return await loadItem(name);
			} catch (error) {
				console.error(`Failed to load block: ${name}`, error);
				return null;
			}
		})
	);

	return items.filter((item): item is HighlightedBlock => item !== null);
}

export const GET: RequestHandler = async ({ params }) => {
	const { block } = params;

	const parsedBlockNames = parseBlockParam(block);
	if (parsedBlockNames) {
		const blockNames = normalizeBlockNames(parsedBlockNames);
		const validItems = await loadMultipleBlocks(blockNames);
		return json(validItems);
	}

	// Handle single block
	const item = await loadItem(block);
	return json(item);
};

export const prerender = true;
