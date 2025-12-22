<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';
	import { motionTabsContext } from './motion-tabs.svelte';
	import MotionHighlightItem from './motion-highlight-item.svelte';

	export type MotionTabsTriggerProps = HTMLButtonAttributes & {
		value: string;
		children?: Snippet;
		class?: string;
	};
</script>

<script lang="ts">
	let { value, children, class: className, ...restProps }: MotionTabsTriggerProps = $props();

	const ctx = motionTabsContext.get();

	// Register trigger on mount
	$effect(() => {
		ctx.registerTrigger(value, true);
		return () => ctx.registerTrigger(value, false);
	});

	const isActive = $derived(ctx.activeValue === value);
</script>

<MotionHighlightItem {value} class="size-full">
	<button
		data-slot="tabs-trigger"
		role="tab"
		onclick={(e) => {
			e.stopPropagation();
			ctx.handleValueChange(value);
		}}
		data-state={isActive ? 'active' : 'inactive'}
		class={cn(
			'z-[1] inline-flex size-full cursor-pointer items-center justify-center rounded-sm px-2 py-1 text-sm font-medium whitespace-nowrap ring-offset-background transition-transform focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground',
			className
		)}
		{...restProps}
	>
		{@render children?.()}
	</button>
</MotionHighlightItem>
