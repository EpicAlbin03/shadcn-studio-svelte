<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuGroup,
		DropdownMenuItem,
		DropdownMenuLabel,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';
	import { Switch } from '$lib/components/ui/switch';

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

	let firstMeeting = $state(false);
	let secondMeeting = $state(true);
	let thirdMeeting = $state(false);
	let forthMeeting = $state(true);
	let fifthMeeting = $state(false);
</script>

<DropdownMenu>
	<DropdownMenuTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Meetings Schedule</Button>
		{/snippet}
	</DropdownMenuTrigger>
	<DropdownMenuContent class="sm:w-124">
		<DropdownMenuLabel>Today's meetings</DropdownMenuLabel>
		<DropdownMenuGroup>
			<DropdownMenuItem
				class="justify-between gap-3.5"
				onSelect={(event) => event.preventDefault()}
			>
				<span class="font-medium text-popover-foreground">08:30</span>
				<div class="flex flex-1 flex-col">
					<span class="text-popover-foreground">Daily Project Review</span>
					<span class="text-xs text-muted-foreground">Team organization</span>
				</div>
				<Avatar class="max-sm:hidden">
					<AvatarImage src="/avatars/11.png" alt="Hallie Richards" />
					<AvatarFallback class="text-xs">Angel</AvatarFallback>
				</Avatar>
				<div class="flex items-center gap-2">
					<span class="text-sm text-popover-foreground">Privacy</span>
					<Switch id="airplane-mode" bind:checked={firstMeeting} />
				</div>
			</DropdownMenuItem>
			<DropdownMenuItem
				class="justify-between gap-3.5"
				onSelect={(event) => event.preventDefault()}
			>
				<span class="font-medium text-popover-foreground">09:00</span>
				<div class="flex flex-1 flex-col">
					<span class="text-popover-foreground">Sprint Surge</span>
					<span class="text-xs text-muted-foreground">Daily Boost for Agile Progress</span>
				</div>
				<div class="flex -space-x-3 max-sm:hidden">
					{#each avatars as avatar}
						<Avatar class="ring-2 ring-background">
							<AvatarImage src={avatar.src} alt={avatar.name} />
							<AvatarFallback class="text-xs">{avatar.fallback}</AvatarFallback>
						</Avatar>
					{/each}
				</div>
				<div class="flex items-center gap-2">
					<span class="text-sm text-popover-foreground">Privacy</span>
					<Switch id="airplane-mode" bind:checked={secondMeeting} />
				</div>
			</DropdownMenuItem>
			<DropdownMenuItem
				class="justify-between gap-3.5"
				onSelect={(event) => event.preventDefault()}
			>
				<span class="font-medium text-popover-foreground">11:45</span>
				<div class="flex flex-1 flex-col">
					<span class="text-popover-foreground">Project Status Update</span>
					<span class="text-xs text-muted-foreground">Progress Overview Update</span>
				</div>
				<Avatar class="max-sm:hidden">
					<AvatarImage src="/avatars/11.png" alt="Hallie Richards" />
					<AvatarFallback class="text-xs">Angel</AvatarFallback>
				</Avatar>
				<div class="flex items-center gap-2">
					<span class="text-sm text-popover-foreground">Privacy</span>
					<Switch id="airplane-mode" bind:checked={thirdMeeting} />
				</div>
			</DropdownMenuItem>
			<DropdownMenuItem
				class="justify-between gap-3.5"
				onSelect={(event) => event.preventDefault()}
			>
				<span class="font-medium text-popover-foreground">06:30</span>
				<div class="flex flex-1 flex-col">
					<span class="text-popover-foreground">Team Performance</span>
					<span class="text-xs text-muted-foreground">Team Metrics Evaluation</span>
				</div>
				<div class="flex -space-x-3 max-sm:hidden">
					{#each avatars as avatar}
						<Avatar class="ring-2 ring-background">
							<AvatarImage src={avatar.src} alt={avatar.name} />
							<AvatarFallback class="text-xs">{avatar.fallback}</AvatarFallback>
						</Avatar>
					{/each}
				</div>
				<div class="flex items-center gap-2">
					<span class="text-sm text-popover-foreground">Privacy</span>
					<Switch id="airplane-mode" bind:checked={forthMeeting} />
				</div>
			</DropdownMenuItem>
			<DropdownMenuItem
				class="justify-between gap-3.5"
				onSelect={(event) => event.preventDefault()}
			>
				<span class="font-medium text-popover-foreground">10:50</span>
				<div class="flex flex-1 flex-col">
					<span class="text-popover-foreground">Stakeholder Feedback</span>
					<span class="text-xs text-muted-foreground">Feedback from Stakeholders</span>
				</div>
				<Avatar class="max-sm:hidden">
					<AvatarImage src="/avatars/14.png" alt="Hallie Richards" />
					<AvatarFallback class="text-xs">Angel</AvatarFallback>
				</Avatar>
				<div class="flex items-center gap-2">
					<span class="text-sm text-popover-foreground">Privacy</span>
					<Switch id="airplane-mode" bind:checked={fifthMeeting} />
				</div>
			</DropdownMenuItem>
		</DropdownMenuGroup>
	</DropdownMenuContent>
</DropdownMenu>
