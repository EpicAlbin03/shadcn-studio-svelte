<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
</script>

<Tooltip.Root>
	<Tooltip.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="sm">Default</Button>
		{/snippet}
	</Tooltip.Trigger>
	<Tooltip.Content>
		<p>This is a simple tooltip</p>
	</Tooltip.Content>
</Tooltip.Root>
