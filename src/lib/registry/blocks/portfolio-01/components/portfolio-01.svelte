<script lang="ts">
	import { FacebookIcon, GithubIcon, InstagramIcon, TwitterIcon } from '@lucide/svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { Separator } from '$lib/components/ui/separator';

	type Props = { images: string[] };

	let { images }: Props = $props();
</script>

<section class="py-8 sm:py-16 lg:py-24">
	<div class="mx-auto max-w-7xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:space-y-24 lg:px-8">
		<div class="space-y-4">
			<Badge variant="outline" class="rounded-full text-sm font-normal">Our portfolio</Badge>

			<h2 class="text-2xl font-semibold sm:text-3xl lg:text-4xl">Our Impactful Creations</h2>

			<p class="text-xl text-muted-foreground">
				A glimpse into our work, showcasing the power of design, technology, and strategic thinking.
			</p>
		</div>

		<div class="grid gap-6 lg:grid-cols-3">
			<div class="columns-1 gap-6 sm:col-span-2 sm:columns-2">
				{#each images as image, index}
					<div class="mb-6 break-inside-avoid-column overflow-hidden rounded-xl">
						<img src={image} alt={`Portfolio Image ${index + 1}`} class="w-full object-cover" />
					</div>
				{/each}
			</div>

			<div class="space-y-6 px-6">
				<h3 class="text-3xl font-medium">AI Innovations</h3>

				<p class="text-muted-foreground">
					Explore cutting-edge AI solutions that enhance productivity and streamline workflows
					across various industries.Our technologies empower businesses to automate repetitive
					tasks, allowing teams to focus on strategic initiatives.
					<br />
					Join us in transforming the future of work with intelligent systems that adapt to your unique
					needs.
				</p>

				<Separator />

				<ul class="space-y-4">
					<li class="flex items-center gap-8">
						<span class="w-21 text-lg font-medium">Client:</span>
						<span class="text-muted-foreground">AI Innovations</span>
					</li>
					<li class="flex items-center gap-8">
						<span class="w-21 text-lg font-medium">Services:</span>
						<span class="text-muted-foreground">Machine Learning</span>
					</li>
					<li class="flex items-center gap-8">
						<span class="w-21 text-lg font-medium">Year:</span>
						<span class="text-muted-foreground">2024</span>
					</li>
				</ul>

				<Separator />

				<div class="flex items-center gap-8">
					<span class="w-21 text-lg font-medium">Share:</span>
					<div class="flex gap-2">
						<a href="#">
							<FacebookIcon class="size-5.5 text-sky-600" />
						</a>
						<a href="#">
							<InstagramIcon class="size-5.5 text-destructive" />
						</a>
						<a href="#">
							<GithubIcon class="size-5.5 text-primary" />
						</a>
						<a href="#">
							<TwitterIcon class="size-5.5 text-sky-600" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
