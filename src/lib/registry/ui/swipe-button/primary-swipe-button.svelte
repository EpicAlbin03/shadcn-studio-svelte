<script lang="ts" module>
	import { cn } from '$lib/utils';
	import { Button, type ButtonProps } from '$lib/components/ui/button';

	export type PrimarySwipeButtonProps = ButtonProps;
</script>

<script lang="ts">
	let {
		children,
		class: className,
		variant = 'default',
		size = 'default',
		ref = $bindable(null),
		...props
	}: PrimarySwipeButtonProps = $props();
</script>

<Button
	bind:ref
	{variant}
	{size}
	class={cn(
		'relative overflow-hidden rounded-full shadow-[inset_0_-3px_6px_0px_rgba(255,255,255,0.90)] ring-2 ring-primary/60 duration-500 text-shadow-xs hover:bg-primary hover:shadow-[inset_0_-3px_6px_-2px_rgba(255,255,255,0.90)] dark:shadow-[inset_0_-3px_6px_0px_rgba(0,0,0,0.60)] dark:hover:shadow-[inset_0_-3px_6px_-2px_rgba(0,0,0,0.60)]',
		size === 'lg' && 'text-base has-[>svg]:px-6',
		className
	)}
	{...props}
>
	{@render children?.()}
</Button>
