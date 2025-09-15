<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
</script>

<div class="flex flex-wrap gap-2">
	<Tooltip.Root>
		<Tooltip.Trigger>
			{#snippet child({ props })}
				<Button {...props} variant="outline" size="sm">Left</Button>
			{/snippet}
		</Tooltip.Trigger>
		<Tooltip.Content side="left">Tooltip on left</Tooltip.Content>
	</Tooltip.Root>
	<Tooltip.Root>
		<Tooltip.Trigger>
			{#snippet child({ props })}
				<Button {...props} variant="outline" size="sm">Top</Button>
			{/snippet}
		</Tooltip.Trigger>
		<Tooltip.Content side="top">Tooltip on top</Tooltip.Content>
	</Tooltip.Root>
	<Tooltip.Root>
		<Tooltip.Trigger>
			{#snippet child({ props })}
				<Button {...props} variant="outline" size="sm">Bottom</Button>
			{/snippet}
		</Tooltip.Trigger>
		<Tooltip.Content side="bottom">Tooltip on bottom</Tooltip.Content>
	</Tooltip.Root>
	<Tooltip.Root>
		<Tooltip.Trigger>
			{#snippet child({ props })}
				<Button {...props} variant="outline" size="sm">Right</Button>
			{/snippet}
		</Tooltip.Trigger>
		<Tooltip.Content side="right">Tooltip on right</Tooltip.Content>
	</Tooltip.Root>
</div>
