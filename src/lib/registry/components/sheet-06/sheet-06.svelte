<script lang="ts">
	import BookTextIcon from '@lucide/svelte/icons/book-text';
	import CalendarDaysIcon from '@lucide/svelte/icons/calendar-days';
	import HeartPlusIcon from '@lucide/svelte/icons/heart-plus';
	import HomeIcon from '@lucide/svelte/icons/home';
	import LayoutPanelTopIcon from '@lucide/svelte/icons/layout-panel-top';
	import LogInIcon from '@lucide/svelte/icons/log-in';
	import LogOutIcon from '@lucide/svelte/icons/log-out';
	import MailIcon from '@lucide/svelte/icons/mail';
	import MessageSquareTextIcon from '@lucide/svelte/icons/message-square-text';
	import PanelTopIcon from '@lucide/svelte/icons/panel-top';
	import ShoppingCartIcon from '@lucide/svelte/icons/shopping-cart';
	import { Button } from '$lib/components/ui/button';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import type { NavigationItem } from './NavigationMenu.svelte';
	import NavigationMenu from './NavigationMenu.svelte';

	const navigationMenu: NavigationItem[] = [
		{
			name: 'Dashboard',
			icon: HomeIcon,
			type: 'page'
		},
		{
			name: 'Layouts',
			icon: LayoutPanelTopIcon,
			type: 'category',
			children: [
				{
					name: 'Content Navbar',
					icon: LayoutPanelTopIcon,
					type: 'page'
				},
				{
					name: 'Horizontal',
					icon: LayoutPanelTopIcon,
					type: 'page'
				},
				{
					name: 'Without Menu',
					icon: LayoutPanelTopIcon,
					type: 'page'
				}
			]
		},
		{
			name: 'Front Pages',
			icon: PanelTopIcon,
			type: 'category',
			children: [
				{
					name: 'Landing Page',
					icon: PanelTopIcon,
					type: 'page'
				},
				{
					name: 'Pricing Page',
					icon: PanelTopIcon,
					type: 'page'
				},
				{
					name: 'Checkout Page',
					icon: PanelTopIcon,
					type: 'page'
				}
			]
		},
		{
			name: 'Chat',
			icon: MessageSquareTextIcon,
			type: 'page'
		},
		{
			name: 'Email',
			icon: MailIcon,
			type: 'page'
		},
		{
			name: 'Calendar',
			icon: CalendarDaysIcon,
			type: 'page'
		},
		{
			name: 'Ecommerce',
			icon: ShoppingCartIcon,
			type: 'category',
			children: [
				{
					name: 'Products',
					icon: ShoppingCartIcon,
					type: 'page'
				},
				{
					name: 'Categories',
					icon: ShoppingCartIcon,
					type: 'page'
				},
				{
					name: 'Shopping & Delivery',
					icon: ShoppingCartIcon,
					type: 'page'
				},
				{
					name: 'Location',
					icon: ShoppingCartIcon,
					type: 'page'
				}
			]
		},
		{
			name: 'Sign In',
			icon: LogInIcon,
			type: 'page'
		},
		{
			name: 'Sign Out',
			icon: LogOutIcon,
			type: 'page'
		},
		{
			name: 'Support',
			icon: HeartPlusIcon,
			type: 'page'
		},
		{
			name: 'Documentation',
			icon: BookTextIcon,
			type: 'page'
		}
	];
</script>

<Sheet.Root>
	<Sheet.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Navigation Menu</Button>
		{/snippet}
	</Sheet.Trigger>
	<Sheet.Content side="left" class="w-75">
		<Sheet.Header>
			<Sheet.Title>Menu</Sheet.Title>
		</Sheet.Header>
		<div class="flex flex-col gap-2.5 p-4 pt-0">
			{#each navigationMenu as item (item.name)}
				<NavigationMenu {item} level={0} />
			{/each}
		</div>
	</Sheet.Content>
</Sheet.Root>
