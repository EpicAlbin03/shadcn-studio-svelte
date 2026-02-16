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
			"z-[1] inline-flex size-full cursor-pointer items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground dark:text-muted-foreground dark:data-[state=active]:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
			className
		)}
		{...restProps}
	>
		{@render children?.()}
	</button>
</MotionHighlightItem>
