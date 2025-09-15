<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
</script>

<Tooltip.Root>
	<Tooltip.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="sm">Badge</Button>
		{/snippet}
	</Tooltip.Trigger>
	<Tooltip.Content>
		<div class="flex items-center gap-2">
			<p>Team plan: $99/month per user.</p>
			<Badge variant="secondary" class="rounded-full px-1.5 py-px">Trending</Badge>
		</div>
	</Tooltip.Content>
</Tooltip.Root>
