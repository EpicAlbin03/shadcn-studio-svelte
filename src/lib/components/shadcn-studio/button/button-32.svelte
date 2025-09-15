<script lang="ts">
	import { PlusIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
</script>

<Tooltip.Root>
	<Tooltip.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="icon" class="rounded-full">
				<PlusIcon />
				<span class="sr-only">Add new item</span>
			</Button>
		{/snippet}
	</Tooltip.Trigger>
	<Tooltip.Content class="px-2 py-1 text-xs">Add new item</Tooltip.Content>
</Tooltip.Root>
