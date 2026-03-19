<script lang="ts" module>
	import { createFileTreeForRegistryItemFiles, type FileTree } from '$lib/registry/registry-utils';
	import { Context } from 'runed';
	import CodeBlockCode from './code-block-code.svelte';

	export type CodeBlockFile = {
		target: string;
		content: string;
		highlightedContent?: string;
		type?: string;
	};

	export type CodeBlockContextType = {
		activeFile: string | null;
		tree: FileTree[] | null;
		files: CodeBlockFile[];
		activeFileCodeToCopy: string;
		showFileTree: boolean;
	};

	export const CodeBlockContext = new Context<CodeBlockContextType>('CodeBlock');

	export type CodeBlockProps = {
		files: CodeBlockFile[];
		height?: string;
		showFileTree?: boolean;
		class?: string;
	};
</script>

<script lang="ts">
	let { files, height = '600px', showFileTree = true, class: className }: CodeBlockProps = $props();

	const tree = $derived(
		createFileTreeForRegistryItemFiles(
			files.map((f) => ({
				target: f.target,
				type: (f.type ?? 'registry:file') as 'registry:file'
			}))
		)
	);

	function getFirstFileTarget(_tree: FileTree[] | null = tree): string | null {
		if (!_tree?.length) return null;
		for (const node of _tree) {
			if (node.path) return node.path;
			if (node.children) {
				const result = getFirstFileTarget(node.children);
				if (result) return result;
			}
		}
		return null;
	}

	let activeFile = $state<string | null>(getFirstFileTarget() ?? null);
	let activeFileCodeToCopy = $state('');

	CodeBlockContext.set({
		get activeFile() {
			return activeFile;
		},
		set activeFile(value) {
			activeFile = value;
		},
		get tree() {
			return tree;
		},
		get files() {
			return files;
		},
		get activeFileCodeToCopy() {
			return activeFileCodeToCopy;
		},
		set activeFileCodeToCopy(value) {
			activeFileCodeToCopy = value;
		},
		get showFileTree() {
			return showFileTree;
		}
	});
</script>

<div class={className} style="--height: {height};">
	<CodeBlockCode />
</div>
