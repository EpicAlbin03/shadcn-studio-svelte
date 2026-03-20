<script lang="ts">
	import BellIcon from '@lucide/svelte/icons/bell';
	import CreditCardIcon from '@lucide/svelte/icons/credit-card';
	import LogOutIcon from '@lucide/svelte/icons/log-out';
	import SettingsIcon from '@lucide/svelte/icons/settings';
	import UserIcon from '@lucide/svelte/icons/user';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';

	const listItems = [
		{
			icon: UserIcon,
			property: 'Profile'
		},
		{
			icon: SettingsIcon,
			property: 'SettingsIcon'
		},
		{
			icon: CreditCardIcon,
			property: 'Billing'
		},
		{
			icon: BellIcon,
			property: 'Notifications'
		},
		{
			icon: LogOutIcon,
			property: 'Sign Out'
		}
	];
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="secondary" size="icon" class="overflow-hidden rounded-full">
				<img src="/img/avatars/05.webp" alt="Hallie Richards" />
			</Button>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56">
		<DropdownMenu.Label>My Account</DropdownMenu.Label>
		<DropdownMenu.Group>
			{#each listItems as item}
				<DropdownMenu.Item>
					<item.icon />
					<span class="text-popover-foreground">{item.property}</span>
				</DropdownMenu.Item>
			{/each}
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
