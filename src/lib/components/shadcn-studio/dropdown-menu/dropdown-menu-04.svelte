<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';

	const listItems = [
		{
			src: '/avatars/06.webp',
			fallback: 'AD',
			name: 'Angel Dorwart',
			mail: 'sbaker@hotmail.com'
		},
		{
			src: '/avatars/07.webp',
			fallback: 'SR',
			name: 'Skylar Rosser',
			mail: 'gbaker@yahoo.com'
		},
		{
			src: '/avatars/08.webp',
			fallback: 'DB',
			name: 'Dulce Botosh',
			mail: 'tlee@gmail.com'
		},
		{
			src: '/avatars/09.png',
			fallback: 'AS',
			name: 'Ahmad Stanton',
			mail: 'kdavis@hotmail.com'
		},
		{
			src: '/avatars/10.webp',
			fallback: 'RG',
			name: 'Randy Gouse',
			mail: 'ijackson@yahoo.com'
		}
	];
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Menu item with action</Button>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-91">
		<DropdownMenu.Label>Contact List</DropdownMenu.Label>
		<DropdownMenu.Group>
			{#each listItems as item}
				<DropdownMenu.Item class="justify-between">
					<Avatar.Root>
						<Avatar.Image src={item.src} alt={item.name} />
						<Avatar.Fallback class="text-xs">{item.fallback}</Avatar.Fallback>
					</Avatar.Root>
					<div class="flex flex-1 flex-col">
						<span class="text-popover-foreground">{item.name}</span>
						<span class="text-xs text-muted-foreground">{item.mail}</span>
					</div>
					<Button variant="secondary" class="h-7 cursor-pointer rounded-md px-2">Send</Button>
				</DropdownMenu.Item>
			{/each}
			<DropdownMenu.Item>
				<Button class="grow">Add Contact</Button>
			</DropdownMenu.Item>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
