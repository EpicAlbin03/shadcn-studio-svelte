<script lang="ts">
	import { ArrowRightIcon, CalendarDaysIcon } from '@lucide/svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';

	export type BlogPost = {
		title: string;
		description: string;
		imageUrl: string;
		imageAlt: string;
		date: string;
		category: string;
		author: string;
		authorLink: string;
		blogLink: string;
		categoryLink: string;
	};

	type Props = {
		blogPosts: BlogPost[];
	};

	let { blogPosts }: Props = $props();
</script>

<section class="py-8 sm:py-16 lg:py-24">
	<div class="mx-auto max-w-7xl space-y-16 px-4 py-8 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="space-y-4">
			<Badge variant="outline">Trending</Badge>

			<h2 class="text-2xl font-semibold md:text-3xl lg:text-4xl">Related Post</h2>

			<p class="text-lg text-muted-foreground md:text-xl">
				Expand your knowledge with these hand-picked posts.
			</p>
		</div>

		<!-- Blog Grid -->
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each blogPosts as post (post.title)}
				<Card.Root class="group h-full overflow-hidden shadow-none">
					<Card.Content class="space-y-3.5">
						<div class="mb-6 overflow-hidden rounded-lg sm:mb-12">
							<a href={post.blogLink}>
								<img
									src={post.imageUrl}
									alt={post.imageAlt}
									class="h-59.5 w-full object-cover transition-transform duration-300 group-hover:scale-105"
								/>
							</a>
						</div>
						<div class="flex items-center justify-between gap-1.5">
							<div class="flex items-center gap-1.5 text-muted-foreground">
								<CalendarDaysIcon class="size-6" />
								<span>{post.date}</span>
							</div>
							<a href={post.categoryLink}>
								<Badge class="border-0 bg-primary/10 text-sm text-primary">{post.category}</Badge>
							</a>
						</div>
						<h3 class="line-clamp-2 text-lg font-medium md:text-xl">
							<a href={post.blogLink}>{post.title}</a>
						</h3>
						<p class="line-clamp-2 text-muted-foreground">{post.description}</p>
						<div class="flex items-center justify-between">
							<a href={post.authorLink} class="text-sm font-medium">
								{post.author}
							</a>
							<Button
								size="icon"
								variant="outline"
								class="transition-colors duration-300 group-hover:border-primary group-hover:bg-primary! group-hover:text-primary-foreground hover:border-primary hover:bg-primary! hover:text-primary-foreground"
								href={post.authorLink}
							>
								<ArrowRightIcon class="size-4 -rotate-45" />
								<span class="sr-only">Read more: {post.title}</span>
							</Button>
						</div>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>
