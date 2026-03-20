<script lang="ts">
	import CircleHelpIcon from '@lucide/svelte/icons/circle-help';
	import DollarSignIcon from '@lucide/svelte/icons/dollar-sign';
	import ReceiptIcon from '@lucide/svelte/icons/receipt';
	import SettingsIcon from '@lucide/svelte/icons/settings';
	import UserIcon from '@lucide/svelte/icons/user';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Menu item with icon</Button>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56">
		<DropdownMenu.Label>UserIcon Profile</DropdownMenu.Label>
		<DropdownMenu.Group>
			<DropdownMenu.Item>
				<UserIcon />
				Profile
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				<SettingsIcon />
				SettingsIcon
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				<ReceiptIcon />
				Billing Plans
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				<DollarSignIcon />
				Pricing
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				<CircleHelpIcon />
				FAQ
			</DropdownMenu.Item>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
