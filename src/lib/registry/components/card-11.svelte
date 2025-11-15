<script lang="ts">
	import {
		BadgeCheckIcon,
		EllipsisIcon,
		HeartIcon,
		MessageCircleIcon,
		RepeatIcon,
		SendIcon,
		UserPlusIcon
	} from '@lucide/svelte';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card/index.js';
	import { cn } from '$lib/utils';

	let liked = $state(true);
</script>

<Card.Root class="max-w-md">
	<Card.Header class="flex items-center justify-between gap-3">
		<div class="flex items-center gap-3">
			<Avatar.Root class="ring-2 ring-ring">
				<Avatar.Image src="/avatars/05.webp" alt="Hallie Richards" />
				<Avatar.Fallback class="text-xs">PG</Avatar.Fallback>
			</Avatar.Root>
			<div class="flex flex-col gap-0.5">
				<Card.Title class="flex items-center gap-1 text-sm">
					Philip George
					<BadgeCheckIcon class="size-4 fill-sky-600 stroke-white dark:fill-sky-400" />
				</Card.Title>
				<Card.Description>@philip20</Card.Description>
			</div>
		</div>
		<div class="flex items-center gap-2">
			<Button variant="outline" size="sm">
				<UserPlusIcon />
				Follow
			</Button>
			<Button variant="ghost" size="icon" aria-label="Toggle menu">
				<EllipsisIcon class="size-4" />
			</Button>
		</div>
	</Card.Header>
	<Card.Content class="space-y-6 text-sm">
		<img
			src="/components/card-06.webp"
			alt="Banner"
			class="aspect-video w-full rounded-md object-cover"
		/>
		<p>
			Lost in the colors of the night 🌌✨ Sometimes the blur reveals more than clarity.
			<a href="#" class="text-sky-600 dark:text-sky-400">#AbstractVibes</a>
			<a href="#" class="text-sky-600 dark:text-sky-400">#Dreamscape</a>
			<a href="#" class="text-sky-600 dark:text-sky-400">#VisualPoetry</a>
		</p>
	</Card.Content>
	<Card.Footer class="flex items-center gap-1">
		<Button variant="ghost" size="sm" onclick={() => (liked = !liked)}>
			<HeartIcon class={cn('size-4', liked && 'fill-destructive stroke-destructive')} />
			2.1K
		</Button>
		<Button variant="ghost" size="sm">
			<MessageCircleIcon class="size-4" />
			1.4K
		</Button>
		<Button variant="ghost" size="sm">
			<RepeatIcon class="size-4" />
			669
		</Button>
		<Button variant="ghost" size="sm">
			<SendIcon class="size-4" />
			1.1K
		</Button>
	</Card.Footer>
</Card.Root>
