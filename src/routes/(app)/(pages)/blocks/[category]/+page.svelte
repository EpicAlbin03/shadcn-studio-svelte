<script lang="ts">
	import BlockPreview from '$lib/components/block-preview.svelte';
	import BlockViewer from '$lib/components/block-viewer/block-viewer.svelte';
	import { Skeleton } from '$lib/components/ui/skeleton/index.js';
	import type { PageData } from './$types.js';

	let { data }: { data: PageData } = $props();
</script>

{#snippet Placeholder()}
	<div class="mt-2 flex min-h-82.75 w-full items-center justify-center rounded-md border p-4">
		<Skeleton class="h-74.25 w-62.5" />
	</div>
{/snippet}

<div class="flex flex-col gap-12 md:gap-24">
	{#each data.blocks as block (block.name)}
		<BlockViewer item={block}>
			{#await block.component}
				{@render Placeholder()}
			{:then component}
				<BlockPreview
					name={block.name}
					{component}
					hideCode
					class="my-0 **:[.preview]:h-auto **:[.preview]:p-4 **:[.preview>.p-6]:p-0"
				/>
			{/await}
		</BlockViewer>
	{/each}
</div>
