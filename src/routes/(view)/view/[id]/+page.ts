import { error } from '@sveltejs/kit';
import { blocks } from '$lib/registry/blocks';
import { blocks as blockIds } from '../../../../__registry__/blocks.js';
import type { EntryGenerator } from './$types.js';
import type { Component } from 'svelte';
import type { PageLoad } from './$types.js';

export const prerender = true;

export const entries: EntryGenerator = () => blockIds.map((id) => ({ id }));

export const load: PageLoad = async ({ params }) => {
	const blockComponent = await import(`../../../../lib/registry/blocks/${params.id}/+page.svelte`) as { default: Component } | undefined;
	if (!blockComponent) error(404, 'Block not found');

	const blockData = blocks.find((block) => block.id === params.id)
	if (!blockData) error(404, 'Block data not found');

	return { blockComponent: blockComponent.default, blockData };
}
