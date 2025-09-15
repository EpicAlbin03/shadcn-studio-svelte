<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';

	const avatars = [
		{
			src: '/avatars/03.webp',
			fallback: 'OS',
			name: 'Olivia Sparks'
		},
		{
			src: '/avatars/06.webp',
			fallback: 'HL',
			name: 'Howard Lloyd'
		},
		{
			src: '/avatars/05.webp',
			fallback: 'HR',
			name: 'Hallie Richards'
		},
		{
			src: '/avatars/16.webp',
			fallback: 'JW',
			name: 'Jenny Wilson'
		}
	];
</script>

<div
	class="flex flex-wrap items-center justify-center rounded-full border bg-background p-1 shadow-sm"
>
	<div class="flex -space-x-1">
		{#each avatars as avatar}
			<Avatar.Root class="size-6 ring-2 ring-background">
				<Avatar.Image src={avatar.src} alt={avatar.name} />
				<Avatar.Fallback class="text-xs">{avatar.fallback}</Avatar.Fallback>
			</Avatar.Root>
		{/each}
	</div>
	<p class="px-2 text-xs text-muted-foreground">
		Loved by <strong class="font-medium text-foreground">10K+</strong> developers.
	</p>
</div>
