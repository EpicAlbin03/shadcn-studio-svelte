import { registryCategories } from '$lib/registry/registry-categories';
import type { EntryGenerator, PageServerLoad } from './$types.js';

export const prerender = true;

export const entries: EntryGenerator = () =>
	registryCategories.filter((c) => !c.hidden).map(({ slug }) => ({ category: slug }));

export const load: PageServerLoad = async () => {
	const categoryMap = Object.fromEntries(
		registryCategories.map((category) => [category.slug, category.blocks])
	);

	return {
		marketings: categoryMap.marketing || [],
		dashboards: categoryMap.dashboard || [],
		ecommerces: categoryMap.ecommerce || [],
		datatables: categoryMap.datatable || [],
		bentos: categoryMap.bento || []
	};
};
