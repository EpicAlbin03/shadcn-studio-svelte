<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import * as Card from '$lib/components/ui/card';
	import * as Carousel from '$lib/components/ui/carousel';
	import { Rating } from '$lib/registry/ui/rating';

	export type TestimonialItem = {
		name: string;
		role: string;
		company: string;
		avatar: string;
		rating: number;
		content: string;
	};

	type Props = {
		testimonials: TestimonialItem[];
	};

	let { testimonials }: Props = $props();
</script>

<section class="py-8 sm:py-16 lg:py-24">
	<Carousel.Root
		class="mx-auto flex max-w-7xl gap-12 px-4 max-sm:flex-col sm:items-center sm:gap-16 sm:px-6 lg:gap-24 lg:px-8"
		opts={{
			align: 'start',
			slidesToScroll: 1
		}}
	>
		<div class="space-y-4 sm:w-1/2 lg:w-1/3">
			<p class="text-sm font-medium text-primary uppercase">Real customers</p>

			<h2 class="text-2xl font-semibold sm:text-3xl lg:text-4xl">Customers Feedback</h2>

			<p class="text-xl text-muted-foreground">
				From career changes to dream jobs, here&apos;s how Shadcn Studio helped.
			</p>

			<div class="flex items-center gap-4">
				<Carousel.Previous
					variant="default"
					class="static translate-y-0 rounded-md disabled:bg-primary/10 disabled:text-primary disabled:opacity-100"
				/>
				<Carousel.Next
					variant="default"
					class="static translate-y-0 rounded-md disabled:bg-primary/10 disabled:text-primary disabled:opacity-100"
				/>
			</div>
		</div>

		<div class="relative max-w-196 sm:w-1/2 lg:w-2/3">
			<Carousel.Content class="sm:-ml-6">
				{#each testimonials as testimonial}
					<Carousel.Item class="sm:pl-6 lg:basis-1/2">
						<Card.Root class="h-full transition-colors duration-300 hover:border-primary">
							<Card.Content class="space-y-5">
								<div class="flex items-center gap-3">
									<Avatar.Root class="size-10 rounded-full">
										<Avatar.Image src={testimonial.avatar} alt={testimonial.name} />
										<Avatar.Fallback class="rounded-full text-sm">
											{testimonial.name
												.split(' ', 2)
												.map((n) => n[0])
												.join('')}
										</Avatar.Fallback>
									</Avatar.Root>

									<div class="flex-1">
										<h4 class="font-medium">{testimonial.name}</h4>
										<p class="text-sm text-muted-foreground">
											{testimonial.role} at{' '}
											<span class="font-semibold text-card-foreground">{testimonial.company}</span>
										</p>
									</div>
								</div>

								<Rating
									readOnly
									variant="yellow"
									size={24}
									value={testimonial.rating}
									precision={0.5}
								/>
								<p>{testimonial.content}</p>
							</Card.Content>
						</Card.Root>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
		</div>
	</Carousel.Root>
</section>
