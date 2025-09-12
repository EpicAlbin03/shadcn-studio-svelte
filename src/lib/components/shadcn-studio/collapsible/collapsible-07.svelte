<script lang="ts">
	import { ChevronUpIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardAction, CardContent, CardTitle } from '$lib/components/ui/card';
	import {
		Collapsible,
		CollapsibleContent,
		CollapsibleTrigger
	} from '$lib/components/ui/collapsible';
</script>

<Card class="w-full max-w-md pb-0">
	<Collapsible>
		<div class="flex items-center justify-between px-6 pb-6">
			<CardTitle>How do I track my order?</CardTitle>
			<CardAction>
				<CollapsibleTrigger>
					{#snippet child({ props })}
						<Button {...props} variant="outline" size="sm">
							<span class="[[data-state=open]>&]:hidden">Show</span>
							<span class="[[data-state=closed]>&]:hidden">Hide</span>
							<ChevronUpIcon class="[[data-state=closed]>&]:rotate-180" />
						</Button>
					{/snippet}
				</CollapsibleTrigger>
			</CardAction>
		</div>
		<CollapsibleContent>
			<CardContent class="space-y-2 px-0">
				<p class="px-6">You'll receive tracking information via email once your order ships.</p>
				<img
					src="/components/accordion-01.webp"
					alt="Banner"
					class="aspect-video h-70 rounded-b-xl object-cover"
				/>
			</CardContent>
		</CollapsibleContent>
	</Collapsible>
</Card>
