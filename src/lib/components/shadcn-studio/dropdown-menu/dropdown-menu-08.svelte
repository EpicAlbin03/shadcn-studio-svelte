<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
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
			<Button {...props} variant="outline">User Profile</Button>
		{/snippet}
	</DropdownMenuTrigger>
	<DropdownMenuContent class="w-56">
		<DropdownMenuLabel class="flex items-center gap-2">
			<Avatar>
				<AvatarImage src="/avatars/01.webp" alt="Phillip George" />
				<AvatarFallback class="text-xs">PG</AvatarFallback>
			</Avatar>
			<div class="flex flex-1 flex-col">
				<span class="text-popover-foreground">Phillip George</span>
				<span class="text-xs text-muted-foreground">phillip@example.com</span>
			</div>
		</DropdownMenuLabel>
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
