<script lang="ts">
	import { ChevronLeftIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
</script>

<Dialog.Root>
	<Dialog.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Scrollable Dialog</Button>
		{/snippet}
	</Dialog.Trigger>
	<Dialog.Content class="flex max-h-[min(600px,80vh)] flex-col gap-0 p-0 sm:max-w-md">
		<ScrollArea class="flex max-h-full flex-col overflow-hidden" tabindex={0}>
			<Dialog.Header class="contents space-y-0 text-left">
				<Dialog.Title class="px-6 pt-6">Product Information</Dialog.Title>
				<Dialog.Description>
					<div class="p-6">
						<div class="space-y-4 [&_strong]:font-semibold [&_strong]:text-foreground">
							<div class="space-y-1">
								<p>
									<strong>Product Name:</strong> SuperTech 2000
								</p>
								<p>
									The SuperTech 2000 is a high-performance device designed for tech enthusiasts and
									professionals alike, offering superior functionality and innovative features.
								</p>
							</div>
							<div class="space-y-1">
								<p>
									<strong>Specifications:</strong>
								</p>
								<ul>
									<li>Processor: 3.6GHz Octa-Core</li>
									<li>Memory: 16GB RAM</li>
									<li>Storage: 1TB SSD</li>
									<li>Display: 15.6" 4K UHD</li>
									<li>Battery Life: 12 hours</li>
									<li>Weight: 2.1kg</li>
								</ul>
							</div>
							<div class="space-y-1">
								<p>
									<strong>Key Features:</strong>
								</p>
								<ul>
									<li>Ultra-fast processing speed for intensive tasks</li>
									<li>Long battery life, perfect for on-the-go professionals</li>
									<li>Sleek and portable design</li>
									<li>Advanced cooling system</li>
									<li>Excellent build quality for durability</li>
								</ul>
							</div>
							<div class="space-y-1">
								<p>
									<strong>Price:</strong>
								</p>
								<p>$2,499.99 (Includes 1-year warranty)</p>
							</div>
							<div class="space-y-1">
								<p>
									<strong>Customer Reviews:</strong>
								</p>
								<p>
									"Absolutely fantastic device! The performance is exceptional, and it handles all
									of my design software without any lag." - John D.
								</p>
								<p>
									"Best purchase I've made in years. The display quality is stunning, and the
									battery lasts all day." - Sarah L.
								</p>
								<p>
									"The SuperTech 2000 is a game-changer in the tech industry. Worth every penny!" -
									Emma W.
								</p>
							</div>
							<div class="space-y-1">
								<p>
									<strong>Return Policy:</strong>
								</p>
								<p>
									If you're not satisfied with your purchase, we offer a 30-day return policy.
									Return the product within 30 days of purchase for a full refund.
								</p>
							</div>
							<div class="space-y-1">
								<p>
									<strong>Warranty:</strong>
								</p>
								<p>
									Comes with a standard 1-year warranty covering defects in materials and
									workmanship. Extended warranty plans are available.
								</p>
							</div>
						</div>
					</div>
				</Dialog.Description>
			</Dialog.Header>
			<Dialog.Footer class="px-6 pb-6 sm:justify-end">
				<Dialog.Close>
					{#snippet child({ props })}
						<Button {...props} variant="outline">
							<ChevronLeftIcon />
							Back
						</Button>
					{/snippet}
				</Dialog.Close>
				<Button>Read More</Button>
			</Dialog.Footer>
		</ScrollArea>
	</Dialog.Content>
</Dialog.Root>
