<script lang="ts">
	import * as Card from '$lib/components/ui/card';

	type Logos = {
		image: string;
		alt: string;
	};

	type Props = { logos: Logos[] };

	let { logos }: Props = $props();
</script>

<section class="bg-muted py-8 sm:py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
			<h2 class="text-2xl font-semibold md:text-3xl lg:text-4xl">
				<span>A thriving</span>{' '}
				<span class="relative z-1">
					community of businesses
					<span class="absolute bottom-1 left-0 -z-1 h-px w-full bg-primary"></span>
				</span>{' '}
				<span>driving innovation</span>
			</h2>
			<p class="text-xl text-muted-foreground">
				Proudly partnering with top brands to drive success.
			</p>
		</div>

		<Card.Root class="py-14 shadow-lg">
			<Card.Content class="px-14">
				<div class="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 max-sm:flex-col">
					{#each logos as logo}
						<img src={logo.image} alt={logo.alt} class="h-7" />
					{/each}
				</div>
			</Card.Content>
		</Card.Root>
	</div>
</section>
