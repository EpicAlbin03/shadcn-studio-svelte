import { error } from '@sveltejs/kit';
import { blocks } from '$lib/registry/blocks';
import { blocks as blockIds } from '../../../../__registry__/blocks.js';
import type { EntryGenerator } from './$types.js';
import type { Component } from 'svelte';
import type { PageLoadEvent } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => blockIds.map((view) => ({ view }));

export async function load({ params }: PageLoadEvent) {
	const blockComponent = await import(`../../../../lib/registry/blocks/${params.view}/+page.svelte`) as { default: Component } | undefined;
	if (!blockComponent) error(404, 'Block not found');

	const blockData = blocks.find((block) => block.id === params.view)
	if (!blockData) error(404, 'Block data not found');

	return { blockComponent: blockComponent.default, blockData };
}
