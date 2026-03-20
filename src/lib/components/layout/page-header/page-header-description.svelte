<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	let { class: className, children, ...restProps }: HTMLAttributes<HTMLElement> = $props();
</script>

<p
	class={cn('max-w-3xl text-base text-balance text-foreground sm:text-lg', className)}
	{...restProps}
>
	{@render children?.()}
</p>
