import { categories, getCategory, type ComponentCategory } from '$lib/config/components.svelte';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';
import { getComponentsByNames } from '$lib/utils/components';
import type { ComponentProps } from '$lib/types/components';
import type { HighlightedBlock } from '../../../../../api/block/[block]/+server.js';

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

	// Fetch all components in a single request
	let highlightedBlocks: HighlightedBlock[] = [];

	if (componentNamesToFetch.length > 0) {
		try {
			const blocksQuery = componentNamesToFetch.join(',');
			const res = await fetch(`/api/block/${encodeURIComponent(blocksQuery)}`);

			if (res.ok) {
				highlightedBlocks = await res.json();
			}
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
