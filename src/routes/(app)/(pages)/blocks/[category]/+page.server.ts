import { blockCategories, NEW_BLOCKS } from '$lib/registry/blocks';
import type { EntryGenerator, PageServerLoad } from './$types.js';

export const prerender = true;

export const entries: EntryGenerator = () => {
	const categoryEntries = blockCategories
		.map(({ id }) => ({ category: id }));
	if (NEW_BLOCKS.length > 0) {
		categoryEntries.unshift({ category: 'new' });
	}
	return categoryEntries;
};

export const load: PageServerLoad = async () => {
	const categoryMap = Object.fromEntries(
		blockCategories.map((category) => [category.id, category.blocks])
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
