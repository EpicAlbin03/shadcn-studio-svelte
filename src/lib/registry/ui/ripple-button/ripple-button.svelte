<script lang="ts" module>
	import { motion, type MotionProps, type Transition } from 'motion-sv';
	import { buttonVariants, type ButtonProps } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';

	export type RippleButtonProps = MotionProps<'button'> &
		Omit<ButtonProps, 'style'> & {
			scale?: number;
			transition?: Transition;
		};
</script>

<script lang="ts">
	type Ripple = {
		id: number;
		x: number;
		y: number;
	};

	let {
		children,
		onclick: onClick,
		class: className,
		variant = 'default',
		size = 'default',
		ref = $bindable(null),
		scale = 10,
		transition = { duration: 0.6, ease: 'easeOut' },
		...props
	}: RippleButtonProps = $props();

	let ripples = $state<Ripple[]>([]);

	function createRipple(event: MouseEvent) {
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
	}

	function handleClick(event: MouseEvent & { currentTarget: HTMLButtonElement }) {
		createRipple(event);
		onClick?.(event);
	}
</script>

<motion.button
	bind:ref
	class={cn(buttonVariants({ variant, size }), 'relative overflow-hidden', className)}
	data-slot="ripple-button"
	onclick={handleClick}
	{...props}
>
	{@render children?.()}
	{#each ripples as ripple (ripple.id)}
		<motion.span
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
</motion.button>
