<script lang="ts">
	import { cn } from '$lib/utils';
	import { BlockViewerContext } from './block-viewer.svelte';

	let { class: className }: { class?: string } = $props();
	const ctx = BlockViewerContext.get();
</script>

{#key ctx.iframeKey}
	<iframe
		title={ctx.item.name}
		src="/view/{ctx.item.name}"
		height={ctx.item.meta?.iframeHeight ?? 930}
		class={cn('relative z-20 no-scrollbar w-full bg-background', className)}
		loading="lazy"
	></iframe>
{/key}
