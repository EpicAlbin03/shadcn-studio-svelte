import path from 'node:path';
import { z } from 'zod/v4';
import { json } from '@sveltejs/kit';
import { registryItemFileSchema, registryItemSchema } from '@shadcn-svelte/registry';
import { highlightCode } from '$lib/utils/highlight-code.js';
import {
	transformUIPath,
	transformComponentPath,
	transformImportPaths,
	transformBlockPath
} from '$lib/registry/registry-utils';
import type { RequestHandler } from './$types.js';

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
	// const meta = blockMeta[item.name as keyof typeof blockMeta];
	const files = item.files.map(async (file) => {
		const lang = path.extname(file.target).slice(1);

		file.content = transformImportPaths(file.content);
		const highlightedContent = await highlightCode(file.content, lang);
		let target;
		if (item.type === 'registry:component') {
			target = transformComponentPath(file.target);
		} else if (item.type === 'registry:block') {
			target = transformBlockPath(file.target);
		} else {
			target = transformUIPath(file.target);
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
		files: allFiles
		// description: meta?.description,
		// meta
	});
}

export const GET: RequestHandler = async ({ params, url }) => {
	const { block } = params;

	// Check if multiple blocks are requested via query parameter
	const blocksParam = url.searchParams.get('blocks');

	if (blocksParam) {
		// Handle multiple blocks
		const blockNames = blocksParam
			.split(',')
			.map((name) => name.trim())
			.filter(Boolean);
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

		// Filter out any failed loads
		const validItems = items.filter((item): item is HighlightedBlock => item !== null);
		return json(validItems);
	}

	// Handle single block (existing behavior)
	const item = await loadItem(block);
	return json(item);
};

export const prerender = true;
