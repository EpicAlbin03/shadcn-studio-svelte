<script lang="ts">
	import { BellIcon, CircleIcon } from '@lucide/svelte';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Button } from '$lib/components/ui/button';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { Separator } from '$lib/components/ui/separator';

	const notifications = [
		{
			id: 1,
			image: '/avatars/03.webp',
			message: 'Harry assigned you task of New API implementation',
			fallback: 'HL',
			time: '15 Minutes'
		},
		{
			id: 2,
			image: '/avatars/06.webp',
			message: 'Jerry joined team',
			fallback: 'OS',
			time: '35 Minutes'
		},
		{
			id: 3,
			image: '/avatars/05.webp',
			message: 'Congratulate ruby for married life',
			fallback: 'HR',
			time: '3 days'
		}
	];

	let readMessages = $state([3]);
</script>

<Popover.Root>
	<Popover.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="icon">
				<BellIcon />
				<span class="sr-only">Notifications</span>
			</Button>
		{/snippet}
	</Popover.Trigger>
	<Popover.Content class="w-80 p-0">
		<div class="grid">
			<div class="flex items-center justify-between gap-2 px-4 py-2.5">
				<span class="font-medium">Notifications</span>
				<Button
					variant="secondary"
					class="h-7 rounded-full px-2 py-1 text-xs"
					onclick={() => (readMessages = notifications.map((notification) => notification.id))}
				>
					Mark all as read
				</Button>
			</div>
			<Separator class="" />
			<ul class="grid gap-4 p-2">
				{#each notifications as notification (notification.id)}
					<li>
						<button
							class={'flex w-full items-start gap-2 rounded-lg px-2 py-1.5 text-left hover:bg-accent'}
							onclick={() => readMessages.push(notification.id)}
						>
							<Avatar.Root class="rounded-lg">
								<Avatar.Image src={notification.image} alt={notification.fallback} />
								<Avatar.Fallback class="rounded-lg text-xs">{notification.fallback}</Avatar.Fallback
								>
							</Avatar.Root>
							<div class="flex-1 space-y-1">
								<div class="text-sm font-medium">{notification.message}</div>
								<p class="text-xs text-muted-foreground">{`${notification.time} ago`}</p>
							</div>
							{#if !readMessages.includes(notification.id)}
								<CircleIcon class="size-2 self-center fill-primary text-primary" />
							{/if}
						</button>
					</li>
				{/each}
			</ul>
		</div>
	</Popover.Content>
</Popover.Root>
