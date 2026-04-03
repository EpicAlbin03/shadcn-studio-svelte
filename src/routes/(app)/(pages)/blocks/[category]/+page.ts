import { error } from '@sveltejs/kit';
import type { Component } from 'svelte';
import { blockCategories, NEW_BLOCKS } from '$lib/registry/blocks';
import type { HighlightedCodeBlock } from '$lib/server/registry/highlighted-code-blocks';
import type { EntryGenerator, PageLoad } from './$types.js';

export const prerender = true;

export const entries: EntryGenerator = () => {
	const categoryEntries = blockCategories
		.map(({ id }) => ({ category: id }));
	if (NEW_BLOCKS.length > 0) {
		categoryEntries.unshift({ category: 'new' });
	}
	return categoryEntries;
};

type Item = HighlightedCodeBlock & {
	component?: Promise<Component>;
};

// TODO: Improve this stuff
export const load: PageLoad = async ({ params, data, fetch }) => {
	const category = params.category;

	let loadItems;

	if (category === 'new') {
		loadItems = data.newBlocks.map(async (block) => {
			const resp = await fetch(`/api/registry/${block}`);
			return (await resp.json()) as Item;
		});
	} else if (category === 'marketing') {
		loadItems = data.marketings.map(async (block) => {
			const resp = await fetch(`/api/registry/${block}`);
			return (await resp.json()) as Item;
		});
	} else if (category === 'dashboard') {
		loadItems = data.dashboards.map(async (block) => {
			const resp = await fetch(`/api/registry/${block}`);
			return (await resp.json()) as Item;
		});
	} else if (category === 'ecommerce') {
		loadItems = data.ecommerces.map(async (block) => {
			const resp = await fetch(`/api/registry/${block}`);
			return (await resp.json()) as Item;
		});
	} else if (category === 'datatable') {
		loadItems = data.datatables.map(async (block) => {
			const resp = await fetch(`/api/registry/${block}`);
			return (await resp.json()) as Item;
		});
	} else if (category === 'bento') {
		loadItems = data.bentos.map(async (block) => {
			const resp = await fetch(`/api/registry/${block}`);
			return (await resp.json()) as Item;
		});
	} else {
		error(404);
	}

	const blocks = await Promise.all(loadItems);

	return { blocks };
};
