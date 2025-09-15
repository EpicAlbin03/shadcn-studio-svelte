<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
</script>

<Tooltip.Root>
	<Tooltip.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="sm">Rounded</Button>
		{/snippet}
	</Tooltip.Trigger>
	<Tooltip.Content class="rounded-full">
		<p>This tooltip is rounded</p>
	</Tooltip.Content>
</Tooltip.Root>
