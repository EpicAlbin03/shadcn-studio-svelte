<script lang="ts">
	import { BlockViewerContext } from './block-viewer.svelte';
	import * as Resizable from '$lib/components/ui/resizable/index.js';
	import BlockViewerIframe from './block-viewer-iframe.svelte';

	const ctx = BlockViewerContext.get();
	// import { RESIZE_MESSAGE, REQUEST_RESIZE_MESSAGE } from '$lib/utils/blocks';

	// const ctx = BlockViewerContext.get();

	// const postIframeResizeRequest = () => {
	// 	const iframe = ctx.iframeEl;
	// 	if (!iframe?.contentWindow) return;

	// 	iframe.contentWindow.postMessage(
	// 		{
	// 			type: REQUEST_RESIZE_MESSAGE,
	// 			name: ctx.item.name
	// 		},
	// 		window.location.origin
	// 	);
	// };

	// const handleMessage = (event: MessageEvent<{ type: string; name: string; height: number }>) => {
	// 	if (event.origin !== window.location.origin) return;
	// 	if (!event.data || event.data.type !== RESIZE_MESSAGE) return;
	// 	if (event.data.name !== ctx.item.name) return;
	// 	if (typeof event.data.height !== 'number') return;

	// 	const nextHeight = `${Math.ceil(event.data.height)}px`;
	// 	if (ctx.iframeHeight !== nextHeight) {
	// 		ctx.iframeHeight = nextHeight;
	// 	}
	// };

	// $effect(() => {
	// 	const iframe = ctx.iframeEl;
	// 	ctx.iframeKey;
	// 	if (!iframe) return;

	// 	postIframeResizeRequest();

	// 	const handleLoad = () => postIframeResizeRequest();

	// 	let isReady = false;
	// 	try {
	// 		isReady = iframe.contentDocument?.readyState === 'complete';
	// 	} catch {
	// 		// Ignore cross-origin access errors
	// 	}

	// 	if (isReady) postIframeResizeRequest();

	// 	iframe.addEventListener('load', handleLoad);
	// 	return () => iframe.removeEventListener('load', handleLoad);
	// });
</script>

<!-- <svelte:window onmessage={handleMessage} /> -->

<div class="hidden group-data-[view=code]/block-view-wrapper:hidden md:h-(--height) lg:flex">
	<div class="relative grid w-full gap-4">
		<div
			class="absolute inset-0 right-4 [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] [background-size:20px_20px] dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
		></div>
		<Resizable.PaneGroup
			direction="horizontal"
			class="relative z-10 after:absolute after:inset-0 after:right-3 after:z-0 after:rounded-xl after:bg-surface/50"
		>
			<Resizable.Pane
				bind:this={ctx.resizablePaneRef}
				class="relative aspect-[4/2.5] overflow-hidden rounded-lg border bg-background md:aspect-auto md:rounded-xl"
				defaultSize={100}
				minSize={30}
			>
				<BlockViewerIframe />
			</Resizable.Pane>
			<Resizable.Handle
				class="relative z-20 hidden w-3 bg-transparent p-0 after:absolute after:top-1/2 after:right-0 after:h-8 after:w-[6px] after:translate-x-[-1px] after:-translate-y-1/2 after:rounded-full after:bg-border after:transition-all after:hover:h-10 md:block"
			/>
			<Resizable.Pane defaultSize={0} minSize={0} />
		</Resizable.PaneGroup>
	</div>
</div>
