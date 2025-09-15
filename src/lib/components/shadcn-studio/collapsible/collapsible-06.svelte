<script lang="ts">
	import * as Collapsible from '$lib/components/ui/collapsible/index.js';

	let isTrackOrderOpen = $state(true);
	let isCancelOrderOpen = $state(false);
</script>

<div class="w-full space-y-4">
	<div class="space-y-2">
		<p class="font-medium">How can I track my order?</p>
		<Collapsible.Root bind:open={isTrackOrderOpen} class="space-y-2">
			<Collapsible.Content>
				<p class="text-sm">
					To track your order, simply log in to your account and navigate to the order history
					section. You'll find detailed information about your order status and tracking number
					there.
				</p>
			</Collapsible.Content>
			<Collapsible.Trigger>
				<span class="text-sm text-muted-foreground underline">
					{isTrackOrderOpen ? 'Hide answer' : 'Show answer'}
				</span>
			</Collapsible.Trigger>
		</Collapsible.Root>
	</div>
	<div class="space-y-2">
		<p class="font-medium">Can I cancel my order?</p>
		<Collapsible.Root bind:open={isCancelOrderOpen} class="space-y-2">
			<Collapsible.Content>
				<p class="text-sm">
					Scheduled delivery orders can be cancelled 72 hours prior to your selected delivery date
					for full refund.
				</p>
			</Collapsible.Content>
			<Collapsible.Trigger>
				<span class="text-sm text-muted-foreground underline">
					{isCancelOrderOpen ? 'Hide answer' : 'Show answer'}
				</span>
			</Collapsible.Trigger>
		</Collapsible.Root>
	</div>
</div>
