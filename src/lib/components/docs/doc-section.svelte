<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	type Props = {
		spacing?: 'small' | 'medium';
		children: Snippet;
	};

	let { spacing = 'small', children }: Props = $props();

	const spaceClass = spacing === 'small' ? 'space-y-3' : 'space-y-6';
</script>

<div class={cn('flex flex-col items-start', spaceClass)}>
	{@render children()}
</div>
