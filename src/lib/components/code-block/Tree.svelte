<script lang="ts">
	import { SidebarMenuButton, SidebarMenuItem, SidebarMenuSub } from '$lib/components/ui/sidebar';
	import {
		Collapsible,
		CollapsibleContent,
		CollapsibleTrigger
	} from '$lib/components/ui/collapsible';
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
	<SidebarMenuItem>
		<SidebarMenuButton
			isActive={treeItem.path === activeFileName}
			onclick={() => {
				if (treeItem.path) {
					activeFileName = treeItem.path;
				}
			}}
			class="gap-1.5 rounded-none pl-(--index) whitespace-nowrap hover:bg-muted-foreground/15 focus:bg-muted-foreground/15 focus-visible:bg-muted-foreground/15 focus-visible:ring-0 active:bg-muted-foreground/15 data-[active=true]:bg-muted-foreground/15"
			data-index={index}
			style={`--index: ${1 + (index - 1) * 1.375}rem`}
		>
			<FileIcon class="size-4" />
			{treeItem.name}
		</SidebarMenuButton>
	</SidebarMenuItem>
{:else}
	<SidebarMenuItem>
		<Collapsible class="group/collapsible" open>
			<CollapsibleTrigger>
				{#snippet child({ props })}
					<SidebarMenuButton
						{...props}
						class="gap-1.5 rounded-none pl-(--index) whitespace-nowrap hover:bg-muted-foreground/15 focus:bg-muted-foreground/15 focus-visible:bg-muted-foreground/15 focus-visible:ring-0 active:bg-muted-foreground/15 data-[active=true]:bg-muted-foreground/15"
						style={`--index: ${1 + (index - 1) * 1.375}rem`}
					>
						<FolderIcon class="[[data-state=open]>&]:hidden" />
						<FolderOpenIcon class="[[data-state=closed]>&]:hidden" />
						{treeItem.name}
					</SidebarMenuButton>
				{/snippet}
			</CollapsibleTrigger>
			<CollapsibleContent>
				<SidebarMenuSub class="m-0 w-full translate-x-0 border-none p-0">
					{#each treeItem.children as treeSubItem}
						<Self treeItem={treeSubItem} index={index + 1} {activeFileName} />
					{/each}
				</SidebarMenuSub>
			</CollapsibleContent>
		</Collapsible>
	</SidebarMenuItem>
{/if}
