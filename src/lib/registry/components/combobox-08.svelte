<script lang="ts">
	import { CheckIcon, ChevronsUpDownIcon } from '@lucide/svelte';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Button } from '$lib/components/ui/button';
	import * as Command from '$lib/components/ui/command/index.js';
	import { Label } from '$lib/components/ui/label';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { tick } from 'svelte';

	const users = [
		{
			name: 'Phillip George',
			email: 'phillip12@gmail.com',
			avatar: '/avatars/01.webp',
			status: 'online'
		},
		{
			name: 'Jaylon Donin',
			email: 'jaylo-don@yahoo.com',
			avatar: '/avatars/02.webp',
			status: 'offline'
		},
		{
			name: 'Tiana Curtis',
			email: 'tiana_curtis@gmail.com',
			avatar: '/avatars/03.webp',
			status: 'away'
		},
		{
			name: 'Zaire Vetrovs',
			email: 'zaire.vetrovs@outlook.com',
			avatar: '/avatars/04.webp',
			status: 'online'
		},
		{
			name: 'Kianna Philips',
			email: 'kiannaphilips@gmail.com',
			avatar: '/avatars/05.webp',
			status: 'busy'
		},
		{
			name: 'John Doe',
			email: 'john2doe@icloud.com',
			avatar: '/avatars/06.webp',
			status: 'online'
		},
		{
			name: 'Rock Lee',
			email: 'rocklee@protonmail.com',
			avatar: '/avatars/07.webp',
			status: 'busy'
		},
		{
			name: 'Henry Potter',
			email: 'henry3potter@gmail.com',
			avatar: '/avatars/08.webp',
			status: 'online'
		}
	];

	const id = $props.id();

	let open = $state(false);
	let value = $state('');
	let triggerRef = $state<HTMLButtonElement>(null!);
	const selectedUser = $derived(users.find((user) => user.name === value));

	function closeAndFocusTrigger() {
		open = false;
		tick().then(() => {
			triggerRef.focus();
		});
	}
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>User combobox</Label>
	<Popover.Root bind:open>
		<Popover.Trigger bind:ref={triggerRef}>
			{#snippet child({ props })}
				<Button
					{...props}
					{id}
					variant="outline"
					role="combobox"
					aria-expanded={open}
					class="w-full justify-between"
				>
					{#if selectedUser}
						<span class="flex gap-2">
							<Avatar.Root class="size-6">
								<Avatar.Image src={selectedUser.avatar} alt={selectedUser.name} />
								<Avatar.Fallback>{selectedUser.name[0]}</Avatar.Fallback>
							</Avatar.Root>
							<span class="font-medium">{selectedUser.name}</span>
						</span>
					{:else}
						<span class="text-muted-foreground">Select user</span>
					{/if}
					<ChevronsUpDownIcon
						size={16}
						class="shrink-0 text-muted-foreground/80"
						aria-hidden="true"
					/>
				</Button>
			{/snippet}
		</Popover.Trigger>
		<Popover.Content class="w-[300px] p-0">
			<Command.Root>
				<Command.Input placeholder="Search user..." />
				<Command.List>
					<Command.Empty>No users found.</Command.Empty>
					<Command.Group>
						{#each users as user (user.name)}
							<Command.Item
								value={user.name}
								onSelect={() => {
									value = user.name;
									closeAndFocusTrigger();
								}}
							>
								<span class="flex items-center gap-2">
									<Avatar.Root class="size-7">
										<Avatar.Image src={user.avatar} alt={user.name} />
										<Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
									</Avatar.Root>
									<span class="flex flex-col">
										<span class="font-medium">{user.name}</span>
										<span class="text-sm text-muted-foreground">{user.email}</span>
									</span>
								</span>
								{#if value === user.name}
									<CheckIcon size={16} class="ml-auto" />
								{/if}
							</Command.Item>
						{/each}
					</Command.Group>
				</Command.List>
			</Command.Root>
		</Popover.Content>
	</Popover.Root>
</div>
