import * as sitemap from 'super-sitemap';
import type { RequestHandler } from '@sveltejs/kit';
import { categories } from '$lib/config/components.svelte';
import { PUBLIC_URL } from '$lib/config/site-config';

export const GET: RequestHandler = async () => {
	const categorySlugs = categories
		.filter((category) => !category.isComingSoon)
		.map((category) => category.slug);

	return await sitemap.response({
		origin: PUBLIC_URL,
		paramValues: {
			'/docs/components/[category]': categorySlugs
		},
		additionalPaths: ['/theme-generator', '/components', '/docs/getting-started/introduction']
	});
};
