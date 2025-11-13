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

	type Props = {
		open?: boolean;
		align?: 'start' | 'center' | 'end';
	};

	let { open, align = 'end' }: Props = $props();
</script>

<DropdownMenu.Root {open}>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<button {...props} class="rounded-full">
				<Avatar.Root class="size-10 cursor-pointer">
					<Avatar.Image src="/avatars/01.webp" alt="John Doe" />
					<Avatar.Fallback>JD</Avatar.Fallback>
				</Avatar.Root>
			</button>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-80" align={align || 'end'}>
		<DropdownMenu.Label class="flex items-center gap-4 px-4 py-2.5 font-normal">
			<div class="relative">
				<Avatar.Root class="size-10">
					<Avatar.Image src="/avatars/01.webp" alt="John Doe" />
					<Avatar.Fallback>JD</Avatar.Fallback>
				</Avatar.Root>
				<span
					class="absolute right-0 bottom-0 block size-2 rounded-full bg-green-600 ring-2 ring-card"
				></span>
			</div>
			<div class="flex flex-1 flex-col items-start">
				<span class="text-lg font-semibold text-foreground">John Doe</span>
				<span class="text-base text-muted-foreground">john.doe$libexample.com</span>
			</div>
		</DropdownMenu.Label>

		<DropdownMenu.Separator />

		<DropdownMenu.Group>
			<DropdownMenu.Item class="px-4 py-2.5 text-base">
				<UserIcon class="size-5 text-foreground" />
				<span>My account</span>
			</DropdownMenu.Item>
			<DropdownMenu.Item class="px-4 py-2.5 text-base">
				<SettingsIcon class="size-5 text-foreground" />
				<span>Settings</span>
			</DropdownMenu.Item>
			<DropdownMenu.Item class="px-4 py-2.5 text-base">
				<CreditCardIcon class="size-5 text-foreground" />
				<span>Billing</span>
			</DropdownMenu.Item>
		</DropdownMenu.Group>

		<DropdownMenu.Separator />

		<DropdownMenu.Group>
			<DropdownMenu.Item class="px-4 py-2.5 text-base">
				<UsersIcon class="size-5 text-foreground" />
				<span>Manage team</span>
			</DropdownMenu.Item>
			<DropdownMenu.Item class="px-4 py-2.5 text-base">
				<SquarePenIcon class="size-5 text-foreground" />
				<span>Customization</span>
			</DropdownMenu.Item>
			<DropdownMenu.Item class="px-4 py-2.5 text-base">
				<CirclePlusIcon class="size-5 text-foreground" />
				<span>Add team account</span>
			</DropdownMenu.Item>
		</DropdownMenu.Group>

		<DropdownMenu.Separator />

		<DropdownMenu.Item variant="destructive" class="px-4 py-2.5 text-base">
			<LogOutIcon class="size-5" />
			<span>Logout</span>
		</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
