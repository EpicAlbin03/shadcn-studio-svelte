<script lang="ts" module>
	import type { Snippet } from 'svelte';

	export type GlobalTooltipContentProps = {
		children: Snippet | string;
		arrow?: boolean;
	};
</script>

<script lang="ts">
	import { tooltipContext } from './global-tooltip.svelte';

	let { children, arrow = true }: GlobalTooltipContentProps = $props();

	const ctx = tooltipContext.get();

	$effect(() => {
		ctx.setContent(children);
		ctx.setArrow(arrow);
	});
</script>

<!-- This component doesn't render anything, it just sets the content in context -->
