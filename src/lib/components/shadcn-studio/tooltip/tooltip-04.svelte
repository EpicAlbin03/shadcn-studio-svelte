<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
</script>

<Tooltip.Root>
	<Tooltip.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="sm">Error</Button>
		{/snippet}
	</Tooltip.Trigger>
	<Tooltip.Content class="bg-destructive text-white" arrowClasses="bg-destructive fill-destructive">
		<p>This is an error tooltip</p>
	</Tooltip.Content>
</Tooltip.Root>
