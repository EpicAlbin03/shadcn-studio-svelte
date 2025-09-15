<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button';
</script>

<div
	class="flex *:rounded-none *:shadow-none max-xl:flex-col max-xl:*:not-last:border-b-0 max-xl:*:first:rounded-t-xl max-xl:*:last:rounded-b-xl xl:*:not-last:border-r-0 xl:*:first:rounded-l-xl xl:*:last:rounded-r-xl"
>
	<Card.Root class="overflow-hidden pt-0">
		<Card.Content class="px-0">
			<img src="/components/card-07.webp" alt="Banner" class="aspect-video w-92 object-cover" />
		</Card.Content>
		<Card.Header>
			<Card.Title>Mystical Blue Swirl</Card.Title>
			<Card.Description>
				Dive into the depths of an enchanting swirl where vibrant blues and soft pinks merge
				seamlessly, creating a mesmerizing flow of colors.
			</Card.Description>
		</Card.Header>
		<Card.Footer class="gap-3 max-sm:flex-col max-sm:items-stretch">
			<Button>Explore More</Button>
			<Button variant="outline">Download Now</Button>
		</Card.Footer>
	</Card.Root>
	<Card.Root class="overflow-hidden pt-0">
		<Card.Content class="px-0">
			<img src="/components/card-04.webp" alt="Banner" class="aspect-video w-92 object-cover" />
		</Card.Content>
		<Card.Header>
			<Card.Title>Fiery Sunset Gradient</Card.Title>
			<Card.Description>
				Experience the warmth of a radiant sunset with flowing gradients of red, orange, and yellow
				blending effortlessly in an abstract glow.
			</Card.Description>
		</Card.Header>
		<Card.Footer class="gap-3 max-sm:flex-col max-sm:items-stretch">
			<Button>Explore More</Button>
			<Button variant="outline">Download Now</Button>
		</Card.Footer>
	</Card.Root>
	<Card.Root class="overflow-hidden pt-0">
		<Card.Content class="px-0">
			<img src="/components/card-05.webp" alt="Banner" class="aspect-video w-92 object-cover" />
		</Card.Content>
		<Card.Header>
			<Card.Title>Cosmic Blue Waves</Card.Title>
			<Card.Description>
				Explore the mysteries of the cosmos with deep, swirling waves of blue and purple, evoking a
				sense of depth and infinite space.
			</Card.Description>
		</Card.Header>
		<Card.Footer class="gap-3 max-sm:flex-col max-sm:items-stretch">
			<Button>Explore More</Button>
			<Button variant="outline">Download Now</Button>
		</Card.Footer>
	</Card.Root>
</div>
