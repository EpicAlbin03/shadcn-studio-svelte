<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
</script>

<div class="flex flex-wrap gap-2">
	<Tooltip>
		<TooltipTrigger>
			{#snippet child({ props })}
				<Button {...props} variant="outline" size="sm">Left</Button>
			{/snippet}
		</TooltipTrigger>
		<TooltipContent side="left">Tooltip on left</TooltipContent>
	</Tooltip>
	<Tooltip>
		<TooltipTrigger>
			{#snippet child({ props })}
				<Button {...props} variant="outline" size="sm">Top</Button>
			{/snippet}
		</TooltipTrigger>
		<TooltipContent side="top">Tooltip on top</TooltipContent>
	</Tooltip>
	<Tooltip>
		<TooltipTrigger>
			{#snippet child({ props })}
				<Button {...props} variant="outline" size="sm">Bottom</Button>
			{/snippet}
		</TooltipTrigger>
		<TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
	</Tooltip>
	<Tooltip>
		<TooltipTrigger>
			{#snippet child({ props })}
				<Button {...props} variant="outline" size="sm">Right</Button>
			{/snippet}
		</TooltipTrigger>
		<TooltipContent side="right">Tooltip on right</TooltipContent>
	</Tooltip>
</div>
