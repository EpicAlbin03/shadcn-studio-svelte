<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';

	type Integration = {
		name: string;
		description: string;
		image: string;
		alt: string;
	}[];

	type Props = { integrations: Integration };

	let { integrations }: Props = $props();
</script>

<section class="py-8 sm:py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
			<div class="space-y-4">
				<h2 class="text-2xl font-semibold md:text-3xl lg:text-4xl">
					Connects with your favourite tools to boost conversions!
				</h2>
				<p class="text-xl text-muted-foreground">
					Harness the potential of seamless integration to boost your sales performance! Discover
					how connecting your tools can lead to greater efficiency and impressive results.
				</p>
				<Button size="lg" class="rounded-lg text-base shadow-sm">Check all app</Button>
			</div>

			<div class="space-y-6">
				{#each integrations as integration}
					<Card.Root class="bg-transparent py-4 shadow-none">
						<Card.Content class="flex items-center gap-6">
							<div class="flex size-17 shrink-0 items-center justify-center rounded-md border">
								<img src={integration.image} alt={integration.alt} class="size-10" />
							</div>
							<div>
								<Card.Title class="text-xl font-medium">{integration.name}</Card.Title>
								<Card.Description class="text-base">{integration.description}</Card.Description>
							</div>
						</Card.Content>
					</Card.Root>
				{/each}
			</div>
		</div>
	</div>
</section>
