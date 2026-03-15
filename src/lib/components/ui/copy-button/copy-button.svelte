<script lang="ts" module>
	import { Button, type ButtonProps } from '$lib/components/ui/button';
	import { UseClipboard } from '$lib/hooks/use-clipboard.svelte';
	import CheckIcon from '@lucide/svelte/icons/check';
	import CopyIcon from '@lucide/svelte/icons/copy';
	import XIcon from '@lucide/svelte/icons/x';
	import { scale } from 'svelte/transition';
	import * as Tooltip from '$lib/components/ui/tooltip';

	export type CopyButtonProps = ButtonProps & {
		text: string;
		icon?: LucideIcon;
		animationDuration?: number;
		onCopied?: (status: UseClipboard['status']) => void;
		tooltip?: {
			default?: string;
			success?: string;
			failure?: string;
		};
	};
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		text,
		icon: Icon,
		animationDuration = 500,
		variant = 'ghost',
		size = 'icon',
		onCopied,
		tooltip = {
			default: 'Copy to Clipboard',
			success: 'Copied',
			failure: 'Failed to copy'
		},
		children,
		...restProps
	}: CopyButtonProps = $props();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const rp = $derived(restProps as any);

	// If button-text is provided, set the size to default
	let buttonSize = $derived(size === 'icon' && children ? 'default' : size);

	const clipboard = new UseClipboard();

	async function handleCopy() {
		const status = await clipboard.copy(text);
		onCopied?.(status);
	}
</script>

<Tooltip.Root disableCloseOnTriggerClick>
	<Tooltip.Trigger {...rp} onclick={async () => handleCopy()}>
		{#snippet child({ props })}
			<Button
				{...props}
				bind:ref
				{variant}
				size={buttonSize}
				data-slot="copy-button"
				type="button"
				name="copy"
			>
				{#if clipboard.status === 'success'}
					<div in:scale={{ duration: animationDuration, start: 0.85 }}>
						<CheckIcon tabindex={-1} class="text-green-600 dark:text-green-400" />
						<span class="sr-only" data-llm-ignore>{tooltip.success}</span>
					</div>
				{:else if clipboard.status === 'failure'}
					<div in:scale={{ duration: animationDuration, start: 0.85 }}>
						<XIcon tabindex={-1} class="text-destructive" />
						<span class="sr-only" data-llm-ignore>{tooltip.failure}</span>
					</div>
				{:else}
					<div in:scale={{ duration: animationDuration, start: 0.85 }}>
						{#if Icon}
							<Icon tabindex={-1} />
						{:else}
							<CopyIcon tabindex={-1} />
						{/if}
						<span class="sr-only" data-llm-ignore>{tooltip.default}</span>
					</div>
				{/if}
				{@render children?.()}
			</Button>
		{/snippet}
	</Tooltip.Trigger>
	<Tooltip.Content>
		{#if clipboard.status === 'success'}
			{tooltip.success}
		{:else if clipboard.status === 'failure'}
			{tooltip.failure}
		{:else}
			{tooltip.default}
		{/if}
	</Tooltip.Content>
</Tooltip.Root>
