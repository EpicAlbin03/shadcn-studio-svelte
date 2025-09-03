<script lang="ts" module>
	import { Motion, type MotionProps } from 'motion-start';
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';
	import { buttonVariants, type ButtonProps } from '$lib/components/ui/button';

	export interface MagneticButtonProps extends MotionProps, Omit<ButtonProps, 'style'> {
		children?: Snippet;
		class?: string;
	}
</script>

<script lang="ts">
	interface Position {
		x: number;
		y: number;
	}

	let {
		children,
		class: className,
		variant = 'default',
		size = 'default',
		ref = $bindable(null)
	}: MagneticButtonProps = $props();

	let position = $state<Position>({ x: 0, y: 0 });
	const { x, y } = $derived(position);

	const handleMouse = (e: MouseEvent) => {
		if (ref) {
			const { clientX, clientY } = e;
			const { height, width, left, top } = ref.getBoundingClientRect();
			const middleX = clientX - (left + width / 2);
			const middleY = clientY - (top + height / 2);

			position = { x: middleX, y: middleY };
		}
	};

	const reset = () => {
		position = { x: 0, y: 0 };
	};
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
