<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	let { class: className, children, ...restProps }: HTMLAttributes<HTMLElement> = $props();
</script>

<div class={cn('container-wrapper scroll-mt-24', className)} {...restProps}>
	<div class="container flex items-center justify-between gap-4 py-4">
		{@render children?.()}
	</div>
</div>
