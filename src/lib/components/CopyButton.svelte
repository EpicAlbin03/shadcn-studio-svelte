<script lang="ts">
	import { Check, Copy } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { UseClipboard } from '$lib/hooks/use-clipboard.svelte';
	import { cn } from '$lib/utils';

	type Props = {
		text: string;
		class?: string;
		onCopied?: (e: MouseEvent) => void;
	};

	let { text, class: className, onCopied }: Props = $props();

	const clipboard = new UseClipboard();

	function handleCopy(e: MouseEvent) {
		clipboard.copy(text);
		onCopied?.(e);
	}
</script>

<Tooltip.Root disableCloseOnTriggerClick>
	<Tooltip.Trigger onclick={handleCopy}>
		{#snippet child({ props })}
			<Button
				{...props}
				data-slot="copy-button"
				size="icon"
				variant="ghost"
				class={cn(
					'z-10 size-7 shrink-0 rounded-md p-0 opacity-70 hover:opacity-100 focus-visible:opacity-100 [&>svg]:size-3',
					className
				)}
			>
				<span class="sr-only" data-llm-ignore>Copy</span>
				{#if clipboard.copied}
					<Check />
				{:else}
					<Copy />
				{/if}
			</Button>
		{/snippet}
	</Tooltip.Trigger>
	<Tooltip.Content>
		{clipboard.copied ? 'Copied' : 'Copy to Clipboard'}
	</Tooltip.Content>
</Tooltip.Root>
