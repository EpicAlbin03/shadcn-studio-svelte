<script lang="ts" module>
	import { cn } from '$lib/utils';
	import { Button, type ButtonProps } from '$lib/components/ui/button';
	import { tv } from 'tailwind-variants';

	export const orionButtonVariants = tv({
		base: 'border-0 transition-shadow duration-300',
		variants: {
			variant: {
				default:
					'hover:bg-primary shadow-[inset_0_2px_3px_0_var(--primary),inset_2px_-4px_4px_0_rgba(0,0,0,0.25),inset_-2px_4px_4px_0_rgba(255,255,255,0.35)] hover:shadow-[inset_0_0_0_0_var(--primary),inset_1px_-1.5px_2px_0_rgba(0,0,0,0.25),inset_-1px_1.5px_2px_0_rgba(255,255,255,0.35)]',
				secondary:
					'hover:bg-secondary shadow-[inset_0_2px_3px_0_var(--secondary),inset_2px_-4px_4px_0_rgba(0,0,0,0.25),inset_-2px_4px_4px_0_rgba(255,255,255,0.35)] hover:shadow-[inset_0_0_0_0_var(--secondary),inset_1px_-1.5px_2px_0_rgba(0,0,0,0.25),inset_-1px_1.5px_2px_0_rgba(255,255,255,0.35)]',
				destructive:
					'hover:bg-destructive shadow-[inset_0_2px_3px_0_var(--destructive),inset_2px_-4px_4px_0_rgba(0,0,0,0.25),inset_-2px_4px_4px_0_rgba(255,255,255,0.35)] hover:shadow-[inset_0_0_0_0_var(--destructive),inset_1px_-1.5px_2px_0_rgba(0,0,0,0.25),inset_-1px_1.5px_2px_0_rgba(255,255,255,0.35)]',
				outline:
					'hover:bg-accent shadow-[inset_0_2px_3px_0_var(--border),inset_2px_-4px_4px_0_rgba(0,0,0,0.08),inset_-2px_4px_4px_0_rgba(255,255,255,0.5)] hover:shadow-[inset_0_0_0_0_var(--border),inset_1px_-1.5px_2px_0_rgba(0,0,0,0.08),inset_-1px_1.5px_2px_0_rgba(255,255,255,0.5)]',
				ghost:
					'shadow-none hover:bg-accent hover:shadow-[inset_1px_-1.5px_2px_0_rgba(0,0,0,0.08),inset_-1px_1.5px_2px_0_rgba(255,255,255,0.5)]'
			}
		},
		defaultVariants: {
			variant: 'default'
		}
	});

	export type OrionVariant = 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost';
	export type OrionButtonProps = Omit<ButtonProps, 'variant'> & {
		variant?: OrionVariant;
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
	}: OrionButtonProps = $props();
</script>

<Button
	bind:ref
	{variant}
	{size}
	class={cn(
		orionButtonVariants({ variant }),
		size === 'lg' && 'text-base has-[>svg]:px-6',
		className
	)}
	{...props}
>
	{@render children?.()}
</Button>
