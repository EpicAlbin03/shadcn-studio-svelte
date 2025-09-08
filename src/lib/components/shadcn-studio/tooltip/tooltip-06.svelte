<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
</script>

<Tooltip>
	<TooltipTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="sm">Rounded</Button>
		{/snippet}
	</TooltipTrigger>
	<TooltipContent class="rounded-full">
		<p>This tooltip is rounded</p>
	</TooltipContent>
</Tooltip>
