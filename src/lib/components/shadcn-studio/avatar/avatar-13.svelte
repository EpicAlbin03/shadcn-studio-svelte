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

<div class="flex -space-x-2">
	{#each avatars as avatar}
		<Avatar.Root class="ring-2 ring-background">
			<Avatar.Image src={avatar.src} alt={avatar.name} />
			<Avatar.Fallback class="text-xs">{avatar.fallback}</Avatar.Fallback>
		</Avatar.Root>
	{/each}
</div>
