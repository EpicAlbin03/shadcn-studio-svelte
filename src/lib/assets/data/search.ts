import { File, Circle } from '@lucide/svelte';
import { categories } from '$lib/config/components.svelte';
import { registryCategories } from '$lib/registry/registry-categories';

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
			},
			{
				icon: File,
				name: 'Blocks',
				href: '/blocks'
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
			...categories.map((category) => ({
				icon: Circle,
				name: category.name,
				href: `/docs/components/${category.slug}`
			}))
		]
	},
	{
		title: 'Block Categories',
		data: [
			...registryCategories.map((category) => ({
				icon: Circle,
				name: category.name,
				href: `/blocks/${category.slug}`
			}))
		]
	},
	{
		title: 'Blocks',
		data: [
			...registryCategories.flatMap((category) =>
				category.blocks.map((block) => ({
					icon: Circle,
					name: block,
					href: `/blocks/${category.slug}`
				}))
			)
		]
	}
];
