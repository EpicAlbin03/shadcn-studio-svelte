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

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Basic</Button>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56">
		<DropdownMenuLabel>My Account</DropdownMenuLabel>
		<DropdownMenuSeparator />
		<DropdownMenuGroup>
			<DropdownMenu.Item>Profile</DropdownMenu.Item>
			<DropdownMenu.Item>Billing</DropdownMenu.Item>
		</DropdownMenuGroup>
		<DropdownMenuSeparator />
		<DropdownMenuGroup>
			<DropdownMenuSub>
				<DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
				<DropdownMenuSubContent>
					<DropdownMenu.Item>Email</DropdownMenu.Item>
					<DropdownMenu.Item>Message</DropdownMenu.Item>
					<DropdownMenuSeparator />
					<DropdownMenu.Item>More...</DropdownMenu.Item>
				</DropdownMenuSubContent>
			</DropdownMenuSub>
			<DropdownMenu.Item>GitHub</DropdownMenu.Item>
			<DropdownMenu.Item>Support</DropdownMenu.Item>
			<DropdownMenuItem disabled>API</DropdownMenu.Item>
		</DropdownMenuGroup>
	</DropdownMenuContent>
</DropdownMenu.Root>
