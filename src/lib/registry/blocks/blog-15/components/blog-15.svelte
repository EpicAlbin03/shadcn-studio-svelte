<script lang="ts">
	import { SearchIcon, ArrowRightIcon, CalendarDaysIcon } from '@lucide/svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { ScrollArea, ScrollAreaScrollbar } from '$lib/components/ui/scroll-area';
	import * as Tabs from '$lib/components/ui/tabs';

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

	const categories = ['All', 'Product', 'Design', 'Startup Growth'];
</script>

{#snippet blogGrid(posts: BlogPost[])}
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each posts as post}
			<Card.Root class="group h-full overflow-hidden shadow-none transition-all duration-300">
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
							<Badge class="rounded-full border-0 bg-primary/10 text-sm text-primary">
								{post.category}
							</Badge>
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
							class="group-hover:border-primary group-hover:bg-primary! group-hover:text-primary-foreground hover:border-primary hover:bg-primary! hover:text-primary-foreground"
							href={post.blogLink}
						>
							<ArrowRightIcon class="size-4 -rotate-45" />
							<span class="sr-only">Read more: {post.title}</span>
						</Button>
					</div>
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
{/snippet}

<section class="py-8 sm:py-16 lg:py-24">
	<div class="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-16 lg:px-8">
		<!-- Header -->
		<div class="space-y-4">
			<p class="text-sm">Blogs</p>

			<h2 class="text-2xl font-semibold md:text-3xl lg:text-4xl">
				Build Better Products with Insights & Inspiration.
			</h2>

			<p class="text-lg text-muted-foreground md:text-xl">
				Practical insights and real stories to guide your product from vision to reality.
			</p>
		</div>

		<!-- Tabs and Search -->
		<Tabs.Root value="All" class="gap-8 lg:gap-16">
			<div class="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
				<ScrollArea class="w-full rounded-lg bg-muted sm:w-auto">
					<Tabs.List class="h-auto gap-1">
						{#each categories as category}
							<Tabs.Trigger
								value={category}
								class="cursor-pointer rounded-lg px-4 text-base hover:bg-primary/10"
							>
								{category}
							</Tabs.Trigger>
						{/each}
					</Tabs.List>
					<ScrollAreaScrollbar orientation="horizontal" />
				</ScrollArea>

				<div class="relative max-md:w-full">
					<div
						class="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 text-muted-foreground peer-disabled:opacity-50"
					>
						<SearchIcon class="size-4" />
						<span class="sr-only">Search</span>
					</div>
					<Input
						type="search"
						placeholder="Search"
						class="peer h-10 px-9 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none"
					/>
				</div>
			</div>

			<!-- All Posts Tab -->
			<Tabs.Content value="All">
				{@render blogGrid(blogPosts)}
			</Tabs.Content>

			<!-- Category-specific Tabs -->
			{#each categories.slice(1) as category}
				<Tabs.Content value={category}>
					{@render blogGrid(blogPosts.filter((post) => post.category === category))}
				</Tabs.Content>
			{/each}
		</Tabs.Root>
	</div>
</section>
