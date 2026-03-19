<script lang="ts" module>
	import { Pane } from 'paneforge';
	import { Context } from 'runed';
	import BlockViewerToolbar from './block-viewer-toolbar.svelte';
	import BlockViewerView from './block-viewer-view.svelte';
	import { CodeBlock } from '$lib/components/code-block/index.js';
	import type { Snippet } from 'svelte';
	import BlockViewerViewMobile from './block-viewer-view-mobile.svelte';
	import type { HighlightedCodeBlock } from '$lib/server/registry/highlighted-code-blocks';

	type BlockViewerContextType = {
		item: HighlightedCodeBlock;
		view: 'code' | 'preview';
		resizablePaneRef: Pane | null;
		iframeKey: number;
	};

	export type BlockViewerProps = {
		item: HighlightedCodeBlock;
		children?: Snippet;
	};

	export const BlockViewerContext = new Context<BlockViewerContextType>('BlockViewer');
</script>

<script lang="ts">
	let { item, children }: BlockViewerProps = $props();

	let view = $state<BlockViewerContextType['view']>('preview');
	let resizablePaneRef = $state<Pane>(null!);
	let iframeKey = $state<number>(0);
	const codeBlockFiles = $derived(
		item.files.map((file) => ({
			target: file.target,
			content: file.content,
			highlightedContent: file.highlightedContent,
			type: file.type
		}))
	);

	BlockViewerContext.set({
		get item() {
			return item;
		},
		get iframeKey() {
			return iframeKey;
		},
		set iframeKey(value) {
			iframeKey = value;
		},
		get view() {
			return view;
		},
		set view(value) {
			view = value;
		},
		get resizablePaneRef() {
			return resizablePaneRef;
		},
		set resizablePaneRef(value) {
			resizablePaneRef = value;
		}
	});
</script>

<div
	id={item.name}
	data-view={view}
	class="group/block-view-wrapper flex min-w-0 scroll-mt-24 flex-col-reverse items-stretch gap-4 overflow-hidden md:flex-col"
	style="--height: {item.meta?.iframeHeight ?? '930px'}"
>
	<BlockViewerToolbar />
	<BlockViewerView />
	<div class="group-data-[view=preview]/block-view-wrapper:hidden">
		<CodeBlock files={codeBlockFiles} height={item.meta?.iframeHeight ?? '930px'} />
	</div>
	<BlockViewerViewMobile>{@render children?.()}</BlockViewerViewMobile>
</div>
