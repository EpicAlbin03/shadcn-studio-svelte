import { registryCategories } from '$lib/registry/registry-categories';
import { NEW_BLOCKS } from '$lib/utils/blocks';
import type { EntryGenerator, PageServerLoad } from './$types.js';

export const prerender = true;

export const entries: EntryGenerator = () => {
	const categoryEntries = registryCategories.filter((c) => !c.hidden).map(({ slug }) => ({ category: slug }));
	if (NEW_BLOCKS.length > 0) {
		categoryEntries.unshift({ category: 'new' });
	}
	return categoryEntries;
};

export const load: PageServerLoad = async () => {
	const categoryMap = Object.fromEntries(
		registryCategories.map((category) => [category.slug, category.blocks])
	);

	return {
		newBlocks: NEW_BLOCKS,
		marketings: categoryMap.marketing || [],
		dashboards: categoryMap.dashboard || [],
		ecommerces: categoryMap.ecommerce || [],
		datatables: categoryMap.datatable || [],
		bentos: categoryMap.bento || []
	};
};
