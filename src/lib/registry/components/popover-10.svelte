<script lang="ts">
	import { LoaderCircleIcon, SearchIcon } from '@lucide/svelte';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { Debounced } from 'runed';

	const users = [
		{
			image: '/avatars/03.webp',
			name: 'Howard Lloyd',
			fallback: 'HL',
			notifications: 3
		},
		{
			image: '/avatars/06.webp',
			name: 'Olivia Sparks',
			fallback: 'OS'
		},
		{
			image: '/avatars/05.webp',
			name: 'Hallie Richards',
			fallback: 'HR',
			notifications: 1
		}
	];

	let inputValue = $state('');
	let isLoading = $state(false);
	const debouncedSearch = new Debounced(() => inputValue, 300);
	let filteredUsers = $state(users);

	$effect(() => {
		if (inputValue) {
			isLoading = true;
		} else {
			isLoading = false;
		}
	});

	$effect(() => {
		if (debouncedSearch.current.trim() === '') {
			filteredUsers = users;
			isLoading = false;
		} else {
			const searchTerm = debouncedSearch.current.toLowerCase();
			const filtered = users.filter((user) => user.name.toLowerCase().includes(searchTerm));
			filteredUsers = filtered;
			isLoading = false;
		}
	});
</script>

<Popover.Root>
	<Popover.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="icon">
				<SearchIcon />
				<span class="sr-only">Search users</span>
			</Button>
		{/snippet}
	</Popover.Trigger>
	<Popover.Content class="w-80">
		<div class="grid gap-4">
			<div class="relative">
				<div
					class="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground peer-disabled:opacity-50"
				>
					<SearchIcon class="size-4" />
					<span class="sr-only">Search</span>
				</div>
				<Input
					type="search"
					placeholder="Search users"
					bind:value={inputValue}
					class="peer px-9 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none"
				/>
				{#if isLoading}
					<div
						class="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground peer-disabled:opacity-50"
					>
						<LoaderCircleIcon class="size-4 animate-spin" />
						<span class="sr-only">Loading...</span>
					</div>
				{/if}
			</div>
			<ul class="space-y-2">
				{#if filteredUsers.length > 0}
					{#each filteredUsers as user}
						<li class="flex items-center gap-2">
							<Avatar.Root class="size-6">
								<Avatar.Image src={user.image} alt={user.name} />
								<Avatar.Fallback class="text-xs">{user.fallback}</Avatar.Fallback>
							</Avatar.Root>
							<div class="flex-1 text-sm font-medium">{user.name}</div>
							{#if user.notifications}
								<span class="text-xs text-muted-foreground">
									{user.notifications} Notification{user.notifications > 1 ? 's' : ''}
								</span>
							{/if}
						</li>
					{/each}
				{:else}
					<li class="py-2 text-center text-sm">No users found</li>
				{/if}
			</ul>
		</div>
	</Popover.Content>
</Popover.Root>
