<script lang="ts" module>
	import { Motion, type MotionProps } from 'motion-start';
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';
	import { buttonVariants, type ButtonProps } from '$lib/components/ui/button';

	export interface BounceButtonProps extends MotionProps, Omit<ButtonProps, 'style'> {
		children?: Snippet;
		class?: string;
	}
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

<Motion.button
	bind:el={ref}
	whileHover={{ scale: 1.1 }}
	class={cn(buttonVariants({ variant, size }), 'transition-none', className)}
	transition={{ type: 'spring', stiffness: 400, damping: 10 }}
>
	{@render children?.()}
</Motion.button>
