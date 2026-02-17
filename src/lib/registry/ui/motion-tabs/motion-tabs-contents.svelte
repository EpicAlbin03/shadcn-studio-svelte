<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Transition } from 'motion-sv';
	import { motion } from 'motion-sv';
	import { useMutationObserver, watch } from 'runed';
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
	let activeHeight = $state<number | undefined>(undefined);

	function updateValues() {
		if (!contentsRef) return;
		const contentElements = contentsRef.querySelectorAll('[data-slot="tabs-content"]');
		contentValues = Array.from(contentElements).map((el) => el.getAttribute('data-value') ?? '');
	}

	function measureActiveHeight() {
		if (!contentsRef) return;
		const activeEl = contentsRef.querySelector(
			`[data-slot="tabs-content"][data-value="${ctx.activeValue}"]`
		);
		if (activeEl) {
			const containerStyle = getComputedStyle(contentsRef);
			const paddingTop = parseFloat(containerStyle.paddingTop);
			const paddingBottom = parseFloat(containerStyle.paddingBottom);
			activeHeight = activeEl.scrollHeight + paddingTop + paddingBottom;
		}
	}

	watch(
		() => ctx.activeValue,
		() => {
			measureActiveHeight();
		},
		{ lazy: true }
	);

	useMutationObserver(
		() => contentsRef,
		() => {
			updateValues();
			measureActiveHeight();
		},
		{ childList: true, subtree: true }
	);

	$effect(() => {
		if (!contentsRef) return;

		updateValues();

		const observer = new ResizeObserver(() => {
			measureActiveHeight();
		});

		const contentElements = contentsRef.querySelectorAll('[data-slot="tabs-content"]');
		contentElements.forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	});

	const activeIndex = $derived(contentValues.indexOf(ctx.activeValue));
</script>

<div
	bind:this={contentsRef}
	data-slot="tabs-contents"
	class={cn('overflow-hidden transition-[height] duration-300 ease-out', className)}
	style:height={activeHeight !== undefined ? `${activeHeight}px` : undefined}
	{...restProps}
>
	<motion.div class="-mx-2 flex" animate={{ x: `${activeIndex * -100}%` }} {transition}>
		{@render children?.()}
	</motion.div>
</div>
