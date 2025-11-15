import type { EntryGenerator, PageLoad } from './$types.js';
import { registryCategories } from '$lib/registry/registry-categories';
import type { Component } from 'svelte';
import { error } from '@sveltejs/kit';
import type { HighlightedBlock } from '../../../../api/block/[block]/+server.js';

export const prerender = true;

export const entries: EntryGenerator = () =>
	registryCategories.filter((c) => !c.hidden).map(({ slug }) => ({ category: slug }));

type Item = HighlightedBlock & {
	component?: Promise<Component>;
};

export const load: PageLoad = async ({ params, data, fetch }) => {
	const category = params.category;

	let loadItems;

	if (category === 'marketing') {
		loadItems = data.marketings.map(async (block) => {
			const resp = await fetch(`/api/block/${block}`);
			return (await resp.json()) as Item;
		});
	} else if (category === 'dashboard') {
		loadItems = data.dashboards.map(async (block) => {
			const resp = await fetch(`/api/block/${block}`);
			return (await resp.json()) as Item;
		});
	} else if (category === 'ecommerce') {
		loadItems = data.ecommerces.map(async (block) => {
			const resp = await fetch(`/api/block/${block}`);
			return (await resp.json()) as Item;
		});
	} else if (category === 'datatable') {
		loadItems = data.datatables.map(async (block) => {
			const resp = await fetch(`/api/block/${block}`);
			return (await resp.json()) as Item;
		});
	} else if (category === 'bento') {
		loadItems = data.bentos.map(async (block) => {
			const resp = await fetch(`/api/block/${block}`);
			return (await resp.json()) as Item;
		});
	} else {
		error(404);
	}

	const blocks = await Promise.all(loadItems);

	return { blocks };
};
