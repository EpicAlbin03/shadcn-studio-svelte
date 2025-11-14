<script lang="ts">
	import type { ComponentProps } from '$lib/types/components';
	import ComponentCodeViewer from '$lib/components/component-code-viewer/component-code-viewer.svelte';
	import { page } from '$app/state';
	import type { HighlightedBlock } from '../../../routes/api/block/[block]/+server';
	import { PUBLIC_URL } from '$lib/config/site-config';
	import CopyPrompt from '$lib/components/CopyPrompt.svelte';

	type Props = { componentsData: ComponentProps };

	let { componentsData }: Props = $props();

	const source = $derived(componentsData as HighlightedBlock);

	export const copyPromptText = `I’m looking at this shadcn-studio-svelte documentation: ${PUBLIC_URL}/docs/components/${componentsData.name}.
Help me understand how to use it. Be ready to explain concepts, give examples, or help debug based on it.`;
</script>

<div class="absolute end-2 top-2 flex w-full items-center justify-between">
	<div class="ml-6 hidden text-sm text-muted-foreground group-hover/item:block">
		{componentsData.name}
	</div>

	<div class="ml-auto flex items-center justify-center gap-2">
		<CopyPrompt {copyPromptText} />

		{#if source}
			{#key page.url.pathname}
				<ComponentCodeViewer item={source} />
			{/key}
		{/if}
	</div>
</div>
