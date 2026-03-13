import path from 'node:path';
import { z } from 'zod/v4';
import { json } from '@sveltejs/kit';
import { registryItemFileSchema, registryItemSchema } from '@shadcn-svelte/registry';
import componentsConfig from '../../../../../components.json';
import { highlightCode } from '$lib/utils/highlight-code.js';
import {
	transformImportPaths,
	transformBlockRelativeImports,
	transformTargetPath
} from '$lib/registry/registry-utils';
import type { RequestHandler } from './$types.js';
import { blockMeta } from '$lib/registry/registry-block-meta.js';
import { BLOCKS_QUERY_DELIMITER } from '$lib/utils/blocks';
import { generateCssFromMeta } from '$lib/utils/generate-css-from-meta.js';

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

async function loadItem(itemName: string, visited = new Set<string>()): Promise<HighlightedBlock> {
	// Prevent infinite loops
	if (visited.has(itemName)) {
		throw new Error(`Circular dependency detected: ${itemName}`);
	}
	visited.add(itemName);

	const { default: mod } = await import(`../../../../__registry__/json/${itemName}.json`);
	const item = registryItemSchema.parse(mod);
	const meta = blockMeta[item.name as keyof typeof blockMeta];
	const files = item.files.map(async (file) => {
		const lang = path.extname(file.target).slice(1);

		file.content = transformImportPaths(file.content, componentsConfig.aliases);
		if (item.type === 'registry:block' && file.type === 'registry:page') {
			file.content = transformBlockRelativeImports(file.content, item.name);
		}

		const highlightedContent = await highlightCode(file.content, lang);

		return { ...file, highlightedContent, target: transformTargetPath(file.target, item.type) };
	});

	let allFiles = await Promise.all(files);

	// Load registry dependencies and include their files
	if (item.registryDependencies && item.registryDependencies.length > 0) {
		const dependencyFiles = await loadRegistryDependencies(item.registryDependencies, visited);
		allFiles = [...allFiles, ...dependencyFiles];
	}

	// Add styles/app.css if cssVars or css exists
	const cssContent = generateCssFromMeta(
		item.cssVars,
		item.css as Parameters<typeof generateCssFromMeta>[1]
	);
	if (cssContent) {
		const highlightedCss = await highlightCode(cssContent, 'css');
		allFiles.push({
			target: 'app.css',
			type: 'registry:file',
			content: cssContent,
			highlightedContent: highlightedCss
		});
	}

	return highlightedBlockSchema.parse({
		...item,
		files: allFiles,
		description: meta?.description,
		meta
	});
}

function normalizeItemNames(itemNames: string[]): string[] {
	return Array.from(
		new Set(
			itemNames
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

function parseItemParam(itemParam?: string): string[] | null {
	if (!itemParam) return null;

	if (itemParam.includes(BLOCKS_QUERY_DELIMITER)) {
		return itemParam.split(BLOCKS_QUERY_DELIMITER);
	}

	if (itemParam.includes(',')) {
		return itemParam.split(',');
	}

	return null;
}

async function loadMultipleItems(itemNames: string[]): Promise<HighlightedBlock[]> {
	const items = await Promise.all(
		itemNames.map(async (name) => {
			try {
				return await loadItem(name);
			} catch (error) {
				console.error(`Failed to load item: ${name}`, error);
				return null;
			}
		})
	);

	return items.filter((item): item is HighlightedBlock => item !== null);
}

export const GET: RequestHandler = async ({ params }) => {
	const itemParam = params.item;
	if (!itemParam) {
		return json({ message: 'Missing registry item parameter.' }, { status: 400 });
	}

	const parsedItemNames = parseItemParam(itemParam);
	if (parsedItemNames) {
		const itemNames = normalizeItemNames(parsedItemNames);
		const validItems = await loadMultipleItems(itemNames);
		return json(validItems);
	}

	// Handle single block
	const item = await loadItem(itemParam);
	return json(item);
};

export const prerender = true;
