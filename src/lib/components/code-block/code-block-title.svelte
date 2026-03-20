<script lang="ts">
	import { CodeBlockContext } from './code-block.svelte';
	import * as Select from '$lib/components/ui/select/index.js';
	import { getIconForLanguageExtension } from '$lib/utils/icons';
	import CopyCode from '$lib/components/copy-code.svelte';
	import { cn } from '$lib/utils';

	const ctx = CodeBlockContext.get();
	const file = $derived(ctx.files.find((f) => f.target === ctx.activeFile));
	const language = $derived(getLanguageFromTarget(file?.target));
	const Icon = $derived(getIconForLanguageExtension(language));

	function getLanguageFromTarget(target?: string) {
		return target?.split('.').pop() ?? 'svelte';
	}

	function truncateMobileTarget(target: string) {
		const parts = target.split('/');
		if (parts.length <= 3) return target;
		return `${parts[0]}/${parts[1]}/…/${parts.at(-1) ?? ''}`;
	}
</script>

{#if file}
	<!-- svelte-ignore a11y_figcaption_parent -->
	<figcaption
		class={cn(
			'hidden h-12 shrink-0 items-center gap-2 border-b px-4 py-2 text-code-foreground select-none md:flex [&_svg]:size-4',
			ctx.hideFileTree && 'pl-4'
		)}
		data-language={language}
	>
		<Icon class="opacity-70" />
		{file.target}
		<div class="ml-auto flex items-center gap-2">
			{#if ctx.activeFileCodeToCopy}
				<CopyCode text={ctx.activeFileCodeToCopy} class="mr-2" />
			{/if}
		</div>
	</figcaption>

	<div
		class="flex h-12 min-w-0 shrink-0 items-center gap-2 border-b px-2 py-2 text-code-foreground md:hidden [&_svg]:size-4"
	>
		<Select.Root type="single" bind:value={() => ctx.activeFile ?? '', (v) => (ctx.activeFile = v)}>
			<Select.Trigger class="w-fit min-w-64 justify-start [&>svg]:ml-auto">
				<Icon class="ml-0! opacity-70" />
				{truncateMobileTarget(file.target)}
			</Select.Trigger>
			<Select.Content align="start">
				{#each ctx.files as codeFile (codeFile.target)}
					{@const fileExt = getLanguageFromTarget(codeFile.target)}
					{@const FileIcon = getIconForLanguageExtension(fileExt)}
					<Select.Item value={codeFile.target}>
						<FileIcon class="opacity-70" />
						{truncateMobileTarget(codeFile.target)}
					</Select.Item>
				{/each}
			</Select.Content>
		</Select.Root>
		<div class="ml-auto flex items-center gap-2">
			{#if ctx.activeFileCodeToCopy}
				<CopyCode text={ctx.activeFileCodeToCopy} class="mr-0" />
			{/if}
		</div>
	</div>
{/if}
