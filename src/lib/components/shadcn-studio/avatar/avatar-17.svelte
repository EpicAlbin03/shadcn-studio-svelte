<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';

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

<div class="flex -space-x-2 hover:space-x-1">
	{#each avatars as avatar}
		<Avatar class="ring-2 ring-background transition-all duration-300 ease-in-out">
			<AvatarImage src={avatar.src} alt={avatar.name} />
			<AvatarFallback class="text-xs">{avatar.fallback}</AvatarFallback>
		</Avatar>
	{/each}
</div>
