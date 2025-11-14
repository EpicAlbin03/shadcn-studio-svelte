<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	type Props = {
		variant?: 'default' | 'muted';
		children: Snippet;
	};

	let { variant = 'default', children }: Props = $props();

	const colorClass = variant === 'muted' ? 'text-muted-foreground' : 'text-foreground/80';
</script>

<p class={cn(colorClass)}>
	{@render children()}
</p>
