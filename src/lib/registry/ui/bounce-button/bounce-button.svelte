<script lang="ts" module>
	import { motion, type MotionProps } from 'motion-sv';
	import { cn } from '$lib/utils';
	import { buttonVariants, type ButtonProps } from '$lib/components/ui/button';

	export type BounceButtonProps = MotionProps & Omit<ButtonProps, 'style'>;
</script>

<script lang="ts">
	let {
		children,
		class: className,
		variant = 'default',
		size = 'default',
		ref = $bindable(null),
		...props
	}: BounceButtonProps = $props();
</script>

<motion.button
	bind:ref
	class={cn(buttonVariants({ variant, size }), 'transition-none', className)}
	whileHover={{ scale: 1.1 }}
	transition={{ type: 'spring', stiffness: 400, damping: 10 }}
	{...props}
>
	{@render children?.()}
</motion.button>
