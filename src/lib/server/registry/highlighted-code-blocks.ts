import path from 'node:path';
import { z } from 'zod/v4';
import { registryItemFileSchema, registryItemSchema } from '@shadcn-svelte/registry';
import componentsConfig from '../../../../components.json';
import { highlightCode } from '$lib/utils/highlight-code.js';
import {
	transformImportPaths,
	transformBlockRelativeImports,
	transformTargetPath
} from '$lib/registry/registry-utils';
import { blockMeta } from '$lib/registry/registry-block-meta.js';
import { generateCssFromMeta } from '$lib/utils/generate-css-from-meta.js';

const highlightedCodeBlockSchema = registryItemSchema.pick({
	name: true,
	description: true,
	meta: true,
	type: true
});

const highlightedCodeBlockWithFilesSchema = highlightedCodeBlockSchema.extend({
	files: z.array(
		registryItemFileSchema.extend({
			highlightedContent: z.string()
		})
	)
});

export type HighlightedCodeBlock = z.output<typeof highlightedCodeBlockWithFilesSchema>;

type HighlightedFile = z.infer<typeof registryItemFileSchema> & { highlightedContent: string };

function isMissingRegistryItemError(error: unknown) {
	return error instanceof Error && error.message.includes('Unknown variable dynamic import');
}

async function loadRegistryDependencies(dependencies: string[], visited: Set<string>) {
	const dependencyFiles = await Promise.all(
		dependencies.map(async (dep) => {
			// Handle both "local:component-name" and "./component-name.json" formats.
			const depName = dep.replace(/^local:/, '').replace(/^\.\//, '').replace(/\.json$/, '');

			try {
				const depItem = await loadHighlightedCodeBlock(depName, new Set(visited));
				return depItem.files;
			} catch (error) {
				// Skip dependencies that don't exist in the registry
				// (e.g., base UI components like "button" that are part of shadcn-svelte).
				if (isMissingRegistryItemError(error)) {
					return [];
				}
				console.error(`Failed to load dependency: ${depName}`, error);
				return [];
			}
		})
	);

	return dependencyFiles.flat();
}

export async function loadHighlightedCodeBlock(itemName: string, visited = new Set<string>()) {
	// Prevent infinite loops.
	if (visited.has(itemName)) {
		throw new Error(`Circular dependency detected: ${itemName}`);
	}
	visited.add(itemName);

	const { default: mod } = await import(`../../../__registry__/json/${itemName}.json`);
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

	let allFiles: HighlightedFile[] = await Promise.all(files);

	// Load registry dependencies and include their files.
	if (item.registryDependencies && item.registryDependencies.length > 0) {
		const dependencyFiles = await loadRegistryDependencies(item.registryDependencies, visited);
		allFiles = [...allFiles, ...dependencyFiles];
	}

	// Add styles/app.css if cssVars or css exists.
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

	return highlightedCodeBlockWithFilesSchema.parse({
		...item,
		files: allFiles,
		description: meta?.description,
		meta
	});
}

export async function loadHighlightedCodeBlocks(itemNames: string[]) {
	const items = await Promise.all(
		itemNames.map(async (name) => {
			try {
				return await loadHighlightedCodeBlock(name);
			} catch (error) {
				if (isMissingRegistryItemError(error)) {
					return null;
				}
				console.error(`Failed to load item: ${name}`, error);
				return null;
			}
		})
	);

	return items.filter((item): item is HighlightedCodeBlock => item !== null);
}
