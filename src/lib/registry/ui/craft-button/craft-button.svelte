<script lang="ts" module>
	import { cn } from '$lib/utils';
	import { Button, type ButtonProps, type ButtonSize } from '$lib/components/ui/button';
	import { Context } from 'runed';

	export type CraftButtonProps = ButtonProps;

	type CraftButtonContextType = {
		size?: ButtonSize;
	};

	export const CraftButtonContext = new Context<CraftButtonContextType>('CraftButton');
</script>

<script lang="ts">
	let {
		children,
		class: className,
		variant = 'default',
		size = 'default',
		ref = $bindable(null),
		...props
	}: CraftButtonProps = $props();

	CraftButtonContext.set({
		get size() {
			return size;
		}
	});
</script>

<Button
	bind:ref
	class={cn(
		'group relative cursor-pointer overflow-hidden rounded-full duration-500 hover:bg-background hover:shadow-md dark:border dark:border-transparent dark:hover:border-primary/30',
		className
	)}
	{...props}
>
	{@render children?.()}
</Button>
