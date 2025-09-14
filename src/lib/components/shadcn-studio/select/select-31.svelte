<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Label } from '$lib/components/ui/label';
	import {
		Select,
		SelectContent,
		SelectGroup,
		SelectItem,
		SelectTrigger
	} from '$lib/components/ui/select';

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
	<Select type="single" bind:value>
		<SelectTrigger
			{id}
			class="w-full [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0 [&>span_svg]:text-muted-foreground/80"
		>
			<span class="flex items-center gap-2">
				<Avatar class="size-5">
					<AvatarImage src={selectedUser.src} alt={selectedUser.name} class="rounded-full" />
					<AvatarFallback class="text-xs">{selectedUser.fallback}</AvatarFallback>
				</Avatar>
				<span class="truncate">{selectedUser.name}</span>
			</span>
		</SelectTrigger>
		<SelectContent
			class="max-h-100 [&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]>span>svg]:shrink-0 [&_*[role=option]>span>svg]:text-muted-foreground/80"
		>
			<SelectGroup>
				{#each users as user (user.id)}
					<SelectItem value={user.id} label={user.name}>
						<Avatar class="size-5">
							<AvatarImage src={user.src} alt={user.name} class="rounded-full" />
							<AvatarFallback class="text-xs">{user.fallback}</AvatarFallback>
						</Avatar>
						<span class="truncate">{user.name}</span>
					</SelectItem>
				{/each}
			</SelectGroup>
		</SelectContent>
	</Select>
</div>
