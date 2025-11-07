<script lang="ts">
	import type { ComponentProps } from '$lib/types/components';
	import ComponentCodeViewer from '$lib/components/component-code-viewer/component-code-viewer.svelte';
	import { page } from '$app/state';
	import type { HighlightedBlock } from '../../../routes/api/block/[block]/+server';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Sparkles } from '@lucide/svelte';
	import { UseClipboard } from '$lib/hooks/use-clipboard.svelte';
	import { PUBLIC_URL } from '$lib/config/site-config';

	type Props = { componentsData: ComponentProps };

	let { componentsData }: Props = $props();

	const source = $derived(componentsData as HighlightedBlock);
	const clipboard = new UseClipboard();

	function handleCopyPrompt(e: MouseEvent) {
		clipboard.copy(`I’m looking at this shadcn-studio-svelte documentation: ${PUBLIC_URL}/docs/components/${componentsData.name}.
Help me understand how to use it. Be ready to explain concepts, give examples, or help debug based on it.`);
	}
</script>

<div class="absolute end-2 top-2 flex items-center gap-2">
	<Tooltip.Root disableCloseOnTriggerClick>
		<Tooltip.Trigger onclick={handleCopyPrompt}>
			{#snippet child({ props })}
				<Button
					{...props}
					variant="ghost"
					size="icon"
					class="cursor-pointer text-muted-foreground opacity-0 transition-none group-focus-within/item:opacity-100 group-hover/item:opacity-100 hover:!bg-transparent hover:text-foreground disabled:opacity-100"
				>
					<Sparkles />
					<span class="sr-only">View code</span>
				</Button>
			{/snippet}
		</Tooltip.Trigger>
		<Tooltip.Content>
			{clipboard.copied ? 'Copied' : 'Copy to Clipboard'}
		</Tooltip.Content>
	</Tooltip.Root>

	{#if source}
		{#key page.url.pathname}
			<ComponentCodeViewer item={source} />
		{/key}
	{/if}
</div>
