<script lang="ts" module>
	import { cn } from '$lib/utils';
	import { Button, type ButtonProps } from '$lib/components/ui/button';
	import { tv } from 'tailwind-variants';

	export const flowButtonVariants = tv({
		base: 'relative rounded-lg border border-transparent bg-clip-padding duration-500 text-shadow-xs after:absolute after:-inset-30 after:-z-1 after:rounded-[inherit] after:border after:border-[inherit] after:bg-origin-border after:mask-exclude after:transition-transform after:duration-500 hover:after:rotate-180',
		variants: {
			variant: {
				default:
					'hover:bg-primary after:bg-[conic-gradient(from_90deg_at_50%_50%,var(--primary),var(--primary)_50%,rgba(0,0,0,15%)_51%_99%,var(--primary))] dark:after:bg-[conic-gradient(from_90deg_at_50%_50%,var(--primary),var(--primary)_50%,rgba(0,0,0,30%)_51%_99%,var(--primary))]',
				secondary:
					'hover:bg-secondary after:mask-clip-content after:[mask:linear-gradient(black,black),linear-gradient(black,black)] after:bg-[conic-gradient(from_90deg_at_50%_50%,var(--secondary),var(--secondary)_50%,rgba(0,0,0,15%)_51%_99%,var(--secondary))] dark:after:bg-[conic-gradient(from_90deg_at_50%_50%,var(--secondary),var(--secondary)_50%,rgba(255,255,255,60%)_51%_99%,var(--secondary))]',
				destructive:
					'hover:bg-destructive after:bg-[conic-gradient(from_90deg_at_50%_50%,var(--destructive),var(--destructive)_50%,rgba(0,0,0,15%)_51%_99%,var(--destructive))] dark:after:bg-[conic-gradient(from_90deg_at_50%_50%,var(--destructive),var(--destructive)_50%,rgba(0,0,0,30%)_51%_99%,var(--destructive))]',
				outline:
					'hover:bg-accent after:mask-clip-content after:[mask:linear-gradient(black,black),linear-gradient(black,black)] after:bg-[conic-gradient(from_90deg_at_50%_50%,var(--border),var(--border)_50%,rgba(0,0,0,15%)_51%_99%,var(--border))] dark:after:bg-[conic-gradient(from_90deg_at_50%_50%,var(--border),var(--border)_50%,rgba(255,255,255,30%)_51%_99%,var(--border))]',
				ghost:
					'bg-transparent hover:bg-accent after:bg-transparent hover:after:bg-[conic-gradient(from_90deg_at_50%_50%,var(--accent),var(--accent)_50%,transparent_51%_99%,var(--accent))] dark:hover:after:bg-[conic-gradient(from_90deg_at_50%_50%,var(--accent),var(--accent)_50%,transparent_51%_99%,var(--accent))]'
			}
		},
		defaultVariants: {
			variant: 'default'
		}
	});

	export type FlowVariant = 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost';
	export type FlowButtonProps = Omit<ButtonProps, 'variant'> & {
		variant?: FlowVariant;
	};

	const ringColors: Record<FlowVariant, string> = {
		default: 'ring-primary/60',
		secondary: 'ring-secondary/60',
		destructive: 'ring-destructive/60',
		outline: 'ring-border/60',
		ghost: 'ring-transparent hover:ring-accent/60'
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
	}: FlowButtonProps = $props();
</script>

<div
	class={cn(
		'relative isolate w-fit overflow-hidden rounded-lg ring-2 transition-shadow',
		ringColors[variant ?? 'default'],
		className
	)}
>
	<Button
		bind:ref
		{variant}
		{size}
		class={cn(flowButtonVariants({ variant }), size === 'lg' && 'text-base has-[>svg]:px-6')}
		{...props}
	>
		{@render children?.()}
	</Button>
</div>
