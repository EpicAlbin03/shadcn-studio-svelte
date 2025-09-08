<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
</script>

<Tooltip>
	<TooltipTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="sm">Default</Button>
		{/snippet}
	</TooltipTrigger>
	<TooltipContent>
		<p>This is a simple tooltip</p>
	</TooltipContent>
</Tooltip>
