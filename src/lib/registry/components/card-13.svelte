<script lang="ts">
	import { StarIcon } from '@lucide/svelte';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
</script>

<Card.Root class="max-w-md border-none">
	<Card.Content>
		<p>
			Incredible time-saver! FlyonUI has made UI development a breeze. The pre build components are
			not only
			<span class="bg-primary/10">visually appealing but also highly customizable</span>, fitting
			seamlessly into my projects. With a wide array of options to choose from, I can easily match.
		</p>
	</Card.Content>
	<Card.Footer class="justify-between gap-3 max-sm:flex-col max-sm:items-stretch">
		<div class="flex items-center gap-3">
			<Avatar.Root class="ring-2 ring-ring">
				<Avatar.Image src="/avatars/05.webp" alt="Hallie Richards" />
				<Avatar.Fallback class="text-xs">SG</Avatar.Fallback>
			</Avatar.Root>
			<div class="flex flex-col gap-0.5">
				<Card.Title class="flex items-center gap-1 text-sm">Sam Green</Card.Title>
				<Card.Description>@SamG11</Card.Description>
			</div>
		</div>
		<div class="flex items-center gap-1">
			<StarIcon
				class="size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400"
			/>
			<StarIcon
				class="size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400"
			/>
			<StarIcon
				class="size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400"
			/>
			<StarIcon
				class="size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400"
			/>
			<StarIcon class="size-5 stroke-amber-500 dark:stroke-amber-400" />
		</div>
	</Card.Footer>
</Card.Root>
