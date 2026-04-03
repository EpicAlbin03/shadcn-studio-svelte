<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ComponentProps } from '$lib/registry/components';
	import { cn } from '$lib/utils';

	type Props = { children?: Snippet; componentName: ComponentProps['name']; class?: string };

	let { children, componentName, class: className }: Props = $props();
</script>

<div
	class={cn(
		'group/item relative flex min-h-52.5 w-full items-center justify-center px-8 py-12 group-first/grid:border-t-0 max-sm:px-4',
		className
	)}
	data-slot={componentName}
	id={componentName}
>
	{@render children?.()}
</div>
