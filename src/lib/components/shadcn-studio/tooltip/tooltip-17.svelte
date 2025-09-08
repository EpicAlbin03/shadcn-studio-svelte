<!-- <script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import {
		Tooltip,
		TooltipContent,
		TooltipProvider,
		TooltipTrigger
	} from '$lib/components/ui/global-tooltip';

	const avatars = [
		{
			src: '/avatars/03.webp',
			fallback: 'HL',
			name: 'Howard Lloyd'
		},
		{
			src: '/avatars/06.webp',
			fallback: 'OS',
			name: 'Olivia Sparks'
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

<div class="space-y-4">
	<div class="flex -space-x-2">
		<TooltipProvider>
			{#each avatars as avatar}
				<Tooltip>
					<TooltipTrigger>
						<Avatar
							class="size-10 ring-2 ring-background transition-all duration-300 ease-in-out hover:z-1 hover:scale-105"
						>
							<AvatarImage src={avatar.src} alt={avatar.name} />
							<AvatarFallback class="text-xs">{avatar.fallback}</AvatarFallback>
						</Avatar>
					</TooltipTrigger>
					<TooltipContent>{avatar.name}</TooltipContent>
				</Tooltip>
			{/each}
		</TooltipProvider>
	</div>
	<p class="text-xs text-muted-foreground">
		Inspired by{' '}
		<a
			class="underline hover:text-foreground"
			href="https://animate-ui.com/docs/components/tooltip"
			target="_blank"
			rel="noopener noreferrer"
		>
			Animate UI
		</a>
	</p>
</div> -->
