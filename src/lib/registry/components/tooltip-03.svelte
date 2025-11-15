<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
</script>

<Tooltip.Root>
	<Tooltip.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="sm">No arrow</Button>
		{/snippet}
	</Tooltip.Trigger>
	<Tooltip.Content arrowClasses="invisible">
		<p>This tooltip don't have arrow</p>
	</Tooltip.Content>
</Tooltip.Root>
