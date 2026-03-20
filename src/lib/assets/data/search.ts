import CircleIcon from '@lucide/svelte/icons/circle';
import FileIcon from '@lucide/svelte/icons/file';
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
				icon: FileIcon,
				name: 'Theme Generator',
				href: '/theme-generator'
			},
			{
				icon: FileIcon,
				name: 'Docs',
				href: '/docs'
			},
			{
				icon: FileIcon,
				name: 'Components',
				href: '/components'
			},
			{
				icon: FileIcon,
				name: 'Blocks',
				href: '/blocks'
			}
		]
	},
	{
		title: 'Getting Started',
		data: [
			{
				icon: CircleIcon,
				name: 'Introduction',
				href: '/docs/getting-started/introduction'
			},
			{
				icon: CircleIcon,
				name: 'How to use Shadcn CLI',
				href: '/docs/getting-started/how-to-use-shadcn-cli'
			}
		]
	},
	{
		title: 'Components',
		data: [
			...categories.map((category) => ({
				icon: CircleIcon,
				name: category.name,
				href: `/docs/components/${category.slug}`
			}))
		]
	},
	{
		title: 'Block Categories',
		data: [
			...registryCategories.map((category) => ({
				icon: CircleIcon,
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
					icon: CircleIcon,
					name: block,
					href: `/blocks/${category.slug}#${block}`
				}))
			)
		]
	}
];
