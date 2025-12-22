<script lang="ts" module>
	import { type Snippet, untrack } from 'svelte';
	import { tooltipContext } from './global-tooltip.svelte';
	import { globalTooltipContext } from './global-tooltip-provider.svelte';

	export type GlobalTooltipTriggerProps = {
		children: Snippet<[{ props: Record<string, unknown> }]>;
	};
</script>

<script lang="ts">
	let { children }: GlobalTooltipTriggerProps = $props();

	const ctx = tooltipContext.get();
	const globalCtx = globalTooltipContext.get();

	let triggerRef = $state<HTMLElement | null>(null);

	function handleOpen() {
		if (!triggerRef) return;
		const rect = triggerRef.getBoundingClientRect();

		globalCtx.showTooltip({
			content: ctx.content!,
			rect,
			side: ctx.side,
			sideOffset: ctx.sideOffset,
			align: ctx.align,
			alignOffset: ctx.alignOffset,
			id: ctx.id,
			arrow: ctx.arrow
		});
	}

	function handleMouseEnter(e: MouseEvent) {
		handleOpen();
	}

	function handleMouseLeave(e: MouseEvent) {
		globalCtx.hideTooltip();
	}

	function handleFocus(e: FocusEvent) {
		handleOpen();
	}

	function handleBlur(e: FocusEvent) {
		globalCtx.hideTooltip();
	}

	$effect(() => {
		const isCurrent = untrack(() => globalCtx.currentTooltip?.id === ctx.id);

		if (!isCurrent) return;
		if (!triggerRef) return;
		if (!ctx.content) return;

		const rect = triggerRef.getBoundingClientRect();
		globalCtx.showTooltip({
			content: ctx.content,
			rect,
			side: ctx.side,
			sideOffset: ctx.sideOffset,
			align: ctx.align,
			alignOffset: ctx.alignOffset,
			id: ctx.id,
			arrow: ctx.arrow
		});
	});

	const isOpen = $derived(globalCtx.currentTooltip?.id === ctx.id);

	const triggerProps = $derived({
		onmouseenter: handleMouseEnter,
		onmouseleave: handleMouseLeave,
		onfocus: handleFocus,
		onblur: handleBlur,
		'data-state': isOpen ? 'open' : 'closed',
		'data-side': ctx.side,
		'data-align': ctx.align,
		'data-slot': 'tooltip-trigger'
	});
</script>

<div bind:this={triggerRef} class="inline-block" {...triggerProps}>
	{@render children({ props: triggerProps })}
</div>
