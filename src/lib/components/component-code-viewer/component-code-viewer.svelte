<script lang="ts" module>
	import { createFileTreeForRegistryItemFiles } from '$lib/registry/registry-utils.js';
	import type { Pane } from 'paneforge';
	import { Context } from 'runed';
	import ComponentCodeViewerCode from './component-code-viewer-code.svelte';
	import CodeIcon from '@lucide/svelte/icons/code';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import type { HighlightedBlock } from '../../../routes/api/block/[block]/+server.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { IsMobile } from '$lib/hooks/is-mobile.svelte';
	import PmAddComp from '$lib/components/pm-add-comp.svelte';

	type ComponentCodeViewerContextType = {
		item: HighlightedBlock;
		activeFile: string | null;
		resizablePaneRef: Pane | null;
		tree: ReturnType<typeof createFileTreeForRegistryItemFiles> | null;
		highlightedFiles: HighlightedBlock['files'];
		activeFileCodeToCopy: string;
	};

	export const ComponentCodeViewerContext = new Context<ComponentCodeViewerContextType>(
		'ComponentCodeViewer'
	);
</script>

<script lang="ts">
	let { item }: Pick<ComponentCodeViewerContextType, 'item'> = $props();

	const tree = $derived(createFileTreeForRegistryItemFiles(item.files));
	const highlightedFiles = $derived(item.files);

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

	let activeFile = $state<ComponentCodeViewerContextType['activeFile']>(
		getFirstFileTargetInTree() ?? null
	);
	let resizablePaneRef = $state<Pane>(null!);
	let activeFileCodeToCopy = $state<ComponentCodeViewerContextType['activeFileCodeToCopy']>('');

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
		}
	});

	const isMobile = new IsMobile();
	const height = $derived(isMobile.current ? '75dvh' : 'calc(100svh - (var(--header-height) * 6))');
	let contentRef = $state<HTMLElement | null>(null);

	const hasFiles = $derived(item?.files && item.files.length > 0);
</script>

<Dialog.Root>
	<Tooltip.Root>
		<Tooltip.Trigger>
			{#snippet child({ props })}
				<Dialog.Trigger {...props}>
					{#snippet child({ props })}
						<Button
							{...props}
							variant="ghost"
							size="icon"
							class="cursor-pointer text-muted-foreground opacity-0 transition-none group-focus-within/item:opacity-100 group-hover/item:opacity-100 hover:!bg-transparent hover:text-foreground disabled:opacity-100"
						>
							<CodeIcon />
							<span class="sr-only">View code</span>
						</Button>
					{/snippet}
				</Dialog.Trigger>
			{/snippet}
		</Tooltip.Trigger>
		<Tooltip.Content>View code</Tooltip.Content>
	</Tooltip.Root>
	<Dialog.Content
		bind:ref={contentRef}
		class="flex min-w-0 flex-col gap-6 sm:max-w-[90%]"
		onOpenAutoFocus={(e) => {
			if (!contentRef || !hasFiles) return;
			const activeItem = contentRef.querySelector('button[data-active=true]') as HTMLElement | null;
			if (activeItem) {
				e.preventDefault();
				activeItem.focus();
			}
		}}
	>
		<Dialog.Header>
			<Dialog.Title class="text-left">CLI Command</Dialog.Title>
			<Dialog.Description class="sr-only">
				Use the CLI to add components to your project
			</Dialog.Description>
		</Dialog.Header>

		<PmAddComp name={item.name} />

		<Dialog.Title class="text-left">Manual Code</Dialog.Title>
		<Dialog.Description class="sr-only">
			View the code for the {item.name} component
		</Dialog.Description>
		{#if hasFiles}
			<div
				id={item.name}
				class="group/block-view-wrapper flex w-full min-w-0 flex-col-reverse items-stretch gap-4 overflow-hidden md:flex-col"
				style="--height: {height};"
			>
				<ComponentCodeViewerCode />
			</div>
		{:else}
			<p class="text-sm text-muted-foreground">
				No code available. If you think this is an error, please
				<a
					href="https://github.com/EpicAlbin03/shadcn-studio-svelte/issues"
					target="_blank"
					rel="noopener noreferrer"
					class="font-medium text-foreground underline hover:no-underline"
				>
					open an issue
				</a>
				.
			</p>
		{/if}
		<Dialog.Close class="sr-only">Close</Dialog.Close>
	</Dialog.Content>
</Dialog.Root>
