<script lang="ts">
	import Code from '../ui/code/code.svelte';
	import CodeBlockTitle from './code-block-title.svelte';
	import CodeBlockFileTree from './code-block-file-tree.svelte';
	import { CodeBlockContext } from './code-block.svelte';
	import { cn } from '$lib/utils';

	const ctx = CodeBlockContext.get();
	const file = $derived(ctx.files.find((f) => f.target === ctx.activeFile));
	let codeContainer = $state<HTMLElement | null>(null);

	function isVisible(element: HTMLElement) {
		return element.getClientRects().length > 0;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (!codeContainer) return;
		if (!isVisible(codeContainer)) return;
		const target = event.target as HTMLElement | null;
		if (target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA' || target?.isContentEditable)
			return;
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
	<div class="flex h-(--height) overflow-hidden rounded-lg border bg-code text-code-foreground">
		{#if !ctx.hideFileTree}
			<div class="hidden w-72 md:block">
				<CodeBlockFileTree />
			</div>
		{/if}
		<figure
			data-rehype-pretty-code-figure
			class={cn(
				'mt-0 flex min-w-0 flex-1 flex-col rounded-xl border-none',
				ctx.hideFileTree && 'pl-4'
			)}
			class:rounded-l-none={!ctx.hideFileTree}
		>
			<CodeBlockTitle />
			<Code
				bind:ref={codeContainer}
				{@attach (node) => {
					if (file.highlightedContent) {
						ctx.activeFileCodeToCopy = file.content ?? node.innerText;
					}
				}}
				code={file.highlightedContent ?? file.content}
				isHighlighted={!!file.highlightedContent}
				standalone={false}
				copyButton={false}
			/>
		</figure>
	</div>
{/if}
