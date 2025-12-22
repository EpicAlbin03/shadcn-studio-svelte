<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Transition } from 'motion-sv';
	import { motion } from 'motion-sv';
	import { useMutationObserver } from 'runed';
	import { cn } from '$lib/utils';
	import { motionTabsContext } from './motion-tabs.svelte';

	export type MotionTabsContentsProps = HTMLAttributes<HTMLDivElement> & {
		children?: Snippet;
		transition?: Transition;
		class?: string;
	};
</script>

<script lang="ts">
	let {
		children,
		class: className,
		transition = {
			type: 'spring',
			stiffness: 300,
			damping: 30,
			bounce: 0,
			restDelta: 0.01
		},
		...restProps
	}: MotionTabsContentsProps = $props();

	let contentValues = $state<string[]>([]);
	const ctx = motionTabsContext.get();

	let contentsRef = $state<HTMLDivElement | null>(null);

	function updateValues() {
		if (!contentsRef) return;
		const contentElements = contentsRef.querySelectorAll('[data-slot="tabs-content"]');
		contentValues = Array.from(contentElements).map((el) => el.getAttribute('data-value') ?? '');
	}

	$effect(() => {
		if (contentsRef) updateValues();
	});

	useMutationObserver(
		() => contentsRef,
		() => updateValues(),
		{ childList: true, subtree: true }
	);

	const activeIndex = $derived(contentValues.indexOf(ctx.activeValue));
</script>

<div
	bind:this={contentsRef}
	data-slot="tabs-contents"
	class={cn('overflow-hidden', className)}
	{...restProps}
>
	<motion.div class="-mx-2 flex" animate={{ x: `${activeIndex * -100}%` }} {transition}>
		{@render children?.()}
	</motion.div>
</div>
