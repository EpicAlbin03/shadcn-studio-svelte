<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card/index.js';
</script>

<Card.Root class="max-w-md pt-0">
	<Card.Content class="px-0">
		<img
			src="/components/card-02.webp"
			alt="Banner"
			class="aspect-video h-70 rounded-t-xl object-cover"
		/>
	</Card.Content>
	<Card.Header>
		<Card.Title>Ethereal Swirl Gradient</Card.Title>
		<Card.Description>
			Smooth, flowing gradients blending rich reds and blues in an abstract swirl.
		</Card.Description>
	</Card.Header>
	<Card.Footer class="gap-3 max-sm:flex-col max-sm:items-stretch">
		<Button>Explore More</Button>
		<Button variant="outline">Download Now</Button>
	</Card.Footer>
</Card.Root>
