<script lang="ts" module>
	import { Motion, type MotionProps, type Transition } from 'motion-start';
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';
	import { buttonVariants, type ButtonProps } from '$lib/components/ui/button';

	export interface RippleButtonProps extends MotionProps, Omit<ButtonProps, 'style'> {
		children?: Snippet;
		onclick?: (e: MouseEvent) => void;
		class?: string;
		scale?: number;
		transition?: Transition;
	}
</script>

<script lang="ts">
	interface Ripple {
		id: number;
		x: number;
		y: number;
	}

	let {
		children,
		onclick: onClick,
		class: className,
		variant = 'default',
		size = 'default',
		ref = $bindable(null),
		scale = 10,
		transition = { duration: 0.6, ease: 'easeOut' }
	}: RippleButtonProps = $props();

	let ripples = $state<Ripple[]>([]);

	const createRipple = (event: MouseEvent) => {
		if (!ref) return;

		const rect = ref.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		const newRipple: Ripple = {
			id: Date.now(),
			x,
			y
		};

		ripples.push(newRipple);

		setTimeout(() => {
			ripples = ripples.filter((r) => r.id !== newRipple.id);
		}, 600);
	};

	const handleClick = (event: MouseEvent) => {
		createRipple(event);
		onClick?.(event);
	};
</script>

<Motion.button
	bind:el={ref}
	data-slot="ripple-button"
	onclick={handleClick}
	class={cn(buttonVariants({ variant, size }), 'relative overflow-hidden', className)}
>
	{@render children?.()}
	{#each ripples as ripple (ripple.id)}
		<Motion.span
			initial={{ scale: 0, opacity: 0.5 }}
			animate={{ scale, opacity: 0 }}
			{transition}
			class="pointer-events-none absolute size-5 rounded-full bg-current"
			style={{
				top: ripple.y - 10,
				left: ripple.x - 10
			}}
		/>
	{/each}
</Motion.button>
