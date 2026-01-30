<script lang="ts">
	import { ArrowUpRightIcon, CalendarDaysIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Input } from '$lib/components/ui/input';
	import * as Card from '$lib/components/ui/card';

	export type BlogData = {
		img: string;
		date: string;
		blogTitle: string;
		description: string;
		author: string;
		badge: string;
		authorLink: string;
		blogLink: string;
		categoryLink: string;
	};

	let { blogdata }: { blogdata: BlogData[] } = $props();
</script>

<section class="bg-muted pt-16 pb-12 sm:pb-16 lg:pb-24">
	<div class="mx-auto flex h-full max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
		<!-- Hero Header -->
		<div class="flex max-w-4xl flex-col items-center gap-4 self-center text-center">
			<Badge variant="outline" class="text-sm font-normal">
				Trusted by 1,000,000+ professionals
			</Badge>
			<h1 class="text-3xl leading-[1.29167] font-semibold text-balance sm:text-4xl lg:text-5xl">
				Build Better Products with Insights that Drive Real Impact.
			</h1>
			<p class="mx-auto max-w-2xl text-xl text-muted-foreground">
				Learn how to design, develop, launch, and grow digital products through practical knowledge
				and proven frameworks.
			</p>
			<div class="z-10 flex items-center gap-3 p-2">
				<Input type="email" placeholder="Your email" required class="h-10 bg-background sm:w-70" />
				<Button
					size="lg"
					class="relative w-fit overflow-hidden rounded-lg px-6 text-base before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0] has-[>svg]:px-6 dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]"
					href="#"
				>
					Subscribe
				</Button>
			</div>
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
			{#each blogdata as item, index (`${item.author}-${index}`)}
				<Card.Root class="group py-0 shadow-none">
					<Card.Content class="grid grid-cols-1 px-0 xl:grid-cols-2">
						<div class="p-6">
							<div class="h-59.5 w-full overflow-hidden rounded-lg">
								<img
									src={item.img}
									alt={item.author}
									class="w-full object-cover transition-transform duration-300 group-hover:scale-105"
								/>
							</div>
						</div>
						<div class="flex flex-col justify-center gap-3 p-6">
							<div class="flex items-center gap-1.5 py-1">
								<div class="flex grow items-center gap-1.5 text-muted-foreground">
									<CalendarDaysIcon class="size-6" />
									<p>{item.date}</p>
								</div>
								<a href={item.categoryLink}>
									<Badge class="border-0 bg-primary/10 text-sm text-primary">{item.badge}</Badge>
								</a>
							</div>
							<a href={item.blogLink}>
								<h3 class="text-xl font-medium">{item.blogTitle}</h3>
							</a>

							<p class="text-muted-foreground">{item.description}</p>
							<div class="flex w-full items-center justify-between gap-1 py-1">
								<a href={item.authorLink} class="text-sm font-medium">
									{item.author}
								</a>
								<Button
									size="icon"
									variant="outline"
									class="group-hover:border-transparent group-hover:bg-primary! group-hover:text-primary-foreground hover:border-transparent hover:bg-primary! hover:text-primary-foreground"
									href={item.blogLink}
								>
									<ArrowUpRightIcon />
								</Button>
							</div>
						</div>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>
