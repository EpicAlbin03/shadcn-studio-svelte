<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button';
</script>

<Card.Root class="max-w-lg py-0 sm:flex-row sm:gap-0">
	<Card.Content class="grow-1 px-0">
		<img src="/components/card-03.webp" alt="Banner" class="size-full rounded-s-xl" />
	</Card.Content>
	<div class="sm:min-w-54">
		<Card.Header class="pt-6">
			<Card.Title>Dreamy Colorwave Gradient</Card.Title>
			<Card.Description>
				A smooth blend of vibrant pinks, purples, and blues for a magical touch.
			</Card.Description>
		</Card.Header>
		<Card.Footer class="gap-3 py-6">
			<Button
				class="bg-transparent bg-gradient-to-br from-purple-500 to-pink-500 text-white focus-visible:ring-pink-600/20"
			>
				Explore More
			</Button>
		</Card.Footer>
	</div>
</Card.Root>
