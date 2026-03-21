import { error } from '@sveltejs/kit';
import { categories, getCategory, type ComponentCategory } from '$lib/config/components.svelte';
import { loadHighlightedCodeBlocks } from '$lib/server/registry/highlighted-code-blocks';
import type { ComponentProps } from '$lib/types/components';
import type { EntryGenerator, PageServerLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () =>
	categories
		.filter((category) => !category.isComingSoon)
		.map((category) => ({
			category: category.slug
		}));

export const load: PageServerLoad = async ({ params }) => {
	const category = getCategory(params.category);

	if (!category || category.isComingSoon) {
		throw error(404, 'Component category not found');
	}

	const components = category.components.filter((comp) => comp !== undefined);
	const highlightedCodeBlocks = await loadHighlightedCodeBlocks(
		components.map((comp) => comp.name)
	);
	const highlightedCodeBlockByName = new Map(
		highlightedCodeBlocks.map((block) => [block.name, block] as const)
	);

	const componentsData: ComponentProps[] = components.flatMap((comp) => {
		const codeBlock = highlightedCodeBlockByName.get(comp.name);

		if (!codeBlock?.files) {
			return [];
		}

		return [
			{
				...comp,
				...codeBlock
			}
		];
	});

	return {
		components: componentsData,
		category: category as ComponentCategory
	};
};
