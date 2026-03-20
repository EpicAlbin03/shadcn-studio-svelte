import { error } from '@sveltejs/kit';
import type { Component } from 'svelte';
import { blockMeta } from '$lib/registry/registry-block-meta';
import { blocks } from '../../../../__registry__/blocks.js';
import type { EntryGenerator } from './$types.js';

export const prerender = true;

export const entries: EntryGenerator = () => blocks.map((view) => ({ view }));

export async function load({ params }) {
	let comp: { default: Component } | undefined;

	if (params.view.startsWith('demo-') || params.view.startsWith('calendar-')) {
		comp = await import(`../../../../lib/registry/blocks/${params.view}.svelte`);
	} else {
		comp = await import(`../../../../lib/registry/blocks/${params.view}/+page.svelte`);
	}

	if (!comp) error(404, 'Block not found');

	const meta = blockMeta[params.view as keyof typeof blockMeta];

	return { component: comp.default, meta: { ...meta, name: params.view } };
}
