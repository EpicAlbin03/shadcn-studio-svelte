<script lang="ts" module>
	import { cn } from '$lib/utils';
	import { Button, type ButtonProps } from '$lib/components/ui/button';
	import { tv } from 'tailwind-variants';

	export const swipeButtonVariants = tv({
		base: 'relative overflow-hidden rounded-full ring-2 duration-500 text-shadow-xs',
		variants: {
			variant: {
				default:
					'ring-primary/60 hover:bg-primary shadow-[inset_0_-3px_6px_0px_rgba(255,255,255,0.90)] hover:shadow-[inset_0_-3px_6px_-2px_rgba(255,255,255,0.90)] dark:shadow-[inset_0_-3px_6px_0px_rgba(0,0,0,0.60)] dark:hover:shadow-[inset_0_-3px_6px_-2px_rgba(0,0,0,0.60)]',
				secondary:
					'ring-secondary/60 hover:bg-secondary shadow-[inset_0_-3px_6px_0px_rgba(0,0,0,0.15)] hover:shadow-[inset_0_-3px_6px_-2px_rgba(0,0,0,0.15)] dark:shadow-[inset_0_-3px_6px_0px_rgba(255,255,255,0.30)] dark:hover:shadow-[inset_0_-3px_6px_-2px_rgba(255,255,255,0.30)]',
				destructive:
					'ring-destructive/60 hover:bg-destructive shadow-[inset_0_-3px_6px_0px_rgba(255,255,255,0.90)] hover:shadow-[inset_0_-3px_6px_-2px_rgba(255,255,255,0.90)] dark:shadow-[inset_0_-3px_6px_0px_rgba(0,0,0,0.60)] dark:hover:shadow-[inset_0_-3px_6px_-2px_rgba(0,0,0,0.60)]',
				outline:
					'ring-border/60 hover:bg-accent shadow-[inset_0_-3px_6px_0px_rgba(0,0,0,0.10)] hover:shadow-[inset_0_-3px_6px_-2px_rgba(0,0,0,0.10)] dark:shadow-[inset_0_-3px_6px_0px_rgba(255,255,255,0.20)] dark:hover:shadow-[inset_0_-3px_6px_-2px_rgba(255,255,255,0.20)]',
				ghost:
					'ring-transparent hover:ring-accent/60 shadow-none hover:bg-accent hover:shadow-[inset_0_-3px_6px_-2px_rgba(0,0,0,0.10)] dark:hover:shadow-[inset_0_-3px_6px_-2px_rgba(255,255,255,0.20)]'
			}
		},
		defaultVariants: {
			variant: 'default'
		}
	});

	export type SwipeVariant = 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost';
	export type SwipeButtonProps = Omit<ButtonProps, 'variant'> & {
		variant?: SwipeVariant;
	};
</script>

<script lang="ts">
	let {
		children,
		class: className,
		variant = 'default',
		size = 'default',
		ref = $bindable(null),
		...props
	}: SwipeButtonProps = $props();
</script>

<Button
	bind:ref
	{variant}
	{size}
	class={cn(
		swipeButtonVariants({ variant }),
		size === 'lg' && 'text-base has-[>svg]:px-6',
		className
	)}
	{...props}
>
	{@render children?.()}
</Button>
