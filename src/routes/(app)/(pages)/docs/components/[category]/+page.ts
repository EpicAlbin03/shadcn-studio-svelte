import { categories, getCategory, type ComponentCategory } from '$lib/config/components.svelte';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';
import { getComponentsByNames } from '$lib/utils/components';
import type { ComponentProps } from '$lib/types/components';
import type { HighlightedCodeBlock } from '../../../../../api/registry/[item]/+server.js';
import { BLOCKS_QUERY_DELIMITER } from '$lib/utils/blocks';

export const prerender = true;

export const entries: EntryGenerator = () =>
	categories
		.filter((category) => !category.isComingSoon)
		.map((category) => ({
			category: category.slug
		}));

const MAX_CODE_BLOCKS_PER_REQUEST = 5; // keeps prerendered dependency paths below Windows limits

const chunkCodeBlocks = (items: string[], size: number): string[][] => {
	const chunks: string[][] = [];
	for (let i = 0; i < items.length; i += size) {
		chunks.push(items.slice(i, i + size));
	}
	return chunks;
};

export const load: PageLoad = async ({ params, fetch }) => {
	const category = getCategory(params.category);

	if (!category || category.isComingSoon) {
		throw error(404, 'Category not found');
	}

	const components = getComponentsByNames(category.components.map((item) => item.name));

	const codeBlockNamesToFetch = components.map((comp) => comp.name);
	const codeBlockChunks = chunkCodeBlocks(codeBlockNamesToFetch, MAX_CODE_BLOCKS_PER_REQUEST);

	let highlightedCodeBlocks: HighlightedCodeBlock[] = [];

	if (codeBlockChunks.length > 0) {
		try {
			const chunkedResults = await Promise.all(
				codeBlockChunks.map(async (chunk) => {
					const codeBlocksQuery = chunk
						.map((name) => encodeURIComponent(name))
						.join(BLOCKS_QUERY_DELIMITER);
					const res = await fetch(`/api/registry/${codeBlocksQuery}`);

					if (res.ok) {
						return (await res.json()) as HighlightedCodeBlock[];
					}

					return [];
				})
			);

			highlightedCodeBlocks = chunkedResults.flat();
		} catch (error) {
			console.error('Failed to fetch components:', error);
		}
	}

	const codeBlocksMap = new Map(highlightedCodeBlocks.map((codeBlock) => [codeBlock.name, codeBlock]));

	// Prepare components data for the client component
	const componentsData: (ComponentProps | null)[] = components.map((comp) => {
		const codeBlock = codeBlocksMap.get(comp.name);

		if (!codeBlock?.files) {
			return null;
		}

		return {
			...comp,
			...codeBlock
		};
	});

	const validComponentsData = componentsData.filter((item) => item !== null) as ComponentProps[];

	return {
		validComponentsData,
		category: category as ComponentCategory,
		components,
		codeBlocksMap
	};
};
