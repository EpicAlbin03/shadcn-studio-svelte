<script lang="ts">
	import { CheckIcon, ChevronsUpDownIcon } from '@lucide/svelte';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import {
		Command,
		CommandEmpty,
		CommandGroup,
		CommandInput,
		CommandItem,
		CommandList
	} from '$lib/components/ui/command';
	import { Label } from '$lib/components/ui/label';
	import { Popover, PopoverContent, PopoverTrigger } from '$lib/components/ui/popover';
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
	<Popover bind:open>
		<PopoverTrigger bind:ref={triggerRef}>
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
							<Avatar class="size-6">
								<AvatarImage src={selectedUser.avatar} alt={selectedUser.name} />
								<AvatarFallback>{selectedUser.name[0]}</AvatarFallback>
							</Avatar>
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
		</PopoverTrigger>
		<PopoverContent class="w-[300px] p-0">
			<Command>
				<CommandInput placeholder="Search user..." />
				<CommandList>
					<CommandEmpty>No users found.</CommandEmpty>
					<CommandGroup>
						{#each users as user (user.name)}
							<CommandItem
								value={user.name}
								onSelect={() => {
									value = user.name;
									closeAndFocusTrigger();
								}}
							>
								<span class="flex items-center gap-2">
									<Avatar class="size-7">
										<AvatarImage src={user.avatar} alt={user.name} />
										<AvatarFallback>{user.name[0]}</AvatarFallback>
									</Avatar>
									<span class="flex flex-col">
										<span class="font-medium">{user.name}</span>
										<span class="text-sm text-muted-foreground">{user.email}</span>
									</span>
								</span>
								{#if value === user.name}
									<CheckIcon size={16} class="ml-auto" />
								{/if}
							</CommandItem>
						{/each}
					</CommandGroup>
				</CommandList>
			</Command>
		</PopoverContent>
	</Popover>
</div>
