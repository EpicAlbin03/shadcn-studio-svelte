<script lang="ts">
	import { CircleHelp, DollarSign, Receipt, Settings, User } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuGroup,
		DropdownMenuItem,
		DropdownMenuLabel,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Menu item with icon</Button>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56">
		<DropdownMenuLabel>User Profile</DropdownMenuLabel>
		<DropdownMenuGroup>
			<DropdownMenu.Item>
				<User />
				Profile
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				<Settings />
				Settings
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				<Receipt />
				Billing Plans
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				<DollarSign />
				Pricing
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				<CircleHelp />
				FAQ
			</DropdownMenu.Item>
		</DropdownMenuGroup>
	</DropdownMenuContent>
</DropdownMenu.Root>
