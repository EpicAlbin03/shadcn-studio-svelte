<script lang="ts">
	import { ChevronRightIcon, FileIcon, FolderIcon, FolderOpenIcon } from '@lucide/svelte';
	import * as Collapsible from '$lib/components/ui/collapsible/index.js';

	type FileTreeItem = {
		name: string;
	} & (
		| {
				type: 'file';
				children?: never;
		  }
		| {
				type: 'folder';
				children: FileTreeItem[];
		  }
	);

	const fileTree: FileTreeItem[] = [
		{
			name: 'components',
			type: 'folder',
			children: [
				{
					name: 'ui',
					type: 'folder',
					children: [
						{ name: 'button.tsx', type: 'file' },
						{ name: 'input.tsx', type: 'file' },
						{ name: 'sidebar.tsx', type: 'file' }
					]
				},
				{ name: 'app-sidebar.tsx', type: 'file' }
			]
		},
		{
			name: 'hooks',
			type: 'folder',
			children: [{ name: 'use-mobile.ts', type: 'file' }]
		},
		{
			name: 'lib',
			type: 'folder',
			children: [{ name: 'utils.ts', type: 'file' }]
		},
		{
			name: 'components.json',
			type: 'file'
		}
	];
</script>

<div class="flex w-full max-w-48 flex-col gap-2">
	{#each fileTree as item (item.name)}
		{@render FileTree(0, item)}
	{/each}
</div>

{#snippet FileTree(level: number, item: FileTreeItem)}
	{#if item.type === 'file'}
		<div
			class="flex items-center gap-2 rounded-md p-1 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
			style="padding-left: {level === 0 ? 1.75 : 3.25}rem"
		>
			<FileIcon class="size-4 shrink-0" />
			<span class="text-sm text-muted-foreground">{item.name}</span>
		</div>
	{:else}
		<Collapsible.Root
			class="flex flex-col gap-1.5"
			style="padding-left: {level === 0 ? 0 : 1.5}rem"
		>
			<Collapsible.Trigger
				class="flex items-center gap-2 rounded-md p-1 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
			>
				<ChevronRightIcon
					class="size-4 shrink-0 transition-transform [[data-state='open']>&]:rotate-90"
				/>
				<FolderIcon class="size-4 shrink-0 [[data-state=open]>&]:hidden" />
				<FolderOpenIcon class="size-4 shrink-0 [[data-state=closed]>&]:hidden" />
				<span class="text-sm">{item.name}</span>
			</Collapsible.Trigger>
			<Collapsible.Content class="flex flex-col gap-1.5">
				{#each item.children as child (child.name)}
					{@render FileTree(level + 1, child)}
				{/each}
			</Collapsible.Content>
		</Collapsible.Root>
	{/if}
{/snippet}
