<script lang="ts">
	import UnderConstruction from '$lib/components/UnderConstruction.svelte';

	const message =
		'Motion components will be available soon*. It is currently not possible to spread props on motion elements.';
</script>

<UnderConstruction {message} />

<!-- <script lang="ts">
	import * as Avatar from "$lib/components/ui/avatar/index.js";
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
				<Tooltip.Root>
					<Tooltip.Trigger>
						<Avatar
							class="size-10 ring-2 ring-background transition-all duration-300 ease-in-out hover:z-1 hover:scale-105"
						>
							<Avatar.Image src={avatar.src} alt={avatar.name} />
							<Avatar.Fallback class="text-xs">{avatar.fallback}</Avatar.Fallback>
						</Avatar.Root>
					</Tooltip.Trigger>
					<Tooltip.Content>{avatar.name}</Tooltip.Content>
				</Tooltip.Root>
			{/each}
		</TooltipProvider>
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
</div> -->
