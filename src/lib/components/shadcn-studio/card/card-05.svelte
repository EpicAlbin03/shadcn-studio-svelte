<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import {
		Card,
		CardContent,
		CardHeader,
		CardDescription,
		CardTitle,
		CardFooter
	} from '$lib/components/ui/card';
</script>

<Card class="max-w-md pt-0">
	<CardContent class="px-0">
		<img
			src="/components/card-02.webp"
			alt="Banner"
			class="aspect-video h-70 rounded-t-xl object-cover"
		/>
	</CardContent>
	<CardHeader>
		<CardTitle>Ethereal Swirl Gradient</CardTitle>
		<CardDescription
			>Smooth, flowing gradients blending rich reds and blues in an abstract swirl.</CardDescription
		>
	</CardHeader>
	<CardFooter class="gap-3 max-sm:flex-col max-sm:items-stretch">
		<Button>Explore More</Button>
		<Button variant={'outline'}>Download Now</Button>
	</CardFooter>
</Card>
