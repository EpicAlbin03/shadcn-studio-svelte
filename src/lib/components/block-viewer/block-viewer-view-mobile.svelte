<script lang="ts">
	import type { Snippet } from 'svelte';
	import { BlockViewerContext } from './block-viewer.svelte';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';

	const ctx = BlockViewerContext.get();
	let { children }: { children?: Snippet } = $props();
</script>

<div class="flex flex-col gap-2 lg:hidden">
	<div class="flex items-center gap-2 px-2">
		<Tabs.Root bind:value={ctx.view} class="shrink-0">
			<Tabs.List
				class="inline-grid h-8 grid-cols-2 items-center rounded-md p-1 *:data-[slot=tabs-trigger]:h-6 *:data-[slot=tabs-trigger]:rounded-sm *:data-[slot=tabs-trigger]:px-2 *:data-[slot=tabs-trigger]:text-xs"
			>
				<Tabs.Trigger value="preview">Preview</Tabs.Trigger>
				<Tabs.Trigger value="code">Code</Tabs.Trigger>
			</Tabs.List>
		</Tabs.Root>
		<Separator orientation="vertical" class="h-4! shrink-0" />
		<div class="line-clamp-1 text-sm font-medium">
			{ctx.item.description?.replace(/\.$/, '')}
		</div>
	</div>
	{#if ctx.view === 'preview'}
		{#if ctx.item.meta?.mobile === 'component'}
			{@render children?.()}
		{:else}
			<div class="overflow-hidden rounded-xl border">
				<img
					src="/img/blocks/registry/{ctx.item.name}.png"
					alt={ctx.item.name}
					data-block={ctx.item.name}
					width={1440}
					height={900}
					class="object-cover dark:hidden"
				/>
				<img
					src="/img/blocks/registry/{ctx.item.name}-dark.png"
					alt={ctx.item.name}
					data-block={ctx.item.name}
					width={1440}
					height={900}
					class="hidden object-cover dark:block"
				/>
			</div>
		{/if}
	{/if}
</div>
