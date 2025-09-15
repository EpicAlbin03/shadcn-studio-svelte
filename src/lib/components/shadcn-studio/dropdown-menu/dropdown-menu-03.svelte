<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuGroup,
		DropdownMenuItem,
		DropdownMenuLabel,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';

	const listItems = [
		{
			src: '/avatars/01.webp',
			fallback: 'PG',
			name: 'Phillip George',
			message: 'Hii samira, thanks for the...',
			time: '9:00AM',
			newMessages: 1
		},
		{
			src: '/avatars/02.webp',
			fallback: 'JD',
			name: 'Jaylon Donin',
			message: "I'll send the texts and...",
			time: '10:00PM',
			newMessages: 3
		},
		{
			src: '/avatars/03.webp',
			fallback: 'TC',
			name: 'Tiana Curtis',
			message: "That's Great!",
			time: '8:30AM',
			newMessages: null
		},
		{
			src: '/avatars/04.webp',
			fallback: 'ZV',
			name: 'Zaire Vetrovs',
			message: 'https://www.youtub...',
			time: '5:50AM',
			newMessages: 2
		},
		{
			src: '/avatars/05.webp',
			fallback: 'KP',
			name: 'Kianna Philips',
			message: 'Okay, It was awesome.',
			time: '6.45PM',
			newMessages: null
		}
	];
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Menu item with avatar</Button>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-91">
		<DropdownMenuLabel>Chat List</DropdownMenuLabel>
		<DropdownMenuGroup>
			{#each listItems as item}
				<DropdownMenuItem class="justify-between">
					<Avatar.Root>
						<Avatar.Image src={item.src} alt={item.name} />
						<Avatar.Fallback class="text-xs">{item.fallback}</Avatar.Fallback>
					</Avatar.Root>
					<div class="flex flex-1 flex-col">
						<span class="text-popover-foreground">{item.name}</span>
						<span class="text-xs text-muted-foreground">{item.message}</span>
					</div>
					{#if item.newMessages}
						<div class="flex flex-col items-end gap-1">
							<span class="text-xs text-muted-foreground">{item.time}</span>
							<Badge class="h-5 min-w-5 rounded-full bg-green-600 px-1 dark:bg-green-400">
								{item.newMessages}
							</Badge>
						</div>
					{:else}
						<span class="text-xs text-muted-foreground">{item.time}</span>
					{/if}
				</DropdownMenu.Item>
			{/each}
		</DropdownMenuGroup>
	</DropdownMenuContent>
</DropdownMenu.Root>
