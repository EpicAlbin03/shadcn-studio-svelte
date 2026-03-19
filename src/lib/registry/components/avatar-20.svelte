<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';

	const avatars = [
		{
			src: '/img/avatars/03.webp',
			fallback: 'OS',
			name: 'Olivia Sparks'
		},
		{
			src: '/img/avatars/06.webp',
			fallback: 'HL',
			name: 'Howard Lloyd'
		},
		{
			src: '/img/avatars/05.webp',
			fallback: 'HR',
			name: 'Hallie Richards'
		},
		{
			src: '/img/avatars/16.webp',
			fallback: 'JW',
			name: 'Jenny Wilson'
		}
	];
</script>

<div class="flex items-center rounded-full border bg-background p-1 shadow-sm">
	<div class="flex -space-x-2">
		{#each avatars as avatar}
			<Avatar.Root class="ring-2 ring-background">
				<Avatar.Image src={avatar.src} alt={avatar.name} />
				<Avatar.Fallback class="text-xs">{avatar.fallback}</Avatar.Fallback>
			</Avatar.Root>
		{/each}
	</div>
	<span
		class="flex items-center justify-center rounded-full bg-transparent px-2 text-xs text-muted-foreground shadow-none hover:bg-transparent hover:text-foreground"
	>
		+3
	</span>
</div>
