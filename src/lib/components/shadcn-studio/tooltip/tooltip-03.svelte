<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
</script>

<Tooltip>
	<TooltipTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="sm">No arrow</Button>
		{/snippet}
	</TooltipTrigger>
	<TooltipContent arrowClasses="invisible">
		<p>This tooltip don't have arrow</p>
	</TooltipContent>
</Tooltip>
