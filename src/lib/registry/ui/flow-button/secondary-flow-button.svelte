<script lang="ts" module>
	import { cn } from '$lib/utils';
	import { Button, type ButtonProps } from '$lib/components/ui/button';

	export type SecondaryFlowButtonProps = ButtonProps;
</script>

<script lang="ts">
	let {
		children,
		class: className,
		variant = 'default',
		size = 'default',
		ref = $bindable(null),
		...props
	}: SecondaryFlowButtonProps = $props();
</script>

<div
	class={cn(
		'relative isolate w-fit overflow-hidden rounded-lg ring-2 ring-secondary/60',
		className
	)}
>
	<Button
		bind:ref
		{variant}
		{size}
		class={cn(
			'relative rounded-lg border border-transparent bg-clip-padding duration-500 text-shadow-xs hover:bg-secondary',
			size === 'lg' && 'text-base has-[>svg]:px-6',

			// After - Border gradient effect with rotation
			'after:absolute after:-inset-30 after:-z-1 after:rounded-[inherit] after:border after:border-[inherit] after:bg-origin-border after:mask-exclude after:mask-clip-content after:transition-transform after:duration-500 after:[mask:linear-gradient(black,black),linear-gradient(black,black)]',

			'after:bg-[conic-gradient(from_90deg_at_50%_50%,var(--secondary),var(--secondary)_50%,rgba(0,0,0,15%)_51%_99%,var(--secondary))] hover:after:rotate-180 dark:after:bg-[conic-gradient(from_90deg_at_50%_50%,var(--secondary),var(--secondary)_50%,rgba(255,255,255,60%)_51%_99%,var(--secondary))]'
		)}
		{...props}
	>
		{@render children?.()}
	</Button>
</div>
