<script lang="ts">
	import { HeartIcon } from '@lucide/svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import {
		Card,
		CardHeader,
		CardDescription,
		CardTitle,
		CardFooter,
		CardContent
	} from '$lib/components/ui/card';
	import { cn } from '$lib/utils';

	let liked = $state(false);
</script>

<div
	class="relative max-w-md rounded-xl bg-gradient-to-r from-zinc-600 to-violet-300 pt-0 shadow-lg"
>
	<div class="flex h-60 items-center justify-center">
		<img src="/components/card-11.webp" alt="Shoes" class="w-75" />
	</div>
	<Button
		size="icon"
		onclick={() => (liked = !liked)}
		class="absolute end-4 top-4 rounded-full bg-primary/10 hover:bg-primary/20"
	>
		<HeartIcon
			class={cn('size-4', liked ? 'fill-destructive stroke-destructive' : 'stroke-white')}
		/>
		<span class="sr-only">Like</span>
	</Button>
	<Card class="border-none">
		<CardHeader>
			<CardTitle>Nike Jordan Air Rev</CardTitle>
			<CardDescription class="flex items-center gap-2">
				<Badge variant="outline">EU38</Badge>
				<Badge variant="outline">Black and White</Badge>
			</CardDescription>
		</CardHeader>
		<CardContent>
			<p>
				Crossing hardwood comfort with off-court flair. &apos;80s-Inspired construction, bold
				details and nothin&apos;-but-net style.
			</p>
		</CardContent>
		<CardFooter class="justify-between gap-3 max-sm:flex-col max-sm:items-stretch">
			<div class="flex flex-col">
				<span class="text-sm font-medium uppercase">Price</span>
				<span class="text-xl font-semibold">$69.99</span>
			</div>
			<Button size="lg">Add to cart</Button>
		</CardFooter>
	</Card>
</div>
