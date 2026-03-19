<script lang="ts" module>
	import type { Side } from './types.js';
	import { cn } from '$lib/utils';

	export type GlobalTooltipArrowProps = {
		side: Side;
	};
</script>

<script lang="ts">
	let { side }: GlobalTooltipArrowProps = $props();
</script>

<div
	data-slot="tooltip-arrow"
	class={cn(
		'absolute z-50 size-2.5 rotate-45 rounded-[2px] bg-foreground',
		(side === 'top' || side === 'bottom') && 'left-1/2 -translate-x-1/2',
		(side === 'left' || side === 'right') && 'top-1/2 -translate-y-1/2',
		side === 'top' && '-bottom-0.75',
		side === 'bottom' && '-top-0.75',
		side === 'left' && '-right-0.75',
		side === 'right' && '-left-0.75'
	)}
></div>
