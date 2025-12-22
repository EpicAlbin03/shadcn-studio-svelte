<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { motion, AnimatePresence, type Transition } from 'motion-sv';
	import { Spring } from 'svelte/motion';
	import { cn } from '$lib/utils';
	import * as Avatar from '$lib/components/ui/avatar';

	export type MotionTooltipItem = {
		image: string;
		name: string;
		fallback: string;
		designation: string;
	};

	export type MotionTooltipProps = HTMLAttributes<HTMLDivElement> & {
		items: MotionTooltipItem[];
		class?: string;
		itemClass?: string;
		transition?: Transition;
		children?: Snippet<[{ item: MotionTooltipItem; index: number }]>;
	};
</script>

<script lang="ts">
	let {
		items,
		class: className,
		itemClass,
		transition = { type: 'spring', stiffness: 260, damping: 10 },
		children,
		...restProps
	}: MotionTooltipProps = $props();

	let hoveredIndex = $state<number | null>(null);

	const springConfig = { stiffness: 0.04, damping: 0.25 };
	const xOffset = new Spring(0, springConfig);
	const rotate = new Spring(0, springConfig);
	const translateX = new Spring(0, springConfig);

	function handleMouseMove(event: MouseEvent & { currentTarget: HTMLElement }) {
		const target = event.currentTarget;
		const halfWidth = target.offsetWidth / 2;
		const x = event.offsetX - halfWidth;

		xOffset.set(x);

		rotate.set((x / 100) * 45);
		translateX.set((x / 100) * 50);
	}

	function handleMouseLeave() {
		hoveredIndex = null;
		xOffset.set(0);
		rotate.set(0);
		translateX.set(0);
	}
</script>

<div class={cn('flex items-center', className)} {...restProps}>
	{#each items as item, index (item.name)}
		<div
			role="group"
			class={cn('relative -me-2.5', itemClass)}
			onmouseenter={() => (hoveredIndex = index)}
			onmouseleave={handleMouseLeave}
		>
			<AnimatePresence mode="popLayout">
				{#if hoveredIndex === index}
					<motion.div
						initial={{ opacity: 0, y: 20, scale: 0.6 }}
						animate={{
							opacity: 1,
							y: 0,
							scale: 1
						}}
						exit={{ opacity: 0, y: 20, scale: 0.6 }}
						{transition}
						style={{
							translateX: `calc(-50% + ${translateX.current}px)`,
							translateY: '-100%',
							rotate: `${rotate.current}deg`,
							whiteSpace: 'nowrap'
						}}
						class="absolute -top-2 left-1/2 z-50 flex flex-col items-center justify-center rounded-md bg-foreground px-4 py-2 text-xs text-background shadow-xl"
					>
						<div class="relative z-[1] text-base font-semibold">{item.name}</div>
						<div class="text-xs text-background/80">{item.designation}</div>
					</motion.div>
				{/if}
			</AnimatePresence>

			{#if children}
				{@render children({ item, index })}
			{:else}
				<Avatar.Root
					class="relative size-10 ring-2 ring-background transition-all duration-300 ease-in-out hover:z-[1] hover:scale-105"
					onmousemove={handleMouseMove}
				>
					<Avatar.Image src={item.image} alt={item.name} />
					<Avatar.Fallback class="text-xs">{item.fallback}</Avatar.Fallback>
				</Avatar.Root>
			{/if}
		</div>
	{/each}
</div>
