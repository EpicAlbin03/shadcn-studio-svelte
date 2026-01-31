<script lang="ts">
	import * as NavigationMenu from '$lib/components/ui/navigation-menu';
	import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';
	import { cn } from '$lib/utils';
	import { type Icon as IconType } from '@lucide/svelte';

	export type NavigationItem = {
		title: string;
		href: string;
	};

	export type NavigationSection = {
		title: string;
		icon?: typeof IconType;
	} & (
		| {
				items: NavigationItem[];
				href?: never;
		  }
		| {
				items?: never;
				href: string;
		  }
	);

	type Props = {
		navigationData: NavigationSection[];
		className?: string;
	};

	let { navigationData, className }: Props = $props();
</script>

<NavigationMenu.Root viewport={false} class={className}>
	<NavigationMenu.List class="flex-wrap justify-start gap-0">
		{#each navigationData as navItem (navItem.title)}
			{#if navItem.href}
				<NavigationMenu.Item>
					<NavigationMenu.Link
						href={navItem.href}
						class={cn(
							navigationMenuTriggerStyle(),
							'bg-transparent px-3 py-1.5 text-base! text-muted-foreground hover:text-primary dark:hover:bg-accent/50'
						)}
					>
						{navItem.title}
					</NavigationMenu.Link>
				</NavigationMenu.Item>
			{:else}
				<NavigationMenu.Item>
					<NavigationMenu.Trigger
						class="bg-transparent px-3 py-1.5 text-base text-muted-foreground hover:text-primary dark:hover:bg-accent/50 dark:data-[state=open]:hover:bg-accent/50 [&>svg]:size-4"
					>
						{navItem.title}
					</NavigationMenu.Trigger>
					<NavigationMenu.Content
						class="absolute w-auto data-[motion=from-end]:slide-in-from-right-30! data-[motion=from-start]:slide-in-from-left-30! data-[motion=to-end]:slide-out-to-right-30! data-[motion=to-start]:slide-out-to-left-30!"
					>
						<ul class="grid w-38 gap-4">
							<li>
								{#each navItem.items as item (item.title)}
									<NavigationMenu.Link href={item.href}>
										{item.title}
									</NavigationMenu.Link>
								{/each}
							</li>
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>
			{/if}
		{/each}
	</NavigationMenu.List>
</NavigationMenu.Root>
