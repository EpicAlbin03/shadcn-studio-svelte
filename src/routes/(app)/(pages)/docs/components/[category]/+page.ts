import { categories, getCategory, type ComponentCategory } from '$lib/config/components.svelte';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';
import { getComponentsByNames } from '$lib/utils/components';
import type { ComponentProps } from '$lib/types/components';
import type { HighlightedBlock } from '../../../../../api/block/[block]/+server.js';
import { BLOCKS_QUERY_DELIMITER } from '$lib/utils/blocks';

export const prerender = true;

export const entries: EntryGenerator = () =>
	categories
		.filter((category) => !category.isComingSoon)
		.map((category) => ({
			category: category.slug
		}));

/**
 * Any components / blocks that won't have a .json file associated with them.
 */
const ITEMS_TO_IGNORE = ['combobox', 'date-picker', 'typography'];
const MAX_BLOCKS_PER_REQUEST = 5; // keeps prerendered dependency paths below Windows limits

const chunkBlocks = (items: string[], size: number): string[][] => {
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

	// Filter out components to ignore
	const componentNamesToFetch = components
		.map((comp) => comp.name)
		.filter((name) => !ITEMS_TO_IGNORE.includes(name));

	const fetchChunks = chunkBlocks(componentNamesToFetch, MAX_BLOCKS_PER_REQUEST);

	let highlightedBlocks: HighlightedBlock[] = [];

	if (fetchChunks.length > 0) {
		try {
			const chunkedResults = await Promise.all(
				fetchChunks.map(async (chunk) => {
					const blocksQuery = chunk
						.map((name) => encodeURIComponent(name))
						.join(BLOCKS_QUERY_DELIMITER);
					const res = await fetch(`/api/block/${blocksQuery}`);

					if (res.ok) {
						return (await res.json()) as HighlightedBlock[];
					}

					return [];
				})
			);

			highlightedBlocks = chunkedResults.flat();
		} catch (error) {
			console.error('Failed to fetch components:', error);
		}
	}

	const blocksMap = new Map(highlightedBlocks.map((block) => [block.name, block]));

	// Prepare components data for the client component
	const componentsData: (ComponentProps | null)[] = components.map((comp) => {
		const block = blocksMap.get(comp.name);

		if (!block?.files) {
			return null;
		}

		return {
			...comp,
			...block
		};
	});

	const validComponentsData = componentsData.filter((item) => item !== null) as ComponentProps[];

	return {
		validComponentsData,
		category: category as ComponentCategory,
		components,
		blocksMap
	};
};
