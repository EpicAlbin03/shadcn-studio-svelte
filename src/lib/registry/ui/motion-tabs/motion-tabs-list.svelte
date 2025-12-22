<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Transition } from 'motion-sv';
	import { cn } from '$lib/utils';
	import { motionTabsContext } from './motion-tabs.svelte';
	import MotionHighlight from './motion-highlight.svelte';

	export type MotionTabsListProps = HTMLAttributes<HTMLDivElement> & {
		children?: Snippet;
		activeClassName?: string;
		transition?: Transition;
		class?: string;
	};
</script>

<script lang="ts">
	let {
		children,
		class: className,
		activeClassName,
		transition = { type: 'spring', stiffness: 200, damping: 25 },
		...restProps
	}: MotionTabsListProps = $props();

	const ctx = motionTabsContext.get();
</script>

<MotionHighlight
	controlledItems
	class={cn('rounded-sm bg-background shadow-sm', activeClassName)}
	value={ctx.activeValue}
	{transition}
>
	<div
		role="tablist"
		data-slot="tabs-list"
		class={cn(
			'inline-flex h-10 w-fit items-center justify-center rounded-lg bg-muted p-[4px] text-muted-foreground',
			className
		)}
		{...restProps}
	>
		{@render children?.()}
	</div>
</MotionHighlight>
