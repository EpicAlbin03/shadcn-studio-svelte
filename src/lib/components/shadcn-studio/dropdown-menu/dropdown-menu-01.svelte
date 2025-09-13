<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuGroup,
		DropdownMenuItem,
		DropdownMenuLabel,
		DropdownMenuSeparator,
		DropdownMenuSub,
		DropdownMenuSubContent,
		DropdownMenuSubTrigger,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';
</script>

<DropdownMenu>
	<DropdownMenuTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Basic</Button>
		{/snippet}
	</DropdownMenuTrigger>
	<DropdownMenuContent class="w-56">
		<DropdownMenuLabel>My Account</DropdownMenuLabel>
		<DropdownMenuSeparator />
		<DropdownMenuGroup>
			<DropdownMenuItem>Profile</DropdownMenuItem>
			<DropdownMenuItem>Billing</DropdownMenuItem>
		</DropdownMenuGroup>
		<DropdownMenuSeparator />
		<DropdownMenuGroup>
			<DropdownMenuSub>
				<DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
				<DropdownMenuSubContent>
					<DropdownMenuItem>Email</DropdownMenuItem>
					<DropdownMenuItem>Message</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>More...</DropdownMenuItem>
				</DropdownMenuSubContent>
			</DropdownMenuSub>
			<DropdownMenuItem>GitHub</DropdownMenuItem>
			<DropdownMenuItem>Support</DropdownMenuItem>
			<DropdownMenuItem disabled>API</DropdownMenuItem>
		</DropdownMenuGroup>
	</DropdownMenuContent>
</DropdownMenu>
