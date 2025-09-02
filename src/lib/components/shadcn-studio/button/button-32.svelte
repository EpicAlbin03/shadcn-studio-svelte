<script lang="ts">
	import { PlusIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
</script>

<Tooltip>
	<TooltipTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="icon" class="rounded-full">
				<PlusIcon />
				<span class="sr-only">Add new item</span>
			</Button>
		{/snippet}
	</TooltipTrigger>
	<TooltipContent class="px-2 py-1 text-xs">Add new item</TooltipContent>
</Tooltip>
