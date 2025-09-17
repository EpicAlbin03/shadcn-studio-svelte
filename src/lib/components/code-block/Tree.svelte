<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar';
	import * as Collapsible from '$lib/components/ui/collapsible';
	import type { FileTree } from '$lib/types/components';
	import { FileIcon, FolderIcon, FolderOpenIcon } from '@lucide/svelte';
	import Self from './Tree.svelte';

	type Props = {
		treeItem: FileTree;
		index: number;
		activeFileName: string | null;
	};

	let { treeItem, index, activeFileName = $bindable() }: Props = $props();
</script>

{#if !treeItem.children}
	<Sidebar.MenuItem>
		<Sidebar.MenuButton
			isActive={treeItem.path === activeFileName}
			onclick={() => {
				if (treeItem.path) {
					activeFileName = treeItem.path;
				}
			}}
			class="gap-1.5 rounded-none pl-(--index) whitespace-nowrap hover:bg-muted-foreground/15 focus:bg-muted-foreground/15 focus-visible:bg-muted-foreground/15 focus-visible:ring-0 active:bg-muted-foreground/15 data-[active=true]:bg-muted-foreground/15"
			data-index={index}
			style="--index: {1 + (index - 1) * 1.375}rem"
		>
			<FileIcon class="size-4" />
			{treeItem.name}
		</Sidebar.MenuButton>
	</Sidebar.MenuItem>
{:else}
	<Sidebar.MenuItem>
		<Collapsible.Root class="group/collapsible" open>
			<Collapsible.Trigger>
				{#snippet child({ props })}
					<Sidebar.MenuButton
						{...props}
						class="gap-1.5 rounded-none pl-(--index) whitespace-nowrap hover:bg-muted-foreground/15 focus:bg-muted-foreground/15 focus-visible:bg-muted-foreground/15 focus-visible:ring-0 active:bg-muted-foreground/15 data-[active=true]:bg-muted-foreground/15"
						style="--index: {1 + (index - 1) * 1.375}rem"
					>
						<FolderIcon class="[[data-state=open]>&]:hidden" />
						<FolderOpenIcon class="[[data-state=closed]>&]:hidden" />
						{treeItem.name}
					</Sidebar.MenuButton>
				{/snippet}
			</Collapsible.Trigger>
			<Collapsible.Content>
				<Sidebar.MenuSub class="m-0 w-full translate-x-0 border-none p-0">
					{#each treeItem.children as treeSubItem}
						<Self treeItem={treeSubItem} index={index + 1} bind:activeFileName />
					{/each}
				</Sidebar.MenuSub>
			</Collapsible.Content>
		</Collapsible.Root>
	</Sidebar.MenuItem>
{/if}
