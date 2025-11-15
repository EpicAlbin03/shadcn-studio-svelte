<script lang="ts">
	import { ComponentCodeViewerContext } from './component-code-viewer.svelte';
	import * as Select from '$lib/components/ui/select/index.js';
	import { getIconForLanguageExtension } from '../icons/icons.js';
	import CopyButton from '../CopyButton.svelte';
	import { cn } from '$lib/utils';

	const ctx = ComponentCodeViewerContext.get();
	const file = $derived(ctx.highlightedFiles?.find((f) => f.target === ctx.activeFile));
	const language = $derived(file?.target?.split('.').pop() ?? 'svelte');
	const isCSS = $derived(language === 'css');
	const Icon = $derived(getIconForLanguageExtension(language));
</script>

{#if file}
	<!-- svelte-ignore a11y_figcaption_parent -->
	<figcaption
		class={cn(
			'hidden h-12 shrink-0 items-center gap-2 border-b px-4 py-2 text-code-foreground select-none md:flex [&_svg]:size-4 [&_svg]:text-code-foreground',
			isCSS && 'pl-8'
		)}
		data-language={language}
	>
		<Icon class="opacity-70" />
		{file.target}
		<div class="ml-auto flex items-center gap-2">
			{#if ctx.activeFileCodeToCopy}
				<CopyButton text={ctx.activeFileCodeToCopy} class="mr-2" />
			{/if}
		</div>
	</figcaption>

	<div
		class="flex h-12 shrink-0 items-center gap-2 border-b px-2 py-2 text-code-foreground md:hidden [&_svg]:size-4 [&_svg]:text-code-foreground"
	>
		<Select.Root type="single" bind:value={() => ctx.activeFile ?? '', (v) => (ctx.activeFile = v)}>
			<Select.Trigger class="w-64 justify-start [&>svg]:ml-auto">
				<Icon class="!ml-0 opacity-70" />
				{file.target}
			</Select.Trigger>
			<Select.Content>
				{#if ctx.tree}
					{@const tree = ctx.tree[0]}
					{#if tree && tree.children}
						{#each tree.children as file (file.name)}
							<Select.Item value={file.path ?? ''}>
								{file.name}
							</Select.Item>
						{/each}
					{/if}
				{/if}
			</Select.Content>
		</Select.Root>
		<div class="ml-auto flex items-center gap-2">
			{#if ctx.activeFileCodeToCopy}
				<CopyButton text={ctx.activeFileCodeToCopy} class="mr-0" />
			{/if}
		</div>
	</div>
{/if}
