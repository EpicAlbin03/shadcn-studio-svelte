<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Basic</Button>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56">
		<DropdownMenu.Label>My Account</DropdownMenu.Label>
		<DropdownMenu.Separator />
		<DropdownMenu.Group>
			<DropdownMenu.Item>Profile</DropdownMenu.Item>
			<DropdownMenu.Item>Billing</DropdownMenu.Item>
		</DropdownMenu.Group>
		<DropdownMenu.Separator />
		<DropdownMenu.Group>
			<DropdownMenu.Sub>
				<DropdownMenu.SubTrigger>Invite users</DropdownMenu.SubTrigger>
				<DropdownMenu.SubContent>
					<DropdownMenu.Item>Email</DropdownMenu.Item>
					<DropdownMenu.Item>Message</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>More...</DropdownMenu.Item>
				</DropdownMenu.SubContent>
			</DropdownMenu.Sub>
			<DropdownMenu.Item>GitHub</DropdownMenu.Item>
			<DropdownMenu.Item>Support</DropdownMenu.Item>
			<DropdownMenu.Item disabled>API</DropdownMenu.Item>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
