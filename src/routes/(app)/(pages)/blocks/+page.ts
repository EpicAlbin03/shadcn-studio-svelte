import type { PageLoad } from './$types.js';
import type { HighlightedBlock } from '../../../api/block/[block]/+server.js';
import { FEATURED_BLOCKS } from '$lib/utils/blocks.js';

export const prerender = true;

export const load: PageLoad = async ({ fetch }) => {
	const loadItems = FEATURED_BLOCKS.map(async (block) => {
		const resp = await fetch(`/api/block/${block}`);
		return (await resp.json()) as HighlightedBlock;
	});

	const result = await Promise.all(loadItems);

	return {
		blocks: result.sort((a, b) => FEATURED_BLOCKS.indexOf(a.name) - FEATURED_BLOCKS.indexOf(b.name))
	};
};
