<script lang="ts">
	import { cn } from '$lib/utils';

	type Props = {
		heading: string;
		level?: 2 | 3;
	};

	let { heading, level = 2 }: Props = $props();

	const sizeClass = level === 2 ? 'text-2xl' : 'text-xl';
	const id = heading
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
</script>

{#if level === 2}
	<h2 class={cn(sizeClass, 'font-bold')} {id}>{heading}</h2>
{:else if level === 3}
	<h3 class={cn(sizeClass, 'font-bold')} {id}>{heading}</h3>
{/if}
