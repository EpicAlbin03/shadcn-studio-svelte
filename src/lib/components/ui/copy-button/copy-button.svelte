<script lang="ts" module>
	import { Check, Copy } from '@lucide/svelte';
	import { Button, type ButtonProps } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { UseClipboard } from '$lib/hooks/use-clipboard.svelte';
	import { cn } from '$lib/utils';

	export type CopyButtonProps = ButtonProps & {
		text: string;
		class?: string;
		onCopied?: (e: MouseEvent) => void;
		icon?: LucideIcon;
		tooltip?: string;
		tooltipCopied?: string;
	};
</script>

<script lang="ts">
	let {
		text,
		class: className,
		variant = 'ghost',
		ref = $bindable(null),
		onCopied,
		icon: Icon,
		tooltip = 'Copy to Clipboard',
		tooltipCopied = 'Copied'
	}: CopyButtonProps = $props();

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
				bind:ref
				{...props}
				data-slot="copy-button"
				size="icon"
				{variant}
				class={cn(
					'[&>.lucide-check]:text-green-600 dark:[&>.lucide-check]:text-green-400 [&>svg]:size-3',
					className
				)}
			>
				<span class="sr-only" data-llm-ignore>Copy</span>
				{#if clipboard.copied}
					<Check />
				{:else if Icon}
					<Icon />
				{:else}
					<Copy />
				{/if}
			</Button>
		{/snippet}
	</Tooltip.Trigger>
	<Tooltip.Content>
		{clipboard.copied ? tooltipCopied : tooltip}
	</Tooltip.Content>
</Tooltip.Root>
