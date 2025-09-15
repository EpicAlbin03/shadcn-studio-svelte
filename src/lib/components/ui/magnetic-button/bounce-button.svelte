<script lang="ts" module>
	import { Motion, type MotionProps } from 'motion-start';
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
		ref = $bindable(null)
	}: BounceButtonProps = $props();
</script>

<!-- TODO: Spread props when motion-start is compatible -->
<Motion.button
	bind:el={ref}
	whileHover={{ scale: 1.1 }}
	class={cn(buttonVariants({ variant, size }), 'transition-none', className)}
	transition={{ type: 'spring', stiffness: 400, damping: 10 }}
>
	{@render children?.()}
</Motion.button>
