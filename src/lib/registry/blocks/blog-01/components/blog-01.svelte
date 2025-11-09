<script lang="ts">
	import { ArrowRightIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';

	type BlogCard = {
		img: string;
		alt: string;
		title: string;
		description: string;
		blogLink: string;
	}[];

	type Props = { blogCards: BlogCard };

	let { blogCards }: Props = $props();
</script>

<section class="py-8 sm:py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
			<p class="text-sm font-medium text-primary uppercase">Blog list</p>
			<h2 class="text-2xl font-semibold md:text-3xl lg:text-4xl">Plan your upcoming journey.</h2>
			<p class="text-xl text-muted-foreground">
				Explore new destinations, indulge in local cuisines, and immerse yourself in diverse
				cultures.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each blogCards as item}
				<Card.Root class="pt-0 shadow-none max-lg:last:col-span-full">
					<Card.Content class="px-0">
						<img
							src={item.img}
							alt={item.alt}
							class="aspect-video h-60 w-full rounded-t-xl object-cover"
						/>
					</Card.Content>
					<Card.Header class="mb-2 gap-3">
						<Card.Title class="text-xl">
							<a href={item.blogLink}>{item.title}</a>
						</Card.Title>
						<Card.Description class="text-base">{item.description}</Card.Description>
					</Card.Header>
					<Card.Footer>
						<Button
							class="group rounded-lg text-base shadow-sm has-[>svg]:px-6"
							size="lg"
							href={item.blogLink}
						>
							Read More
							<ArrowRightIcon
								class="transition-transform duration-200 group-hover:translate-x-0.5"
							/>
						</Button>
					</Card.Footer>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>
