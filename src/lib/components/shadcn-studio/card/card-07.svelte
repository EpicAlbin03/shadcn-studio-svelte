<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
</script>

<Card
	class="relative max-w-md py-0 before:absolute before:size-full before:rounded-xl before:bg-primary/70"
>
	<CardContent class="px-0">
		<img src="/components/card-08.webp" alt="Banner" class="h-70 w-112 rounded-xl" />
	</CardContent>
	<div class="absolute">
		<CardHeader class="w-full pt-6 text-primary-foreground">
			<CardTitle>Creative Catalyst</CardTitle>
		</CardHeader>
		<CardContent class="text-primary-foreground/80">
			Step into a world where imagination takes the lead and every pixel tells a story. This is a
			space designed to unleash your creative potential without boundaries or time constraints.
			Explore bold ideas, experiment with vibrant concepts, and craft visuals that inspire and
			captivate.
		</CardContent>
	</div>
</Card>
