<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuGroup,
		DropdownMenuItem,
		DropdownMenuLabel,
		DropdownMenuTrigger,
		DropdownMenuSeparator
	} from '$lib/components/ui/dropdown-menu';
</script>

<DropdownMenu>
	<DropdownMenuTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Slide Left Animation</Button>
		{/snippet}
	</DropdownMenuTrigger>
	<DropdownMenuContent
		align="start"
		class="w-56 duration-400 data-[state=closed]:slide-out-to-left-20 data-[state=closed]:zoom-out-100 data-[state=open]:slide-in-from-left-20 data-[state=open]:zoom-in-100"
	>
		<DropdownMenuLabel>Settings</DropdownMenuLabel>
		<DropdownMenuGroup>
			<DropdownMenuItem>My Profile</DropdownMenuItem>
			<DropdownMenuItem>Settings</DropdownMenuItem>
			<DropdownMenuItem>Billing</DropdownMenuItem>
			<DropdownMenuItem>FAQs</DropdownMenuItem>
		</DropdownMenuGroup>
		<DropdownMenuSeparator />
		<DropdownMenuLabel>Contact</DropdownMenuLabel>
		<DropdownMenuGroup>
			<DropdownMenuItem>Call Support</DropdownMenuItem>
			<DropdownMenuItem>Chat with us</DropdownMenuItem>
		</DropdownMenuGroup>
	</DropdownMenuContent>
</DropdownMenu>
