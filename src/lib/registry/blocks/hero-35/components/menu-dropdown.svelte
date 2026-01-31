<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Icon as IconType } from '@lucide/svelte';
	import { ChevronRightIcon, CircleSmallIcon } from '@lucide/svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import * as Collapsible from '$lib/components/ui/collapsible/index.js';

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
		trigger: Snippet<[Record<string, unknown>]>;
		navigationData: NavigationSection[];
		align?: 'center' | 'end' | 'start';
	};

	let { trigger, navigationData, align = 'start' }: Props = $props();
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			{@render trigger(props)}
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56" {align}>
		{#each navigationData as navItem (navItem.title)}
			{#if navItem.href}
				<DropdownMenu.Item>
					{#snippet child({ props })}
						<a href={navItem.href} {...props}>
							{#if navItem.icon}
								<navItem.icon />
							{/if}
							{navItem.title}
						</a>
					{/snippet}
				</DropdownMenu.Item>
			{:else}
				<Collapsible.Root>
					<DropdownMenu.Group>
						<Collapsible.Trigger>
							{#snippet child({ props })}
								<DropdownMenu.Item
									{...props}
									onSelect={(event) => event.preventDefault()}
									class="justify-between"
								>
									{#if navItem.icon}
										<navItem.icon />
									{/if}
									<span class="flex-1">{navItem.title}</span>
									<ChevronRightIcon
										class="shrink-0 transition-transform [[data-state='open']>&]:rotate-90"
									/>
								</DropdownMenu.Item>
							{/snippet}
						</Collapsible.Trigger>
						<Collapsible.Content class="pl-2">
							{#each navItem.items ?? [] as item (item.title)}
								<DropdownMenu.Item>
									{#snippet child({ props })}
										<a href={item.href} {...props}>
											<CircleSmallIcon />
											<span>{item.title}</span>
										</a>
									{/snippet}
								</DropdownMenu.Item>
							{/each}
						</Collapsible.Content>
					</DropdownMenu.Group>
				</Collapsible.Root>
			{/if}
		{/each}
	</DropdownMenu.Content>
</DropdownMenu.Root>
