<script lang="ts">
	import { StarIcon } from '@lucide/svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { Progress } from '$lib/components/ui/progress';
	import { Separator } from '$lib/components/ui/separator';

	const ratings = {
		1: 0,
		2: 15,
		3: 30,
		4: 30,
		5: 225
	};

	const totalReviews = Object.values(ratings).reduce((acc, count) => acc + count, 0);
	const totalRating = Object.entries(ratings).reduce(
		(acc, [star, count]) => acc + Number(star) * count,
		0
	);
	const averageRating = Number((totalRating / totalReviews || 0).toFixed(2));
</script>

<Popover>
	<Popover.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="icon">
				<StarIcon />
				<span class="sr-only">Ratings & reviews</span>
			</Button>
		{/snippet}
	</Popover.Trigger>
	<Popover.Content class="w-80">
		<div class="grid gap-4">
			<div class="space-y-1">
				<div class="flex items-center gap-1">
					<span class="text-xl font-semibold">{averageRating}</span>
					<StarIcon
						class="size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400"
					/>
				</div>
				<div class="text-sm font-medium">Total {totalReviews} reviews</div>
				<p class="text-sm text-muted-foreground">All reviews are from genuine customers.</p>
			</div>
			<div class="grid">
				<div class="flex items-center justify-between">
					<Badge variant="secondary">+6 this week</Badge>
					<a href="#!" class="text-sm hover:underline"> See all </a>
				</div>
				<Separator class="my-2" />
				<ul class="space-y-2">
					{#each Object.entries(ratings).reverse() as [star, count] (star)}
						<li class="flex items-center gap-2">
							<span class="shrink-0 text-sm">{star} star</span>
							<Progress value={(count / totalReviews) * 100} class="w-full" />
							<span class="shrink-0 text-sm">{count.toString()}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</Popover.Content>
</Popover.Root>
