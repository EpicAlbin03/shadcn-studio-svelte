<script lang="ts">
	import { Check, Copy } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
	import { useCopy } from '$lib/hooks/use-copy.svelte';
	import { cn } from '$lib/utils';

	type Props = { source: string | null; class?: string; toast?: string; onCopied?: () => void };

	let { source, class: className, toast, onCopied }: Props = $props();

	const copyHook = useCopy(1500, toast, onCopied);
	const copied = $derived(copyHook.copied);
	const copy = $derived(copyHook.copy);
</script>

<div class={cn('absolute end-2 top-2', className)}>
	<Tooltip>
		<TooltipTrigger>
			{#snippet child({ props })}
				<Button
					{...props}
					variant="ghost"
					size="icon"
					class="cursor-pointer text-muted-foreground transition-none hover:!bg-transparent hover:text-muted-foreground disabled:opacity-100"
					onclick={() => copy(source || '')}
					aria-label={copied ? 'Copied' : 'Copy component source'}
					disabled={copied}
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
		</TooltipTrigger>
		<TooltipContent>Copy</TooltipContent>
	</Tooltip>
</div>
