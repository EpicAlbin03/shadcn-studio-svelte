<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { Side, Align, TooltipContext } from './types.js';
	import { Context } from 'runed';

	export type GlobalTooltipProps = {
		children: Snippet;
		side?: Side;
		sideOffset?: number;
		align?: Align;
		alignOffset?: number;
	};

	export const tooltipContext = new Context<TooltipContext>('Tooltip');
</script>

<script lang="ts">
	let {
		children,
		side = 'top',
		sideOffset = 10,
		align = 'center',
		alignOffset = 0
	}: GlobalTooltipProps = $props();

	const id = $props.id();
	let content = $state<Snippet | string | null>(null);
	let arrow = $state(true);

	function setContent(newContent: Snippet | string | null) {
		content = newContent;
	}

	function setArrow(newArrow: boolean) {
		arrow = newArrow;
	}

	tooltipContext.set({
		get content() {
			return content;
		},
		setContent,
		get arrow() {
			return arrow;
		},
		setArrow,
		side,
		sideOffset,
		align,
		alignOffset,
		id
	});
</script>

{@render children()}
