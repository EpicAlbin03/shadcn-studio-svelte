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

<Card class="max-w-lg py-0 sm:flex-row sm:gap-0">
	<CardContent class="grow-1 px-0">
		<img src="/components/card-03.webp" alt="Banner" class="size-full rounded-s-xl" />
	</CardContent>
	<div class="sm:min-w-54">
		<CardHeader class="pt-6">
			<CardTitle>Dreamy Colorwave Gradient</CardTitle>
			<CardDescription
				>A smooth blend of vibrant pinks, purples, and blues for a magical touch.</CardDescription
			>
		</CardHeader>
		<CardFooter class="gap-3 py-6">
			<Button
				class="bg-transparent bg-gradient-to-br from-purple-500 to-pink-500 text-white focus-visible:ring-pink-600/20"
			>
				Explore More
			</Button>
		</CardFooter>
	</div>
</Card>
