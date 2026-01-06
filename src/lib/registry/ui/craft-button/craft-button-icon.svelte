<script lang="ts" module>
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import { CraftButtonContext } from './craft-button.svelte';

	export type CraftButtonIconProps = {
		children?: Snippet;
		class?: string;
	};
</script>

<script lang="ts">
	let { children, class: className }: CraftButtonIconProps = $props();

	const ctx = CraftButtonContext.get();
	const size = $derived(ctx.size);
	const iconSize = $derived(size === 'lg' ? 'size-6' : size === 'sm' ? 'size-4' : 'size-5');
</script>

<span class={cn('relative z-1', iconSize, className)}>
	<span
		class={cn(
			'absolute inset-0 -z-1 rounded-full bg-background transition-transform duration-500 group-hover:scale-[15]',
			iconSize
		)}
	></span>
	<span
		class={cn(
			'relative z-2 flex items-center justify-center rounded-full bg-background text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-background',
			iconSize
		)}
	>
		{@render children?.()}
	</span>
</span>
