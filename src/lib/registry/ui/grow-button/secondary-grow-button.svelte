<script lang="ts" module>
	import { cn } from '$lib/utils';
	import { Button, type ButtonProps } from '$lib/components/ui/button';

	export type SecondaryGrowButtonProps = ButtonProps;
</script>

<script lang="ts">
	let {
		children,
		class: className,
		variant = 'default',
		size = 'default',
		ref = $bindable(null),
		...props
	}: SecondaryGrowButtonProps = $props();
</script>

<Button
	bind:ref
	{variant}
	{size}
	class={cn(
		'cursor-pointer rounded-lg border border-[color-mix(in_oklab,_var(--primary)_30%,_var(--card))] bg-[color-mix(in_oklab,_var(--primary)_10%,_var(--card))] text-primary hover:bg-[color-mix(in_oklab,_var(--primary)_15%,_var(--card))] active:scale-95',
		size === 'lg' && 'text-base has-[>svg]:px-6',
		className
	)}
	{...props}
>
	{@render children?.()}
</Button>
