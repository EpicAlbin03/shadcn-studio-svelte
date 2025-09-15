<script lang="ts">
	import { DollarSignIcon } from '@lucide/svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Popover from '$lib/components/ui/popover/index.js';
</script>

<Popover>
	<Popover.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="icon">
				<DollarSignIcon />
				<span class="sr-only">Pricing details</span>
			</Button>
		{/snippet}
	</Popover.Trigger>
	<Popover.Content class="w-80">
		<div class="grid gap-2.5">
			<div class="flex items-center justify-between">
				<span class="text-lg font-semibold">Enterprise Plan</span>
				<span class="text-sm font-medium">$49.99/month</span>
			</div>
			<p class="text-sm">
				Get unlimited access to all features including AI-powered analytics, custom branding,
				priority support, and advanced team collaboration tools.
			</p>
			<div class="flex items-center gap-2">
				<Badge variant="destructive" class="px-1.5 py-px text-xs">Limited Offer</Badge>
				<span class="text-xs text-muted-foreground">20% discount on annual plan</span>
			</div>
		</div>
	</Popover.Content>
</Popover.Root>
