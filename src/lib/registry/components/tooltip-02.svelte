<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
</script>

<Tooltip.Root>
	<Tooltip.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="sm">Light</Button>
		{/snippet}
	</Tooltip.Trigger>
	<Tooltip.Content class="bg-zinc-200 text-zinc-950" arrowClasses="bg-zinc-200 fill-zinc-200">
		<p>This tooltip will be always light</p>
	</Tooltip.Content>
</Tooltip.Root>
