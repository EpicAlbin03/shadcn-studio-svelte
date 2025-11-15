import * as sitemap from 'super-sitemap';
import type { RequestHandler } from '@sveltejs/kit';
import { categories } from '$lib/config/components.svelte';
import { PUBLIC_URL } from '$lib/config/site-config';
import { registryCategories } from '$lib/registry/registry-categories';

export const GET: RequestHandler = async () => {
	const categorySlugs = categories
		.filter((category) => !category.isComingSoon)
		.map((category) => category.slug);

	const blockSlugs = registryCategories.filter((block) => !block.hidden).map((block) => block.slug);

	return await sitemap.response({
		origin: PUBLIC_URL,
		paramValues: {
			'/docs/components/[category]': categorySlugs,
			'/blocks/[category]': blockSlugs
		},
		additionalPaths: [
			'/theme-generator',
			'/components',
			'/blocks',
			'/docs/getting-started/introduction',
			'/docs/getting-started/how-to-use-shadcn-cli'
		],
		excludeRoutePatterns: ['/view/*', '/theme-generator/examples/*']
	});
};
