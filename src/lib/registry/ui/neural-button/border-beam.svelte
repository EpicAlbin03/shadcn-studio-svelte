<script lang="ts" module>
	import type { Transition, MotionStyle } from 'motion-sv';
	import type { HTMLAttributes } from 'svelte/elements';
	import { motion } from 'motion-sv';
	import { cn } from '$lib/utils';

	export type BorderBeamProps = Omit<HTMLAttributes<HTMLDivElement>, 'style'> & {
		size?: number;
		duration?: number;
		delay?: number;
		colorFrom?: string;
		colorTo?: string;
		transition?: Transition;
		reverse?: boolean;
		initialOffset?: number;
		borderWidth?: number;
		style?: MotionStyle;
	};
</script>

<script lang="ts">
	let {
		class: className,
		size = 50,
		delay = 0,
		duration = 6,
		colorFrom = 'var(--destructive)',
		colorTo = 'var(--primary)',
		transition,
		style = {},
		reverse = false,
		initialOffset = 0,
		borderWidth = 1,
		...restProps
	}: BorderBeamProps = $props();

	const animateOffset = $derived(
		reverse
			? [`${100 - initialOffset}%`, `${-initialOffset}%`]
			: [`${initialOffset}%`, `${100 + initialOffset}%`]
	);
</script>

<div
	class="pointer-events-none absolute inset-0 rounded-[inherit] border-(length:--border-beam-width) border-transparent [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] [mask-composite:intersect] [mask-clip:padding-box,border-box]"
	style:--border-beam-width="{borderWidth}px"
	{...restProps}
>
	<motion.div
		class={cn(
			'absolute aspect-square',
			'rounded-full bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent',
			className
		)}
		style={{
			width: size,
			offsetPath: `rect(0 auto auto 0 round ${size}px)`,
			'--color-from': colorFrom,
			'--color-to': colorTo,
			...style
		}}
		initial={{ offsetDistance: `${initialOffset}%` }}
		animate={{ offsetDistance: animateOffset }}
		transition={{
			repeat: Infinity,
			ease: 'linear',
			duration,
			delay: -delay,
			...(transition ?? {})
		}}
	/>
</div>
