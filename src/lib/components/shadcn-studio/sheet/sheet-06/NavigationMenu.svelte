<script lang="ts" module>
	export type NavigationItem = {
		name: string;
		icon: LucideIcon;
	} & (
		| {
				type: 'page';
				children?: never;
		  }
		| {
				type: 'category';
				children: NavigationItem[];
		  }
	);
</script>

<script lang="ts">
	import { ChevronRightIcon, CircleSmallIcon } from '@lucide/svelte';
	import * as Collapsible from '$lib/components/ui/collapsible/index.js';
	import NavigationMenu from './NavigationMenu.svelte';

	type Props = { level: number; item: NavigationItem };

	let { item, level }: Props = $props();
</script>

{#if item.type === 'page'}
	<div
		class="flex items-center gap-2 rounded-md p-1 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
		style="padding-left: {level === 0 ? 0 : 1.5}rem"
	>
		{#if level === 0}
			<item.icon class="size-4 shrink-0" />
		{:else}
			<CircleSmallIcon class="size-4 shrink-0" />
		{/if}
		<span class="text-sm">{item.name}</span>
	</div>
{:else}
	<Collapsible.Root class="flex flex-col gap-1.5" style="padding-left: {level === 0 ? 0 : 1.5}rem">
		<Collapsible.Trigger
			class="flex items-center gap-2 rounded-md p-1 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
		>
			{#if level === 0}
				<item.icon class="size-4 shrink-0" />
			{:else}
				<CircleSmallIcon class="size-4 shrink-0" />
			{/if}
			<span class="flex-1 text-start text-sm">{item.name}</span>
			<ChevronRightIcon
				class="size-4 shrink-0 transition-transform [[data-state='open']>&]:rotate-90"
			/>
		</Collapsible.Trigger>
		<Collapsible.Content
			class="flex flex-col gap-1.5 overflow-hidden transition-all duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down"
		>
			{#each item.children as child (child.name)}
				<NavigationMenu item={child} level={level + 1} />
			{/each}
		</Collapsible.Content>
	</Collapsible.Root>
{/if}
