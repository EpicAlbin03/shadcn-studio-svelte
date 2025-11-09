<script lang="ts">
	import { cn } from '$lib/utils';
	import { BlockViewerContext } from './block-viewer.svelte';

	let { class: className }: { class?: string } = $props();
	const ctx = BlockViewerContext.get();
	const iframeHeight = $derived(Number.parseFloat(ctx.iframeHeight) || 930);
	let iframeRef = $state<HTMLIFrameElement | null>(null);

	$effect(() => {
		ctx.iframeEl = iframeRef;
	});
</script>

{#key ctx.iframeKey}
	<iframe
		title={ctx.item.name}
		src="/view/{ctx.item.name}"
		height={iframeHeight}
		style={`height: ${ctx.iframeHeight};`}
		class={cn('relative z-20 no-scrollbar w-full bg-background', className)}
		bind:this={iframeRef}
		loading="lazy"
	></iframe>
{/key}
