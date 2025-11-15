<script lang="ts">
	import type { ComponentProps } from '$lib/types/components';
	import ComponentCodeViewer from '$lib/components/component-code-viewer/component-code-viewer.svelte';
	import { page } from '$app/state';
	import type { HighlightedBlock } from '../../../routes/api/block/[block]/+server';
	import CopyPrompt from '$lib/components/CopyPrompt.svelte';
	import { ComponentCategoryContext } from '$lib/utils/components';
	import { UserConfigContext } from '$lib/config/user-config.svelte.js';
	import { getCopyPromptText } from '$lib/utils/copy-prompt';

	type Props = { componentsData: ComponentProps };

	let { componentsData }: Props = $props();

	const source = $derived(componentsData as HighlightedBlock);

	const componentCategory = ComponentCategoryContext.get();
	const userConfig = UserConfigContext.get();
	const packageManager = $derived(userConfig.settings.packageManager);

	const copyPromptText = $derived(
		getCopyPromptText(packageManager, componentsData.name, componentCategory.slug, source)
	);
</script>

<div class="absolute end-2 top-2 flex w-full items-center justify-between">
	<div class="ml-6 hidden text-sm text-muted-foreground group-hover/item:block">
		{componentsData.name}
	</div>

	<div class="ml-auto flex items-center justify-center gap-2">
		<CopyPrompt {copyPromptText} hidden />

		{#if source}
			{#key page.url.pathname}
				<ComponentCodeViewer item={source} />
			{/key}
		{/if}
	</div>
</div>
