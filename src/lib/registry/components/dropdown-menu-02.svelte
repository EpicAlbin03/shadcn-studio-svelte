<script lang="ts">
	import { Check } from '@lucide/svelte';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';

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

	let selectedUser = $state(users[0]);
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2.5">
		<Avatar.Root>
			<Avatar.Image src={selectedUser.src} alt={selectedUser.name} />
			<Avatar.Fallback class="text-xs">{selectedUser.fallback}</Avatar.Fallback>
		</Avatar.Root>
		<div class="flex flex-col gap-1 text-start leading-none">
			<span class="max-w-[17ch] truncate text-sm leading-none font-semibold"
				>{selectedUser.name}</span
			>
			<span class="max-w-[20ch] truncate text-xs text-muted-foreground">{selectedUser.mail}</span>
		</div>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="start" class="w-66">
		<DropdownMenu.Label>Task Assignment</DropdownMenu.Label>
		{#each users as user (user.id)}
			<DropdownMenu.Item onclick={() => (selectedUser = user)}>
				<div class="flex items-center gap-2">
					<Avatar.Root>
						<Avatar.Image src={user.src} alt={user.name} />
						<Avatar.Fallback class="text-xs">{user.fallback}</Avatar.Fallback>
					</Avatar.Root>
					<div class="flex flex-col gap-1 text-start leading-none">
						<span class="max-w-[17ch] truncate text-sm leading-none font-semibold">{user.name}</span
						>
						<span class="max-w-[20ch] truncate text-xs text-muted-foreground">{user.mail}</span>
					</div>
				</div>
				{#if selectedUser.id === user.id}
					<Check class="ml-auto" />
				{/if}
			</DropdownMenu.Item>
		{/each}
	</DropdownMenu.Content>
</DropdownMenu.Root>
