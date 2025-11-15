<script lang="ts">
	import { ChevronUpIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Collapsible from '$lib/components/ui/collapsible/index.js';
</script>

<Card.Root class="w-full max-w-md pb-0">
	<Collapsible.Root>
		<div class="flex items-center justify-between px-6 pb-6">
			<Card.Title>How do I track my order?</Card.Title>
			<Card.Action>
				<Collapsible.Trigger>
					{#snippet child({ props })}
						<Button {...props} variant="outline" size="sm">
							<span class="[[data-state=open]>&]:hidden">Show</span>
							<span class="[[data-state=closed]>&]:hidden">Hide</span>
							<ChevronUpIcon class="[[data-state=closed]>&]:rotate-180" />
						</Button>
					{/snippet}
				</Collapsible.Trigger>
			</Card.Action>
		</div>
		<Collapsible.Content>
			<Card.Content class="space-y-2 px-0">
				<p class="px-6">You'll receive tracking information via email once your order ships.</p>
				<img
					src="/components/accordion-01.webp"
					alt="Banner"
					class="aspect-video h-70 rounded-b-xl object-cover"
				/>
			</Card.Content>
		</Collapsible.Content>
	</Collapsible.Root>
</Card.Root>
