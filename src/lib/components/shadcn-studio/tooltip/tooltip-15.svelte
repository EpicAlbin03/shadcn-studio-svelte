<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Button } from '$lib/components/ui/button';
	import { HoverCard, HoverCardContent, HoverCardTrigger } from '$lib/components/ui/hover-card';

	const tasks = [
		{
			image: '/avatars/03.webp',
			fallback: 'HL',
			name: 'Howard Lloyd',
			designation: 'Product Manager',
			percentage: 90
		},
		{
			image: '/avatars/06.webp',
			fallback: 'OS',
			name: 'Olivia Sparks',
			designation: 'Software Engineer',
			percentage: 60
		},
		{
			image: '/avatars/05.webp',
			fallback: 'HR',
			name: 'Hallie Richards',
			designation: 'UI/UX Designer',
			percentage: 80
		},
		{
			image: '/avatars/16.webp',
			fallback: 'JW',
			name: 'Jenny Wilson',
			designation: 'Junior Developer',
			percentage: 15
		}
	];
</script>

<HoverCard openDelay={0} closeDelay={0}>
	<HoverCardTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="link">Hover Card Tasks</Button>
		{/snippet}
	</HoverCardTrigger>
	<HoverCardContent class="w-72">
		<div class="space-y-4">
			<p class="text-lg font-semibold">Today's task completion</p>
			<ul class="space-y-2.5">
				{#each tasks as task (task.name)}
					<li class="flex items-start gap-4">
						<Avatar.Root>
							<Avatar.Image src={task.image} alt={task.name} />
							<Avatar.Fallback>{task.fallback}</Avatar.Fallback>
						</Avatar.Root>
						<div class="flex flex-1 flex-col">
							<div class="text-sm font-medium">{task.name}</div>
							<p class="text-xs text-muted-foreground">{task.designation}</p>
						</div>
						<span class="text-sm text-muted-foreground">{`${task.percentage}%`}</span>
					</li>
				{/each}
			</ul>
		</div>
	</HoverCardContent>
</HoverCard>
