<script lang="ts">
	import { ArrowRightIcon, type Icon as IconType } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';

	type StatItem = {
		icon: typeof IconType;
		value: string;
		description: string;
	}[];

	type Props = { stats: StatItem };

	let { stats }: Props = $props();
</script>

<section class="bg-muted py-8 sm:py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 space-y-4 text-center md:mb-16 lg:mb-24">
			<h2 class="text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl">About Us</h2>
			<p class="text-xl text-muted-foreground">
				Our achievement story stands as a powerful testament to teamwork and perseverance. United,
				we have faced challenges, celebrated victories, and woven a narrative of growth and success.
			</p>
			<Button size="lg" href="#" class="group rounded-lg text-base shadow-sm has-[>svg]:px-6">
				Read more
				<ArrowRightIcon class="transition-transform duration-200 group-hover:translate-x-0.5" />
			</Button>
		</div>

		<div class="relative mb-8 h-full w-full max-lg:space-y-6 sm:mb-16 lg:mb-24">
			<div class="aspect-video w-full overflow-hidden rounded-xl lg:h-[644px]">
				<iframe
					width="100%"
					height="100%"
					src="https://www.youtube.com/embed/RQYZXwLBY8A?si=MvvPX6xaOdzySLfb"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
			</div>

			<div
				class="grid gap-10 rounded-md border bg-background p-8 sm:max-lg:grid-cols-2 lg:absolute lg:-bottom-25 lg:left-1/2 lg:w-3/4 lg:-translate-x-1/2 lg:grid-cols-4 lg:px-10 xl:w-max"
			>
				{#each stats as stat}
					{@const Icon = stat.icon}
					<div class="flex flex-col items-center justify-center gap-2.5 text-center">
						<div class="flex size-7 items-center justify-center [&>svg]:size-7">
							<Icon />
						</div>
						<span class="text-2xl font-semibold">{stat.value}</span>
						<p class="text-lg text-muted-foreground">{stat.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
