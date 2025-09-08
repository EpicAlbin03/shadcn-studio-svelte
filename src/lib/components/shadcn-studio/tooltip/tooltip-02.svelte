<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
</script>

<Tooltip>
	<TooltipTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="sm">Light</Button>
		{/snippet}
	</TooltipTrigger>
	<TooltipContent class="bg-zinc-200 text-zinc-950" arrowClasses="bg-zinc-200 fill-zinc-200">
		<p>This tooltip will be always light</p>
	</TooltipContent>
</Tooltip>
