<script lang="ts">
	import { Check } from '@lucide/svelte';
	import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuLabel,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';

	const users = [
		{
			id: 1,
			src: '/avatars/01.webp',
			fallback: 'PG',
			name: 'Phillip George',
			mail: 'phillip12@gmail.com'
		},
		{
			id: 2,
			src: '/avatars/02.webp',
			fallback: 'JD',
			name: 'Jaylon Donin',
			mail: 'jaylo-don@yahoo.com'
		},
		{
			id: 3,
			src: '/avatars/03.webp',
			fallback: 'TC',
			name: 'Tiana Curtis',
			mail: 'Tiana_curtis@gmail.com'
		}
	];

	let selectUser = $state(users[0]);
</script>

<DropdownMenu>
	<DropdownMenuTrigger class="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2.5">
		<Avatar>
			<AvatarImage src={selectUser.src} alt={selectUser.name} />
			<AvatarFallback class="text-xs">{selectUser.fallback}</AvatarFallback>
		</Avatar>
		<div class="flex flex-col gap-1 text-start leading-none">
			<span class="max-w-[17ch] truncate text-sm leading-none font-semibold">{selectUser.name}</span
			>
			<span class="max-w-[20ch] truncate text-xs text-muted-foreground">{selectUser.mail}</span>
		</div>
	</DropdownMenuTrigger>
	<DropdownMenuContent align="start" class="w-66">
		<DropdownMenuLabel>Task Assignment</DropdownMenuLabel>
		{#each users as user (user.id)}
			<DropdownMenuItem onclick={() => (selectUser = user)}>
				<div class="flex items-center gap-2">
					<Avatar>
						<AvatarImage src={user.src} alt={user.name} />
						<AvatarFallback class="text-xs">{user.fallback}</AvatarFallback>
					</Avatar>
					<div class="flex flex-col gap-1 text-start leading-none">
						<span class="max-w-[17ch] truncate text-sm leading-none font-semibold">{user.name}</span
						>
						<span class="max-w-[20ch] truncate text-xs text-muted-foreground">{user.mail}</span>
					</div>
				</div>
				{#if selectUser.id === user.id}
					<Check class="ml-auto" />
				{/if}
			</DropdownMenuItem>
		{/each}
	</DropdownMenuContent>
</DropdownMenu>
