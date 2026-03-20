<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	export type CraftButtonLabelProps = {
		children?: Snippet;
		class?: string;
	};
</script>

<script lang="ts">
	let { children, class: className }: CraftButtonLabelProps = $props();
</script>

<span
	class={cn('relative z-2 transition-colors duration-500 group-hover:text-foreground', className)}
>
	{@render children?.()}
</span>
