<script lang="ts">
	import type { ComponentProps } from '$lib/types/components';
	import ComponentCodeViewer from '$lib/components/component-code-viewer/component-code-viewer.svelte';
	import { page } from '$app/state';
	import type { HighlightedBlock } from '../../../routes/api/block/[block]/+server';

	type Props = { componentsData: ComponentProps };

	let { componentsData }: Props = $props();

	const source = $derived(componentsData as HighlightedBlock);
</script>

<div class="absolute end-2 top-2 flex items-center gap-2">
	{#if source}
		{#key page.url.pathname}
			<ComponentCodeViewer item={source} />
		{/key}
	{/if}
</div>
