<script lang="ts" module>
	import { Motion, type MotionProps } from 'motion-start';
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
		ref = $bindable(null)
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

<Motion.button
	bind:el={ref}
	onmousemove={handleMouse}
	onmouseleave={reset}
	animate={{ x, y }}
	transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
	whileTap={{
		scale: 0.95
	}}
	class={cn(buttonVariants({ variant, size }), 'relative transition-none', className)}
>
	{@render children?.()}
</Motion.button>
