<script lang="ts" module>
	import type { createFileTreeForRegistryItemFiles } from '$lib/registry/registry-utils.js';
	import { Pane } from 'paneforge';
	import { Context } from 'runed';
	import BlockViewerToolbar from './block-viewer-toolbar.svelte';
	import BlockViewerView from './block-viewer-view.svelte';
	import ComponentCodeViewerCode from '$lib/components/component-code-viewer/component-code-viewer-code.svelte';
	import { ComponentCodeViewerContext } from '$lib/components/component-code-viewer/component-code-viewer.svelte';
	import type { Snippet } from 'svelte';
	import BlockViewerViewMobile from './block-viewer-view-mobile.svelte';
	import type { HighlightedBlock } from '../../../routes/api/block/[block]/+server.js';

	type BlockViewerContextType = {
		item: HighlightedBlock;
		view: 'code' | 'preview';
		activeFile: string | null;
		resizablePaneRef: Pane | null;
		tree: ReturnType<typeof createFileTreeForRegistryItemFiles> | null;
		iframeKey: number;
		iframeHeight: string;
		iframeEl: HTMLIFrameElement | null;
		activeFileCodeToCopy: string;
		highlightedFiles: HighlightedBlock['files'];
		showTree?: boolean;
	};

	export const BlockViewerContext = new Context<BlockViewerContextType>('BlockViewer');
</script>

<script lang="ts">
	let {
		item,
		tree,
		children
	}: Pick<BlockViewerContextType, 'item' | 'tree'> & {
		children?: Snippet;
	} = $props();

	let view = $state<BlockViewerContextType['view']>('preview');

	function getFirstFileTargetInTree(_tree: typeof tree = tree): string | null {
		if (!_tree?.length) return null;

		for (const node of _tree) {
			if (node.path) return node.path;
			if (node.children) {
				const result = getFirstFileTargetInTree(node.children);
				if (result) return result;
			}
		}
		return null;
	}

	let activeFile = $state<BlockViewerContextType['activeFile']>(getFirstFileTargetInTree() ?? null);
	let resizablePaneRef = $state<Pane>(null!);
	let iframeKey = $state<number>(0);
	let activeFileCodeToCopy = $state<string>('');
	let iframeHeight = $state<string>(item.meta?.iframeHeight ?? '930px');
	let iframeEl = $state<HTMLIFrameElement | null>(null);
	const highlightedFiles = $derived(item.files);

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
		get iframeHeight() {
			return iframeHeight;
		},
		set iframeHeight(value) {
			iframeHeight = value;
		},
		get iframeEl() {
			return iframeEl;
		},
		set iframeEl(value) {
			iframeEl = value;
		},
		get view() {
			return view;
		},
		set view(value) {
			view = value;
		},
		get activeFile() {
			return activeFile;
		},
		set activeFile(value) {
			activeFile = value;
		},
		get resizablePaneRef() {
			return resizablePaneRef;
		},
		set resizablePaneRef(value) {
			resizablePaneRef = value;
		},
		get tree() {
			return tree;
		},
		get activeFileCodeToCopy() {
			return activeFileCodeToCopy;
		},
		set activeFileCodeToCopy(value) {
			activeFileCodeToCopy = value;
		},
		get highlightedFiles() {
			return highlightedFiles;
		},
		showTree: true
	});

	// Set up ComponentCodeViewerContext using the same data
	ComponentCodeViewerContext.set({
		get item() {
			return item;
		},
		get activeFile() {
			return activeFile;
		},
		set activeFile(value) {
			activeFile = value;
		},
		get resizablePaneRef() {
			return resizablePaneRef;
		},
		set resizablePaneRef(value) {
			resizablePaneRef = value;
		},
		get tree() {
			return tree;
		},
		get highlightedFiles() {
			return highlightedFiles;
		},
		get activeFileCodeToCopy() {
			return activeFileCodeToCopy;
		},
		set activeFileCodeToCopy(value) {
			activeFileCodeToCopy = value;
		},
		showTree: true
	});
</script>

<div
	id={item.name}
	data-view={view}
	class="group/block-view-wrapper flex min-w-0 scroll-mt-24 flex-col-reverse items-stretch gap-4 overflow-hidden md:flex-col"
	style="--height: {iframeHeight}"
	>
		<BlockViewerToolbar />
		<BlockViewerView />
	<ComponentCodeViewerCode />
	<BlockViewerViewMobile>{@render children?.()}</BlockViewerViewMobile>
</div>
