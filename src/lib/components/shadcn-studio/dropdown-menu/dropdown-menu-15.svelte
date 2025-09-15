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

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Slide Left Animation</Button>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenuContent
		align="start"
		class="w-56 duration-400 data-[state=closed]:slide-out-to-left-20 data-[state=closed]:zoom-out-100 data-[state=open]:slide-in-from-left-20 data-[state=open]:zoom-in-100"
	>
		<DropdownMenuLabel>Settings</DropdownMenuLabel>
		<DropdownMenuGroup>
			<DropdownMenu.Item>My Profile</DropdownMenu.Item>
			<DropdownMenu.Item>Settings</DropdownMenu.Item>
			<DropdownMenu.Item>Billing</DropdownMenu.Item>
			<DropdownMenu.Item>FAQs</DropdownMenu.Item>
		</DropdownMenuGroup>
		<DropdownMenuSeparator />
		<DropdownMenuLabel>Contact</DropdownMenuLabel>
		<DropdownMenuGroup>
			<DropdownMenu.Item>Call Support</DropdownMenu.Item>
			<DropdownMenu.Item>Chat with us</DropdownMenu.Item>
		</DropdownMenuGroup>
	</DropdownMenuContent>
</DropdownMenu.Root>
