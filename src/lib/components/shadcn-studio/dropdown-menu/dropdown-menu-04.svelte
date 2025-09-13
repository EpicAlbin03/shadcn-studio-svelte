<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
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

<DropdownMenu>
	<DropdownMenuTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Menu item with action</Button>
		{/snippet}
	</DropdownMenuTrigger>
	<DropdownMenuContent class="w-91">
		<DropdownMenuLabel>Contact List</DropdownMenuLabel>
		<DropdownMenuGroup>
			{#each listItems as item}
				<DropdownMenuItem class="justify-between">
					<Avatar>
						<AvatarImage src={item.src} alt={item.name} />
						<AvatarFallback class="text-xs">{item.fallback}</AvatarFallback>
					</Avatar>
					<div class="flex flex-1 flex-col">
						<span class="text-popover-foreground">{item.name}</span>
						<span class="text-xs text-muted-foreground">{item.mail}</span>
					</div>
					<Button variant="secondary" class="h-7 cursor-pointer rounded-md px-2">Send</Button>
				</DropdownMenuItem>
			{/each}
			<DropdownMenuItem>
				<Button class="grow">Add Contact</Button>
			</DropdownMenuItem>
		</DropdownMenuGroup>
	</DropdownMenuContent>
</DropdownMenu>
