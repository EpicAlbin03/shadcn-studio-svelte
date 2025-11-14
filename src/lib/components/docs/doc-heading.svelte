<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	type Props = {
		level?: 2 | 3;
		children: Snippet;
	};

	let { level = 2, children }: Props = $props();

	const sizeClass = level === 2 ? 'text-2xl' : 'text-xl';
</script>

{#if level === 2}
	<h2 class={cn(sizeClass, 'font-bold')}>{@render children()}</h2>
{:else if level === 3}
	<h3 class={cn(sizeClass, 'font-bold')}>{@render children()}</h3>
{/if}
