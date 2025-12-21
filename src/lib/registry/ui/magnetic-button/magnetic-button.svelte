<script lang="ts" module>
	import { motion, type MotionProps } from 'motion-sv';
	import { cn } from '$lib/utils';
	import { buttonVariants, type ButtonProps } from '$lib/components/ui/button';

	export type MagneticButtonProps = MotionProps & Omit<ButtonProps, 'style'>;
</script>

<script lang="ts">
	type Position = {
		x: number;
		y: number;
	};

	let {
		children,
		class: className,
		variant = 'default',
		size = 'default',
		ref = $bindable(null),
		...props
	}: MagneticButtonProps = $props();

	let position = $state<Position>({ x: 0, y: 0 });
	const { x, y } = $derived(position);

	function handleMouse(e: MouseEvent & { currentTarget: HTMLButtonElement }) {
		if (ref) {
			const { clientX, clientY } = e;
			const { height, width, left, top } = ref.getBoundingClientRect();
			const middleX = clientX - (left + width / 2);
			const middleY = clientY - (top + height / 2);

			position = { x: middleX, y: middleY };
		}
	}

	function reset() {
		position = { x: 0, y: 0 };
	}
</script>

<motion.button
	bind:ref
	class={cn(buttonVariants({ variant, size }), 'relative transition-none', className)}
	onmousemove={handleMouse}
	onmouseleave={reset}
	animate={{ x, y }}
	transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
	whilePress={{
		scale: 0.95
	}}
	{...props}
>
	{@render children?.()}
</motion.button>
