import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types.js';
import { BLOCKS_QUERY_DELIMITER } from '$lib/utils/blocks';
import {
	loadHighlightedCodeBlock,
	loadHighlightedCodeBlocks
} from '$lib/server/registry/highlighted-code-blocks.js';

function normalizeItemNames(itemNames: string[]): string[] {
	return Array.from(
		new Set(
			itemNames
				.map((name) => {
					const trimmed = name.trim();
					try {
						return decodeURIComponent(trimmed);
					} catch {
						return trimmed;
					}
				})
				.filter((name) => name.length > 0)
		)
	);
}

function parseItemParam(itemParam?: string): string[] | null {
	if (!itemParam) return null;

	if (itemParam.includes(BLOCKS_QUERY_DELIMITER)) {
		return itemParam.split(BLOCKS_QUERY_DELIMITER);
	}

	if (itemParam.includes(',')) {
		return itemParam.split(',');
	}

	return null;
}

export const GET: RequestHandler = async ({ params }) => {
	const itemParam = params.item;
	if (!itemParam) {
		return json({ message: 'Missing registry item parameter.' }, { status: 400 });
	}

	const parsedItemNames = parseItemParam(itemParam);
	if (parsedItemNames) {
		const itemNames = normalizeItemNames(parsedItemNames);
		const validItems = await loadHighlightedCodeBlocks(itemNames);
		return json(validItems);
	}

	// Handle single block
	const item = await loadHighlightedCodeBlock(itemParam);
	return json(item);
};

export const prerender = true;
