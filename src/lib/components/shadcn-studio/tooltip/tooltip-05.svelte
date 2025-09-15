<script lang="ts">
	import { InfoIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
</script>

<Tooltip.Root>
	<Tooltip.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="sm">Icon</Button>
		{/snippet}
	</Tooltip.Trigger>
	<Tooltip.Content class="max-w-64 text-pretty">
		<div class="flex items-center gap-1.5">
			<InfoIcon class="size-4" />
			<p>This tooltip has an icon</p>
		</div>
	</Tooltip.Content>
</Tooltip.Root>
