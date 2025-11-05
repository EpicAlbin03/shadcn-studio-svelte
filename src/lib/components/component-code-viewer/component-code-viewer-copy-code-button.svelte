<script lang="ts">
	import { useCopy } from '$lib/hooks/use-copy.svelte.js';
	import { ComponentCodeViewerContext } from './component-code-viewer.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import ClipboardIcon from '@lucide/svelte/icons/clipboard';
	import CheckIcon from '@lucide/svelte/icons/check';
	import { cn } from '$lib/utils';
	import type { ComponentProps } from 'svelte';

	let { class: className }: ComponentProps<typeof Button> = $props();

	const ctx = ComponentCodeViewerContext.get();
	const copyHook = useCopy();
	const copied = $derived(copyHook.copied);
	const copy = $derived(copyHook.copy);
</script>

{#if ctx.activeFileCodeToCopy}
	<Button
		onclick={() => {
			copy(ctx.activeFileCodeToCopy);
		}}
		class={cn(
			'mr-2 size-7 shrink-0 rounded-md p-0 hover:text-white focus:text-white focus-visible:text-white active:text-white data-[active=true]:text-white [&>svg]:size-3',
			className
		)}
		variant="ghost"
	>
		{#if copied}
			<CheckIcon />
		{:else}
			<ClipboardIcon />
		{/if}
	</Button>
{/if}
