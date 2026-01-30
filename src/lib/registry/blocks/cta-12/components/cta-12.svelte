<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
</script>

<section class="bg-muted py-8 sm:py-16 lg:py-24">
	<div class="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
		<Card.Root class="shadow-none">
			<Card.Content>
				<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
					<div class="relative h-64 sm:h-80 lg:h-auto">
						<img
							src="/blocks/cta-12.webp"
							alt="Workspace with laptop"
							class="h-full w-full rounded-lg object-cover"
						/>
					</div>

					<Card.Root class="rounded-lg border-0 bg-muted shadow-none">
						<Card.Content class="flex h-full flex-col justify-between gap-4">
							<h2 class="text-xl leading-tight font-semibold lg:text-2xl">
								Explore insights, stories, and strategies that help you build better products every
								day.
							</h2>
							<div>
								<p class="mb-3 text-base text-muted-foreground">
									Join 1,000,000+ subscribers receiving expert tips on earning more, investing
									smarter and living better, all in our free newsletter.
								</p>
								<form class="gap-3 py-1 max-sm:space-y-2 sm:flex sm:flex-row">
									<Input
										type="email"
										placeholder="Your email"
										class="h-10 flex-1 bg-background text-base"
									/>
									<Button size="lg" class="rounded-lg text-base max-sm:w-full" type="submit">
										Subscribe
									</Button>
								</form>
							</div>
						</Card.Content>
					</Card.Root>
				</div>
			</Card.Content>
		</Card.Root>
	</div>
</section>
