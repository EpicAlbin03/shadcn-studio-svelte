<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Label } from '$lib/components/ui/label';
	import * as Select from '$lib/components/ui/select/index.js';

	const users = [
		{
			id: '1',
			src: '/avatars/01.webp',
			fallback: 'PG',
			name: 'Phillip George'
		},
		{
			id: '2',
			src: '/avatars/02.webp',
			fallback: 'JD',
			name: 'Jaylon Donin'
		},
		{
			id: '3',
			src: '/avatars/03.webp',
			fallback: 'TC',
			name: 'Tiana Curtis'
		}
	];

	const id = $props.id();

	let value = $state('1');
	const selectedUser = $derived(users.find((f) => f.id === value) ?? users[0]);
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Options with flag</Label>
	<Select.Root type="single" bind:value>
		<Select.Trigger
			{id}
			class="w-full [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0 [&>span_svg]:text-muted-foreground/80"
		>
			<span class="flex items-center gap-2">
				<Avatar.Root class="size-5">
					<Avatar.Image src={selectedUser.src} alt={selectedUser.name} class="rounded-full" />
					<Avatar.Fallback class="text-xs">{selectedUser.fallback}</Avatar.Fallback>
				</Avatar.Root>
				<span class="truncate">{selectedUser.name}</span>
			</span>
		</Select.Trigger>
		<Select.Content
			class="max-h-100 [&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]>span>svg]:shrink-0 [&_*[role=option]>span>svg]:text-muted-foreground/80"
		>
			<Select.Group>
				{#each users as user (user.id)}
					<Select.Item value={user.id} label={user.name}>
						<Avatar.Root class="size-5">
							<Avatar.Image src={user.src} alt={user.name} class="rounded-full" />
							<Avatar.Fallback class="text-xs">{user.fallback}</Avatar.Fallback>
						</Avatar.Root>
						<span class="truncate">{user.name}</span>
					</Select.Item>
				{/each}
			</Select.Group>
		</Select.Content>
	</Select.Root>
</div>
