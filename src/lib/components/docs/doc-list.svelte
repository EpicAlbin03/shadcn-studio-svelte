<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	type Props = {
		class?: string;
		type?: 'ul' | 'ol';
		children: Snippet;
	};

	let { type = 'ul', class: className, children }: Props = $props();

	const listClass = type === 'ul' ? 'list-disc' : 'list-decimal';
	const marginClass = type === 'ul' ? 'ms-8' : 'ml-4';
</script>

<svelte:element this={type} class={cn(marginClass, listClass, 'text-foreground/80', className)}>
	{@render children()}
</svelte:element>
