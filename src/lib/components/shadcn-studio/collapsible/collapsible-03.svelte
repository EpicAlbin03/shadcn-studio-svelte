<script lang="ts">
	import { ChevronUpIcon } from '@lucide/svelte';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Button } from '$lib/components/ui/button';
	import * as Collapsible from '$lib/components/ui/collapsible/index.js';

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

<Collapsible.Root class="flex w-full max-w-[350px] flex-col items-start gap-4">
	<div class="font-medium">Today's task completion</div>
	<ul class="flex w-full flex-col gap-2">
		{#each tasks.slice(0, 2) as task (task.name)}
			<li class="flex items-start gap-4">
				<Avatar.Root>
					<Avatar.Image src={task.image} alt={task.name} />
					<Avatar.Fallback>{task.fallback}</Avatar.Fallback>
				</Avatar.Root>
				<div class="flex flex-1 flex-col">
					<div class="text-sm font-medium">{task.name}</div>
					<p class="text-xs text-muted-foreground">{task.designation}</p>
				</div>
				<span class="text-sm text-muted-foreground">{task.percentage}%</span>
			</li>
		{/each}
		<Collapsible.Content class="flex flex-col gap-2">
			{#each tasks.slice(0, 2) as task (task.name)}
				<li class="flex items-start gap-4">
					<Avatar.Root>
						<Avatar.Image src={task.image} alt={task.name} />
						<Avatar.Fallback>{task.fallback}</Avatar.Fallback>
					</Avatar.Root>
					<div class="flex flex-1 flex-col">
						<div class="text-sm font-medium">{task.name}</div>
						<p class="text-xs text-muted-foreground">{task.designation}</p>
					</div>
					<span class="text-sm text-muted-foreground">{task.percentage}%</span>
				</li>
			{/each}
		</Collapsible.Content>
	</ul>
	<Collapsible.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="sm">
				<span class="[[data-state=open]>&]:hidden">Show more</span>
				<span class="[[data-state=closed]>&]:hidden">Show less</span>
				<ChevronUpIcon class="[[data-state=closed]>&]:rotate-180" />
			</Button>
		{/snippet}
	</Collapsible.Trigger>
</Collapsible.Root>
