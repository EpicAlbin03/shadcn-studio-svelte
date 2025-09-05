<script lang="ts">
	import { StarIcon } from '@lucide/svelte';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import {
		Card,
		CardFooter,
		CardContent,
		CardTitle,
		CardDescription
	} from '$lib/components/ui/card';
</script>

<Card class="max-w-md border-none">
	<CardContent>
		<p>
			Incredible time-saver! FlyonUI has made UI development a breeze. The pre build components are
			not only{' '}
			<span class="bg-primary/10">visually appealing but also highly customizable</span>, fitting
			seamlessly into my projects. With a wide array of options to choose from, I can easily match.
		</p>
	</CardContent>
	<CardFooter class="justify-between gap-3 max-sm:flex-col max-sm:items-stretch">
		<div class="flex items-center gap-3">
			<Avatar class="ring-2 ring-ring">
				<AvatarImage src="/avatars/05.webp" alt="Hallie Richards" />
				<AvatarFallback class="text-xs">SG</AvatarFallback>
			</Avatar>
			<div class="flex flex-col gap-0.5">
				<CardTitle class="flex items-center gap-1 text-sm">Sam Green</CardTitle>
				<CardDescription>$libSamG11</CardDescription>
			</div>
		</div>
		<div class="flex items-center gap-1">
			<StarIcon
				class="size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400"
			></StarIcon>
			<StarIcon
				class="size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400"
			></StarIcon>
			<StarIcon
				class="size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400"
			></StarIcon>
			<StarIcon
				class="size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400"
			></StarIcon>
			<StarIcon class="size-5 stroke-amber-500 dark:stroke-amber-400"></StarIcon>
		</div>
	</CardFooter>
</Card>
