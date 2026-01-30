<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import * as Carousel from '$lib/components/ui/carousel';

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
		class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-11 px-4 sm:px-6 md:grid-cols-2 lg:px-8"
		opts={{
			align: 'start',
			slidesToScroll: 1
		}}
	>
		<!-- Left Content -->
		<div class="space-y-4 md:space-y-16">
			<div class="space-y-4">
				<Badge variant="outline" class="text-sm font-normal">Testimonials</Badge>
				<h2 class="text-2xl font-semibold sm:text-3xl lg:text-4xl">
					Trusted by leaders from various industries
				</h2>
				<p class="text-xl text-muted-foreground">
					From career changes to dream jobs, here's how Shadcn Studio helped.
				</p>
			</div>

			<div class="flex items-center gap-5">
				<Carousel.Previous
					variant="default"
					class="static size-9 translate-y-0 disabled:bg-primary/10 disabled:text-primary disabled:opacity-100"
				/>
				<Carousel.Next
					variant="default"
					class="static size-9 translate-y-0 disabled:bg-primary/10 disabled:text-primary disabled:opacity-100"
				/>
			</div>
		</div>

		<!-- Right Testimonial Carousel -->
		<div class="relative">
			<Carousel.Content class="sm:-ml-6">
				{#each testimonials as testimonial}
					<Carousel.Item class="sm:pl-6">
						<div class="flex flex-col gap-10">
							<div class="space-y-2">
								<p class="h-14 text-8xl">"</p>
								<p class="text-xl font-medium text-muted-foreground sm:text-2xl lg:text-3xl">
									{testimonial.content}
								</p>
							</div>
							<div class="flex items-center gap-2">
								<Avatar.Root class="size-12 rounded-full">
									<Avatar.Image src={testimonial.avatar} alt={testimonial.name} />
									<Avatar.Fallback class="rounded-full text-sm">
										{testimonial.name
											.split(' ', 2)
											.map((n) => n[0])
											.join('')}
									</Avatar.Fallback>
								</Avatar.Root>

								<div class="flex-1">
									<h4 class="text-lg font-medium">{testimonial.name}</h4>
									<p class="text-muted-foreground">
										{testimonial.role} at {testimonial.company}
									</p>
								</div>
							</div>
						</div>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
		</div>
	</Carousel.Root>
</section>
