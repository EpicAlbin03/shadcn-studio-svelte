<script lang="ts">
	import {
		Card,
		CardContent,
		CardHeader,
		CardDescription,
		CardTitle,
		CardFooter
	} from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
</script>

<div
	class="flex *:rounded-none *:shadow-none max-xl:flex-col max-xl:*:not-last:border-b-0 max-xl:*:first:rounded-t-xl max-xl:*:last:rounded-b-xl xl:*:not-last:border-r-0 xl:*:first:rounded-l-xl xl:*:last:rounded-r-xl"
>
	<Card class="overflow-hidden pt-0">
		<CardContent class="px-0">
			<img src="/components/card-07.webp" alt="Banner" class="aspect-video w-92 object-cover" />
		</CardContent>
		<CardHeader>
			<CardTitle>Mystical Blue Swirl</CardTitle>
			<CardDescription>
				Dive into the depths of an enchanting swirl where vibrant blues and soft pinks merge
				seamlessly, creating a mesmerizing flow of colors.
			</CardDescription>
		</CardHeader>
		<CardFooter class="gap-3 max-sm:flex-col max-sm:items-stretch">
			<Button>Explore More</Button>
			<Button variant={'outline'}>Download Now</Button>
		</CardFooter>
	</Card>
	<Card class="overflow-hidden pt-0">
		<CardContent class="px-0">
			<img src="/components/card-04.webp" alt="Banner" class="aspect-video w-92 object-cover" />
		</CardContent>
		<CardHeader>
			<CardTitle>Fiery Sunset Gradient</CardTitle>
			<CardDescription>
				Experience the warmth of a radiant sunset with flowing gradients of red, orange, and yellow
				blending effortlessly in an abstract glow.
			</CardDescription>
		</CardHeader>
		<CardFooter class="gap-3 max-sm:flex-col max-sm:items-stretch">
			<Button>Explore More</Button>
			<Button variant={'outline'}>Download Now</Button>
		</CardFooter>
	</Card>
	<Card class="overflow-hidden pt-0">
		<CardContent class="px-0">
			<img src="/components/card-05.webp" alt="Banner" class="aspect-video w-92 object-cover" />
		</CardContent>
		<CardHeader>
			<CardTitle>Cosmic Blue Waves</CardTitle>
			<CardDescription>
				Explore the mysteries of the cosmos with deep, swirling waves of blue and purple, evoking a
				sense of depth and infinite space.
			</CardDescription>
		</CardHeader>
		<CardFooter class="gap-3 max-sm:flex-col max-sm:items-stretch">
			<Button>Explore More</Button>
			<Button variant={'outline'}>Download Now</Button>
		</CardFooter>
	</Card>
</div>
