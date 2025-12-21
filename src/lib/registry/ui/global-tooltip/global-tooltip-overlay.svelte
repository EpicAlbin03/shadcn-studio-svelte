<script lang="ts">
	import { motion, AnimatePresence } from 'motion-sv';
	import { Tooltip as TooltipPrimitive } from 'bits-ui';
	import { globalTooltipContext } from './global-tooltip-provider.svelte';
	import { getTooltipPosition } from './types.js';
	import GlobalTooltipArrow from './global-tooltip-arrow.svelte';

	const ctx = globalTooltipContext.get();

	let lastPosition = $state<{
		x: number;
		y: number;
		transform: string;
		initial: { x?: number; y?: number };
	} | null>(null);

	const calculatedPosition = $derived(
		ctx.currentTooltip
			? getTooltipPosition({
					rect: ctx.currentTooltip.rect,
					side: ctx.currentTooltip.side,
					sideOffset: ctx.currentTooltip.sideOffset,
					align: ctx.currentTooltip.align,
					alignOffset: ctx.currentTooltip.alignOffset
				})
			: null
	);

	$effect(() => {
		if (calculatedPosition) {
			lastPosition = calculatedPosition;
		}
	});

	const activePosition = $derived(calculatedPosition ?? lastPosition);
	let lastTooltip = $state<typeof ctx.currentTooltip>(null);

	$effect(() => {
		if (ctx.currentTooltip) {
			lastTooltip = ctx.currentTooltip;
		}
	});

	const activeTooltip = $derived(ctx.currentTooltip ?? lastTooltip);
</script>

<AnimatePresence>
	{#if ctx.currentTooltip && activeTooltip?.content && activePosition}
		<TooltipPrimitive.Portal>
			<div
				data-slot="tooltip-overlay-container"
				class="fixed z-50"
				style:top="{activePosition.y}px"
				style:left="{activePosition.x}px"
				style:transform={activePosition.transform}
			>
				<motion.div
					data-slot="tooltip-overlay"
					layoutId="tooltip-overlay-{ctx.globalId}"
					initial={{ opacity: 0, scale: 0, ...activePosition.initial }}
					animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
					exit={{ opacity: 0, scale: 0, ...activePosition.initial }}
					transition={ctx.transition}
					class="relative w-fit rounded-md bg-foreground fill-foreground px-3 py-1.5 text-xs text-balance text-background"
				>
					{#if typeof activeTooltip.content === 'string'}
						{activeTooltip.content}
					{:else}
						{@render activeTooltip.content()}
					{/if}

					{#if activeTooltip.arrow}
						<GlobalTooltipArrow side={activeTooltip.side} />
					{/if}
				</motion.div>
			</div>
		</TooltipPrimitive.Portal>
	{/if}
</AnimatePresence>
