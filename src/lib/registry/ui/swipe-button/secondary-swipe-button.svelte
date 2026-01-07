<script lang="ts" module>
	import { cn } from '$lib/utils';
	import { Button, type ButtonProps } from '$lib/components/ui/button';

	export type SecondarySwipeButtonProps = ButtonProps;
</script>

<script lang="ts">
	let {
		children,
		class: className,
		variant = 'default',
		size = 'default',
		ref = $bindable(null),
		...props
	}: SecondarySwipeButtonProps = $props();
</script>

<Button
	bind:ref
	{variant}
	{size}
	class={cn(
		'relative overflow-hidden rounded-full bg-primary/10 text-primary shadow-[inset_0_-3px_6px_0px_rgba(255,255,255,100)] ring-2 ring-primary/60 duration-500 hover:bg-primary/10 hover:shadow-[inset_0_-3px_6px_-2px_rgba(255,255,255,100)]',
		size === 'lg' && 'text-base has-[>svg]:px-6',
		className
	)}
	{...props}
>
	{@render children?.()}
</Button>
