import { categories, getCategory, type ComponentCategory } from '$lib/config/components.svelte';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';
import { getComponentsByNames } from '$lib/utils/components';
import type { ComponentProps } from '$lib/types/components';
import { loadHighlightedCodeBlocks } from '$lib/server/registry/highlighted-code-blocks';

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
		throw error(404, 'Category not found');
	}

	const components = getComponentsByNames(category.components.map((item) => item.name));
	const highlightedCodeBlocks = await loadHighlightedCodeBlocks(components.map((comp) => comp.name));
	const codeBlocksMap = new Map(highlightedCodeBlocks.map((codeBlock) => [codeBlock.name, codeBlock]));

	// Prepare components data for the client component.
	const componentsData: (ComponentProps | null)[] = components.map((comp) => {
		const codeBlock = codeBlocksMap.get(comp.name);

		if (!codeBlock?.files) {
			return null;
		}

		return {
			...comp,
			...codeBlock
		};
	});

	const validComponentsData = componentsData.filter((item) => item !== null) as ComponentProps[];

	return {
		validComponentsData,
		category: category as ComponentCategory,
		components,
		codeBlocksMap
	};
};
