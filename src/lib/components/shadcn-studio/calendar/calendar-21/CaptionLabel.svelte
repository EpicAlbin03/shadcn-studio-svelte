<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ChevronDownIcon } from '@lucide/svelte';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLSpanElement> & {
		children: Snippet;
		isYearView: boolean;
	};

	let { children, isYearView = $bindable() }: Props = $props();
</script>

<Button
	class="-ms-2 flex items-center gap-2 text-sm font-medium hover:bg-transparent data-[state=open]:text-muted-foreground/80 [&[data-state=open]>svg]:rotate-180"
	variant="ghost"
	size="sm"
	onclick={() => (isYearView = !isYearView)}
	data-state={isYearView ? 'open' : 'closed'}
>
	{@render children()}
	<ChevronDownIcon
		size={16}
		class="shrink-0 text-muted-foreground/80 transition-transform duration-200"
		aria-hidden="true"
	/>
</Button>
