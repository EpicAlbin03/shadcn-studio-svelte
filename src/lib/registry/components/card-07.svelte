<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
</script>

<Card.Root
	class="relative max-w-md py-0 before:absolute before:size-full before:rounded-xl before:bg-primary/70"
>
	<Card.Content class="px-0">
		<img src="/components/card-08.webp" alt="Banner" class="h-70 w-112 rounded-xl" />
	</Card.Content>
	<div class="absolute">
		<Card.Header class="w-full pt-6 text-primary-foreground">
			<Card.Title>Creative Catalyst</Card.Title>
		</Card.Header>
		<Card.Content class="text-primary-foreground/80">
			Step into a world where imagination takes the lead and every pixel tells a story. This is a
			space designed to unleash your creative potential without boundaries or time constraints.
			Explore bold ideas, experiment with vibrant concepts, and craft visuals that inspire and
			captivate.
		</Card.Content>
	</div>
</Card.Root>
