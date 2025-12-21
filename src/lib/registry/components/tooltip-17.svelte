<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import * as GlobalTooltip from '$lib/registry/ui/global-tooltip';

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
		<GlobalTooltip.Provider>
			{#each avatars as avatar}
				<GlobalTooltip.Root>
					<GlobalTooltip.Trigger>
						<Avatar.Root
							class="size-10 ring-2 ring-background transition-all duration-300 ease-in-out hover:z-1 hover:scale-105"
						>
							<Avatar.Image src={avatar.src} alt={avatar.name} />
							<Avatar.Fallback class="text-xs">{avatar.fallback}</Avatar.Fallback>
						</Avatar.Root>
					</GlobalTooltip.Trigger>
					<GlobalTooltip.Content>{avatar.name}</GlobalTooltip.Content>
				</GlobalTooltip.Root>
			{/each}
		</GlobalTooltip.Provider>
	</div>
	<p class="text-xs text-muted-foreground">
		Inspired by
		<a
			class="underline hover:text-foreground"
			href="https://animate-ui.com/docs/components/tooltip"
			target="_blank"
			rel="noopener noreferrer"
		>
			Animate UI
		</a>
	</p>
</div>
