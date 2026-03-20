<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	let { class: className, children, ...restProps }: HTMLAttributes<HTMLElement> = $props();
</script>

<div
	class={cn(
		'flex w-full items-center justify-center gap-2 pt-2 **:data-[slot=button]:shadow-none',
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
