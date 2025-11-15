<script lang="ts">
	import * as Card from '$lib/components/ui/card';
</script>

<section class="bg-muted py-8 sm:py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<Card.Root class="rounded-3xl border-none py-8 shadow-lg sm:py-16 lg:py-24">
			<Card.Content
				class="flex flex-wrap items-center justify-between gap-8 px-8 sm:flex-nowrap sm:px-16 lg:px-24"
			>
				<div class="max-w-xs lg:max-w-lg">
					<h2 class="mb-4 text-3xl font-bold">Download our mobile app</h2>
					<p class="text-lg font-medium text-muted-foreground">
						With a variety of unique blocks, you can effortlessly create a page without any coding.
						Build your next landing page with ease.
					</p>
				</div>
				<div class="flex flex-wrap items-center gap-6 max-md:w-full max-md:flex-col md:justify-end">
					<div class="flex w-[200px] items-center gap-4 rounded-md bg-card-foreground px-6 py-3">
						<img src="/blocks/apple.webp" alt="App Store" class="size-8.5 invert dark:invert-0" />
						<div class="flex flex-col items-start">
							<p class="text-xs leading-4 text-card">Download on the</p>
							<p class="text-base leading-6 font-medium text-card opacity-90">App Store</p>
						</div>
					</div>

					<div class="flex w-[200px] items-center gap-4 rounded-md bg-card-foreground px-6 py-3">
						<img src="/blocks/google-play.webp" alt="Google Play" class="size-8.5" />
						<div class="flex flex-col items-start">
							<p class="text-xs leading-4 text-card">Download on the</p>
							<p class="text-base leading-6 font-medium text-card opacity-90">Google Play</p>
						</div>
					</div>
				</div>
			</Card.Content>
		</Card.Root>
	</div>
</section>
