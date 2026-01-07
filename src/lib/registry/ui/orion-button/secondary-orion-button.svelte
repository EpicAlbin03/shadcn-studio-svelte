<script lang="ts" module>
	import { cn } from '$lib/utils';
	import { Button, type ButtonProps } from '$lib/components/ui/button';

	export type SecondaryOrionButtonProps = ButtonProps;
</script>

<script lang="ts">
	let {
		children,
		class: className,
		variant = 'default',
		size = 'default',
		ref = $bindable(null),
		...props
	}: SecondaryOrionButtonProps = $props();
</script>

<Button
	bind:ref
	{variant}
	{size}
	class={cn(
		'border-0 bg-secondary text-secondary-foreground shadow-[inset_0_2px_3px_0_var(--secondary),inset_2px_-4px_4px_0_rgba(0,0,0,0.25),inset_-2px_4px_4px_0_rgba(255,255,255,0.35)] transition-shadow duration-300 hover:bg-secondary hover:shadow-[inset_0_0_0_0_var(--secondary),inset_1px_-1.5px_2px_0_rgba(0,0,0,0.25),inset_-1px_1.5px_2px_0_rgba(255,255,255,0.35)]',
		size === 'lg' && 'text-base has-[>svg]:px-6',
		className
	)}
	{...props}
>
	{@render children?.()}
</Button>
