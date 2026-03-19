<script lang="ts">
	import type { PageData } from './$types.js';
	import BlockViewer from '$lib/components/block-viewer/block-viewer.svelte';
	import BlockPreview from '$lib/components/block-preview.svelte';

	let { data }: { data: PageData } = $props();
</script>

<div class="flex flex-col gap-12 md:gap-24">
	{#each data.blocks as block (block.name)}
		<BlockViewer item={block}>
			<BlockPreview
				name={block.name}
				hideCode
				class="my-0 **:[.preview]:h-auto **:[.preview]:p-4 **:[.preview>.p-6]:p-0"
			/>
		</BlockViewer>
	{/each}
</div>
