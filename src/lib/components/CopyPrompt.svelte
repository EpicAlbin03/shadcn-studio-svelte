<script lang="ts">
	import { SparklesIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { cn } from '$lib/utils';
	import { UseClipboard } from '$lib/hooks/use-clipboard.svelte';

	type Props = { class?: string; copyPromptText: string };

	let { class: className, copyPromptText }: Props = $props();

	const clipboard = new UseClipboard();

	function handleCopyPrompt(e: MouseEvent) {
		clipboard.copy(copyPromptText);
	}
</script>

<Tooltip.Root disableCloseOnTriggerClick>
	<Tooltip.Trigger onclick={handleCopyPrompt}>
		{#snippet child({ props })}
			<Button
				{...props}
				variant="ghost"
				size="icon"
				class={cn(
					'hidden cursor-pointer text-muted-foreground transition-none group-hover/item:block hover:!bg-transparent hover:text-foreground',
					className
				)}
				aria-label="Copy Prompt"
			>
				<SparklesIcon />
				<span class="sr-only">Copy Prompt</span>
			</Button>
		{/snippet}
	</Tooltip.Trigger>
	<Tooltip.Content>{clipboard.copied ? 'Copied' : 'Copy Prompt'}</Tooltip.Content>
</Tooltip.Root>
