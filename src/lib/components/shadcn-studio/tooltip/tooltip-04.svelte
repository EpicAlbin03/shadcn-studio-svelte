<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
</script>

<Tooltip>
	<TooltipTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="sm">Error</Button>
		{/snippet}
	</TooltipTrigger>
	<TooltipContent class="bg-destructive text-white" arrowClasses="bg-destructive fill-destructive">
		<p>This is an error tooltip</p>
	</TooltipContent>
</Tooltip>
