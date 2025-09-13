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

<DropdownMenu>
	<DropdownMenuTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Menu item with icon</Button>
		{/snippet}
	</DropdownMenuTrigger>
	<DropdownMenuContent class="w-56">
		<DropdownMenuLabel>User Profile</DropdownMenuLabel>
		<DropdownMenuGroup>
			<DropdownMenuItem>
				<User />
				Profile
			</DropdownMenuItem>
			<DropdownMenuItem>
				<Settings />
				Settings
			</DropdownMenuItem>
			<DropdownMenuItem>
				<Receipt />
				Billing Plans
			</DropdownMenuItem>
			<DropdownMenuItem>
				<DollarSign />
				Pricing
			</DropdownMenuItem>
			<DropdownMenuItem>
				<CircleHelp />
				FAQ
			</DropdownMenuItem>
		</DropdownMenuGroup>
	</DropdownMenuContent>
</DropdownMenu>
