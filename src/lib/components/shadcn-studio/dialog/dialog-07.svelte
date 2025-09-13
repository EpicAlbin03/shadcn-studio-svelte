<script lang="ts">
	import { ChevronLeftIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import {
		Dialog,
		DialogClose,
		DialogContent,
		DialogDescription,
		DialogFooter,
		DialogHeader,
		DialogTitle,
		DialogTrigger
	} from '$lib/components/ui/dialog';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
</script>

<Dialog>
	<DialogTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Fullscreen Dialog</Button>
		{/snippet}
	</DialogTrigger>
	<DialogContent
		class="mb-8 flex h-[calc(100vh-2rem)] min-w-[calc(100vw-2rem)] flex-col justify-between gap-0 p-0"
	>
		<ScrollArea class="flex flex-col justify-between overflow-hidden">
			<DialogHeader class="contents space-y-0 text-left">
				<DialogTitle class="px-6 pt-6">Product Information</DialogTitle>
				<DialogDescription>
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
				</DialogDescription>
			</DialogHeader>
		</ScrollArea>
		<DialogFooter class="px-6 pb-6 sm:justify-end">
			<DialogClose>
				{#snippet child({ props })}
					<Button {...props} variant="outline">
						<ChevronLeftIcon />
						Back
					</Button>
				{/snippet}
			</DialogClose>
			<Button type="button">Read More</Button>
		</DialogFooter>
	</DialogContent>
</Dialog>
