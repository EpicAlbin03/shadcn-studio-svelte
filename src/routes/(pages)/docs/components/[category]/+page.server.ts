import { categories, getCategory } from '$lib/config/components.svelte';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';
import { getComponentsByNames } from '$lib/utils/components';
import type { ProcessedComponentsData } from '$lib/types/components';
import { getCachedComponentItem } from '$lib/utils/components';
import { getCachedFileTree } from '$lib/utils/components';

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

	// Prepare components data for the client component
	const componentsData: (ProcessedComponentsData | null)[] = await Promise.all(
		components.map(async (comp) => {
			const item = await getCachedComponentItem(comp.name);

			if (!item?.files) {
				return null;
			}

			const tree = await getCachedFileTree(item.files);

			return {
				component: {
					...comp,
					files: item.files
				},
				tree
			};
		})
	);

	const validComponentsData = componentsData.filter(
		(item) => item !== null
	) as ProcessedComponentsData[];

	return {
		validComponentsData,
		category,
		components
	};
};
