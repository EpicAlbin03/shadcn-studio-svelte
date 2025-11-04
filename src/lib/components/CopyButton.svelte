<script lang="ts">
	import { Check, Copy } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { useCopy } from '$lib/hooks/use-copy.svelte';
	import { cn } from '$lib/utils';

	type Props = {
		source: string | null;
		class?: string;
		toast?: string;
		onCopied?: () => void;
		code?: boolean;
		ignoreNonKeyboardFocus?: boolean;
	};

	let {
		source,
		class: className,
		toast,
		onCopied,
		code = true,
		ignoreNonKeyboardFocus = true
	}: Props = $props();

	const copyHook = useCopy(1500, toast, onCopied);
	const copied = $derived(copyHook.copied);
	const copy = $derived(copyHook.copy);
</script>

<Tooltip.Root {ignoreNonKeyboardFocus}>
	<Tooltip.Trigger>
		{#snippet child({ props })}
			<Button
				{...props}
				variant="ghost"
				size="icon"
				class={cn(
					' transition-none hover:!bg-transparent disabled:opacity-100',
					code &&
						'absolute end-2 top-2 cursor-pointer text-muted-foreground hover:text-muted-foreground',
					className
				)}
				onclick={() => copy(source || '')}
				aria-label={copied ? 'Copied' : 'Copy component source'}
				disabled={copied}
				tabindex={1}
			>
				<div class={cn('transition-all', copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0')}>
					<Check aria-hidden={true} class="size-4 text-green-500" />
				</div>
				<div
					class={cn(
						'absolute transition-all',
						copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
					)}
				>
					<Copy aria-hidden={true} class="size-4" />
				</div>
			</Button>
		{/snippet}
	</Tooltip.Trigger>
	<Tooltip.Content>Copy</Tooltip.Content>
</Tooltip.Root>
