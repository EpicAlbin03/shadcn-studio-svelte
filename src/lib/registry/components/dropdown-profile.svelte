<script lang="ts">
	import {
		UserIcon,
		SettingsIcon,
		CreditCardIcon,
		UsersIcon,
		SquarePenIcon,
		CirclePlusIcon,
		LogOutIcon
	} from '@lucide/svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Button } from '$lib/components/ui/button';

	type Props = {
		open?: boolean;
		align?: 'start' | 'center' | 'end';
	};

	let { open = $bindable(), align = 'end' }: Props = $props();
</script>

<DropdownMenu.Root {open}>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="ghost" size="icon" class="size-9.5">
				<Avatar.Root class="size-9.5 rounded-md">
					<Avatar.Image src="/avatars/01.webp" />
					<Avatar.Fallback>JD</Avatar.Fallback>
				</Avatar.Root>
			</Button>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align={align || 'end'}>
		<DropdownMenu.Label class="flex items-center gap-4 font-normal">
			<div class="relative">
				<Avatar.Root class="size-9">
					<Avatar.Image src="/avatars/01.webp" alt="John Doe" />
					<Avatar.Fallback>JD</Avatar.Fallback>
				</Avatar.Root>
				<span
					class="absolute right-0 bottom-0 block size-2 rounded-full bg-green-600 ring-2 ring-card"
				></span>
			</div>
			<div class="flex flex-1 flex-col items-start">
				<span class="text-base font-semibold text-foreground">John Doe</span>
				<span class="text-sm text-muted-foreground">john.doe@example.com</span>
			</div>
		</DropdownMenu.Label>

		<DropdownMenu.Separator />

		<DropdownMenu.Group>
			<DropdownMenu.Item class="text-base">
				<UserIcon class="text-foreground" />
				<span>My account</span>
			</DropdownMenu.Item>
			<DropdownMenu.Item class="text-base">
				<SettingsIcon class="text-foreground" />
				<span>Settings</span>
			</DropdownMenu.Item>
			<DropdownMenu.Item class="text-base">
				<CreditCardIcon class="text-foreground" />
				<span>Billing</span>
			</DropdownMenu.Item>
		</DropdownMenu.Group>

		<DropdownMenu.Separator />

		<DropdownMenu.Group>
			<DropdownMenu.Item class="text-base">
				<UsersIcon class="text-foreground" />
				<span>Manage team</span>
			</DropdownMenu.Item>
			<DropdownMenu.Item class="text-base">
				<SquarePenIcon class="text-foreground" />
				<span>Customization</span>
			</DropdownMenu.Item>
			<DropdownMenu.Item class="text-base">
				<CirclePlusIcon class="text-foreground" />
				<span>Add team account</span>
			</DropdownMenu.Item>
		</DropdownMenu.Group>

		<DropdownMenu.Separator />

		<DropdownMenu.Item variant="destructive" class="text-base">
			<LogOutIcon />
			<span>Logout</span>
		</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
