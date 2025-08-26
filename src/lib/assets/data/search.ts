import { File, Circle } from '@lucide/svelte';
import { categories } from '$lib/config/components.svelte';

type SearchData = {
	title: string;
	data: {
		icon: LucideIcon;
		name: string;
		href: string;
		shortcut?: string;
	}[];
};

export const searchData: SearchData[] = [
	{
		title: 'Links',
		data: [
			{
				icon: File,
				name: 'Theme Generator',
				href: '/theme-generator'
			},
			{
				icon: File,
				name: 'Docs',
				href: '/docs'
			},
			{
				icon: File,
				name: 'Components',
				href: '/components'
			}
		]
	},
	{
		title: 'Getting Started',
		data: [
			{
				icon: Circle,
				name: 'Introduction',
				href: '/docs/getting-started/introduction'
			}
		]
	},
	{
		title: 'Components',
		data: [
			...categories
				.filter((category) => !category.isComingSoon)
				.map((category) => ({
					icon: Circle,
					name: category.name,
					href: `/docs/components/${category.slug}`
				}))
		]
	}
];
