<script lang="ts">
	import { InfoIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
</script>

<Tooltip>
	<TooltipTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="sm">Icon</Button>
		{/snippet}
	</TooltipTrigger>
	<TooltipContent class="max-w-64 text-pretty">
		<div class="flex items-center gap-1.5">
			<InfoIcon class="size-4" />
			<p>This tooltip has an icon</p>
		</div>
	</TooltipContent>
</Tooltip>
