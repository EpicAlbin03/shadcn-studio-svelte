<script lang="ts">
	import ComponentCodeViewerCodeTitle from './component-code-viewer-code-title.svelte';
	import ComponentCodeViewerFileTree from './component-code-viewer-file-tree.svelte';
	import { ComponentCodeViewerContext } from './component-code-viewer.svelte';

	const ctx = ComponentCodeViewerContext.get();
	const file = $derived(ctx.highlightedFiles?.find((f) => f.target === ctx.activeFile));
	const showTree = $derived(ctx.showTree && ctx.tree && ctx.tree.length > 0);
	let codeContainer = $state<HTMLElement | null>(null);

	function handleKeydown(event: KeyboardEvent) {
		if (!codeContainer) return;
		if (event.key === 'a' && (event.metaKey || event.ctrlKey)) {
			event.preventDefault();
			const range = document.createRange();
			range.selectNodeContents(codeContainer);

			const selection = window.getSelection();
			if (!selection) return;
			selection.removeAllRanges();
			selection.addRange(range);
		}
	}
</script>

<svelte:document onkeydown={handleKeydown} />

{#if file}
	<div
		class="flex h-(--height) overflow-hidden rounded-lg border bg-code text-code-foreground group-data-[view=preview]/block-view-wrapper:hidden"
	>
		{#if showTree}
			<div class="hidden w-72 md:block">
				<ComponentCodeViewerFileTree />
			</div>
		{/if}
		<figure
			data-rehype-pretty-code-figure
			class="mt-0 flex min-w-0 flex-1 flex-col rounded-xl border-none"
			class:rounded-l-none={showTree}
		>
			<ComponentCodeViewerCodeTitle />
			<div
				bind:this={codeContainer}
				class="no-scrollbar overflow-y-auto"
				{@attach (node) => {
					if (file.highlightedContent) {
						ctx.activeFileCodeToCopy = file.content ?? node.innerText;
					}
				}}
			>
				{#if file.highlightedContent}
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html file.highlightedContent}
				{:else if file.content}
					<pre class="m-0 p-4 text-sm" style="background-color: transparent;"><code
							>{file.content}</code
						></pre>
				{/if}
			</div>
		</figure>
	</div>
{/if}
