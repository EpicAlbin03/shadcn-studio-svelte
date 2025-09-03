<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';

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
		<Tooltip>
			<TooltipTrigger>
				{#snippet child({ props })}
					<Avatar
						{...props}
						class="ring-2 ring-background transition-all duration-300 ease-in-out hover:z-1 hover:-translate-y-1 hover:shadow-md"
					>
						<AvatarImage src={avatar.src} alt={avatar.name} />
						<AvatarFallback class="text-xs">{avatar.fallback}</AvatarFallback>
					</Avatar>
				{/snippet}
			</TooltipTrigger>
			<TooltipContent>{avatar.name}</TooltipContent>
		</Tooltip>
	{/each}
</div>
