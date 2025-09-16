<script lang="ts">
	import { FileIcon } from '@lucide/svelte';
	import type { BundledLanguage } from 'shiki/bundle/web';
	import type { FileTree, ProcessedComponentsData } from '$lib/types/components';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import CopyButton from '$lib/components/CopyButton.svelte';
	import CodeBlock from './CodeBlock.svelte';
	import Tree from './Tree.svelte';

	type Props = {
		files: ProcessedComponentsData['component']['files'];
		tree: ProcessedComponentsData['tree'];
	};

	let { files, tree }: Props = $props();

	const findFirstPath = (tree: FileTree[]): string | null => {
		if (!tree || tree.length === 0) return null;

		for (const item of tree) {
			// If this item has a path, return it
			if (item.path) return item.path;

			// If this item has children, search in them
			if (item.children && item.children.length > 0) {
				const path = findFirstPath(item.children);

				if (path) return path;
			}
		}

		return null;
	};

	let activeFileName = $state('');
	let language = $state<BundledLanguage>('tsx');
	let code = $state('');

	$effect(() => {
		if (!activeFileName && tree) {
			const firstPath = findFirstPath(tree);

			if (firstPath) {
				activeFileName = firstPath;
				return;
			}
		}

		language = (activeFileName?.split('.').pop() as BundledLanguage) || 'tsx';
		code =
			files.find((file) => {
				return file.target ? file.target === activeFileName : file.path === activeFileName;
			})?.content || '';
	});
</script>

{#if tree}
	<div class="flex bg-sidebar">
		<div class="w-65 border-e">
			<Sidebar.Provider class="flex !min-h-full flex-col">
				<Sidebar.Root collapsible="none" class="w-full flex-1">
					<Sidebar.GroupLabel class="h-12 rounded-none border-b px-4 text-sm"
						>Files</Sidebar.GroupLabel
					>
					<Sidebar.Group class="p-0">
						<Sidebar.GroupContent>
							<Sidebar.Menu class="translate-x-0 gap-1.5 py-2">
								{#each tree as treeItem}
									<Tree {treeItem} index={1} {activeFileName} />
								{/each}
							</Sidebar.Menu>
						</Sidebar.GroupContent>
					</Sidebar.Group>
				</Sidebar.Root>
			</Sidebar.Provider>
		</div>
		<div class="relative flex-1 overflow-auto">
			<div class="flex h-full flex-1 flex-col p-0">
				<div class="flex min-h-12 items-center justify-between border-b px-4 py-2">
					<div class="flex items-center gap-2">
						<FileIcon class="size-4 shrink-0" />
						<span class="text-sm">{activeFileName}</span>
					</div>
					<CopyButton source={code} class="end-1 top-1" toast="Code" />
				</div>
				<CodeBlock {code} lang={language} />
			</div>
		</div>
	</div>
{/if}
