<script lang="ts">
	import { CalendarIcon } from '@lucide/svelte';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import { HoverCard, HoverCardContent, HoverCardTrigger } from '$lib/components/ui/hover-card';
	import { Progress } from '$lib/components/ui/progress';

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
		}
	];
</script>

<HoverCard openDelay={0} closeDelay={0}>
	<HoverCardTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="link">Hover Card Project</Button>
		{/snippet}
	</HoverCardTrigger>
	<HoverCardContent>
		<div class="space-y-3">
			<div class="flex items-center justify-between gap-2 text-sm font-semibold">
				<span>Resume project completion</span>
				<span>25%</span>
			</div>
			<Progress value={25} />
			<p class="text-sm">Developing platform where ai will generate resume automatically Ai</p>
			<div class="flex items-center gap-2 text-xs text-muted-foreground">
				<CalendarIcon class="size-4" />
				<span>Started in December 2024</span>
			</div>
			<div class="flex -space-x-2">
				{#each avatars as avatar}
					<Avatar class="ring-2 ring-background">
						<AvatarImage src={avatar.src} alt={avatar.name} />
						<AvatarFallback class="text-xs">{avatar.fallback}</AvatarFallback>
					</Avatar>
				{/each}
				<Avatar class="ring-2 ring-background">
					<AvatarFallback class="text-xs">+6</AvatarFallback>
				</Avatar>
			</div>
		</div>
	</HoverCardContent>
</HoverCard>
