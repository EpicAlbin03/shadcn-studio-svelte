<script lang="ts">
	import { User, Settings, Bell, LogOut, CreditCard } from '@lucide/svelte';
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
			icon: User,
			property: 'Profile'
		},
		{
			icon: Settings,
			property: 'Settings'
		},
		{
			icon: CreditCard,
			property: 'Billing'
		},
		{
			icon: Bell,
			property: 'Notifications'
		},
		{
			icon: LogOut,
			property: 'Sign Out'
		}
	];
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="secondary" size="icon" class="overflow-hidden rounded-full">
				<img src="/avatars/05.webp" alt="Hallie Richards" />
			</Button>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56">
		<DropdownMenuLabel>My Account</DropdownMenuLabel>
		<DropdownMenuGroup>
			{#each listItems as item}
				<DropdownMenu.Item>
					<item.icon />
					<span class="text-popover-foreground">{item.property}</span>
				</DropdownMenu.Item>
			{/each}
		</DropdownMenuGroup>
	</DropdownMenuContent>
</DropdownMenu.Root>
