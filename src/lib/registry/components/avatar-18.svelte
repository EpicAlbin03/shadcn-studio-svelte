<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';

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
		<Tooltip.Root>
			<Tooltip.Trigger>
				{#snippet child({ props })}
					<Avatar.Root
						{...props}
						class="ring-2 ring-background transition-all duration-300 ease-in-out"
					>
						<Avatar.Image src={avatar.src} alt={avatar.name} />
						<Avatar.Fallback class="text-xs">{avatar.fallback}</Avatar.Fallback>
					</Avatar.Root>
				{/snippet}p
			</Tooltip.Trigger>
			<Tooltip.Content>{avatar.name}</Tooltip.Content>
		</Tooltip.Root>
	{/each}
</div>
