<script lang="ts">
	import { InfoIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
</script>

<Tooltip>
	<TooltipTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="sm">Content</Button>
		{/snippet}
	</TooltipTrigger>
	<TooltipContent class="max-w-64 py-3 text-pretty">
		<div class="space-y-1">
			<div class="flex items-center gap-2">
				<InfoIcon class="size-4" />
				<p class="text-sm font-medium">Accessibility First</p>
			</div>
			<p class="text-primary-foreground/80">
				Tooltips should supplement the UI, not hide critical information. Ensure all important
				content is visible without requiring tooltip interaction.
			</p>
		</div>
	</TooltipContent>
</Tooltip>
