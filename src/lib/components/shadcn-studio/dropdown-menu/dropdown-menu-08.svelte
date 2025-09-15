<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
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
			<Button {...props} variant="outline">User Profile</Button>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56">
		<DropdownMenuLabel class="flex items-center gap-2">
			<Avatar.Root>
				<Avatar.Image src="/avatars/01.webp" alt="Phillip George" />
				<Avatar.Fallback class="text-xs">PG</Avatar.Fallback>
			</Avatar.Root>
			<div class="flex flex-1 flex-col">
				<span class="text-popover-foreground">Phillip George</span>
				<span class="text-xs text-muted-foreground">phillip@example.com</span>
			</div>
		</DropdownMenuLabel>
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
