<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
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

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Meetings Schedule</Button>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="sm:w-124">
		<DropdownMenu.Label>Today's meetings</DropdownMenu.Label>
		<DropdownMenu.Group>
			<DropdownMenu.Item
				class="justify-between gap-3.5"
				onSelect={(event) => event.preventDefault()}
			>
				<span class="font-medium text-popover-foreground">08:30</span>
				<div class="flex flex-1 flex-col">
					<span class="text-popover-foreground">Daily Project Review</span>
					<span class="text-xs text-muted-foreground">Team organization</span>
				</div>
				<Avatar.Root class="max-sm:hidden">
					<Avatar.Image src="/avatars/11.png" alt="Hallie Richards" />
					<Avatar.Fallback class="text-xs">Angel</Avatar.Fallback>
				</Avatar.Root>
				<div class="flex items-center gap-2">
					<span class="text-sm text-popover-foreground">Privacy</span>
					<Switch id="airplane-mode" bind:checked={firstMeeting} />
				</div>
			</DropdownMenu.Item>
			<DropdownMenu.Item
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
						<Avatar.Root class="ring-2 ring-background">
							<Avatar.Image src={avatar.src} alt={avatar.name} />
							<Avatar.Fallback class="text-xs">{avatar.fallback}</Avatar.Fallback>
						</Avatar.Root>
					{/each}
				</div>
				<div class="flex items-center gap-2">
					<span class="text-sm text-popover-foreground">Privacy</span>
					<Switch id="airplane-mode" bind:checked={secondMeeting} />
				</div>
			</DropdownMenu.Item>
			<DropdownMenu.Item
				class="justify-between gap-3.5"
				onSelect={(event) => event.preventDefault()}
			>
				<span class="font-medium text-popover-foreground">11:45</span>
				<div class="flex flex-1 flex-col">
					<span class="text-popover-foreground">Project Status Update</span>
					<span class="text-xs text-muted-foreground">Progress Overview Update</span>
				</div>
				<Avatar.Root class="max-sm:hidden">
					<Avatar.Image src="/avatars/11.png" alt="Hallie Richards" />
					<Avatar.Fallback class="text-xs">Angel</Avatar.Fallback>
				</Avatar.Root>
				<div class="flex items-center gap-2">
					<span class="text-sm text-popover-foreground">Privacy</span>
					<Switch id="airplane-mode" bind:checked={thirdMeeting} />
				</div>
			</DropdownMenu.Item>
			<DropdownMenu.Item
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
						<Avatar.Root class="ring-2 ring-background">
							<Avatar.Image src={avatar.src} alt={avatar.name} />
							<Avatar.Fallback class="text-xs">{avatar.fallback}</Avatar.Fallback>
						</Avatar.Root>
					{/each}
				</div>
				<div class="flex items-center gap-2">
					<span class="text-sm text-popover-foreground">Privacy</span>
					<Switch id="airplane-mode" bind:checked={forthMeeting} />
				</div>
			</DropdownMenu.Item>
			<DropdownMenu.Item
				class="justify-between gap-3.5"
				onSelect={(event) => event.preventDefault()}
			>
				<span class="font-medium text-popover-foreground">10:50</span>
				<div class="flex flex-1 flex-col">
					<span class="text-popover-foreground">Stakeholder Feedback</span>
					<span class="text-xs text-muted-foreground">Feedback from Stakeholders</span>
				</div>
				<Avatar.Root class="max-sm:hidden">
					<Avatar.Image src="/avatars/14.png" alt="Hallie Richards" />
					<Avatar.Fallback class="text-xs">Angel</Avatar.Fallback>
				</Avatar.Root>
				<div class="flex items-center gap-2">
					<span class="text-sm text-popover-foreground">Privacy</span>
					<Switch id="airplane-mode" bind:checked={fifthMeeting} />
				</div>
			</DropdownMenu.Item>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
