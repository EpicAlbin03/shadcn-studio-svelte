<script lang="ts">
	import type { ComponentProps } from '$lib/types/components';
	import { cn } from '$lib/utils';

	type Props = { children: Children; componentName: ComponentProps['name']; class?: string };

	let { children, componentName, class: className }: Props = $props();
</script>

<div
	class={cn(
		'group/item relative flex min-h-[210px] items-center justify-center px-8 py-12 group-first/grid:border-t-0 max-sm:px-4',
		className
	)}
	data-slot={componentName}
>
	{@render children?.()}
</div>
