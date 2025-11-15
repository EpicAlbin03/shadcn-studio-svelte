<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Collapsible from '$lib/components/ui/collapsible/index.js';
	import { ChevronDownIcon } from '@lucide/svelte';
	import type { Snippet } from 'svelte';

	type Props = { title: string; children: Snippet; open?: boolean };

	let { title, children, open }: Props = $props();
</script>

<Collapsible.Root class="border-t px-2 py-1.5" bind:open>
	<Collapsible.Trigger>
		{#snippet child({ props })}
			<Button
				{...props}
				class="flex w-full justify-start gap-2 text-sm font-medium hover:bg-transparent [&[data-state=open]>svg]:rotate-180"
				variant="ghost"
				size="sm"
			>
				<ChevronDownIcon
					size={16}
					class="shrink-0 text-muted-foreground/80 transition-transform duration-200"
					aria-hidden="true"
				/>
				{title}
			</Button>
		{/snippet}
	</Collapsible.Trigger>
	<Collapsible.Content
		class="overflow-hidden px-3 py-1 text-sm transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down"
	>
		{@render children()}
	</Collapsible.Content>
</Collapsible.Root>
