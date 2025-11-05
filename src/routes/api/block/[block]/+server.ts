import path from 'node:path';
import { z } from 'zod/v4';
import { json } from '@sveltejs/kit';
import { registryItemFileSchema, registryItemSchema } from '@shadcn-svelte/registry';
import { highlightCode } from '$lib/utils/highlight-code.js';
import {
	transformUIPath,
	transformComponentPath,
	transformImportPaths
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

async function loadItem(block: string): Promise<HighlightedBlock> {
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
		} else {
			target = transformUIPath(file.target);
		}
		return { ...file, highlightedContent, target };
	});

	return highlightedBlockSchema.parse({
		...item,
		files: await Promise.all(files)
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
