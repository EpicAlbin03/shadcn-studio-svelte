<script lang="ts">
	import {
		ChevronRightIcon,
		CircleSmallIcon,
		LogOutIcon,
		SettingsIcon,
		UserIcon,
		UsersIcon
	} from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Collapsible from '$lib/components/ui/collapsible/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Dropdown with collapsible</Button>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56">
		<DropdownMenu.Item>
			<UserIcon />
			<span>Profile</span>
		</DropdownMenu.Item>
		<Collapsible.Root>
			{#snippet child({ props })}
				<DropdownMenu.Group {...props}>
					<Collapsible.Trigger>
						{#snippet child({ props })}
							<DropdownMenu.Item
								{...props}
								onSelect={(event) => event.preventDefault()}
								class="justify-between"
							>
								<div class="flex items-center gap-2">
									<SettingsIcon />
									Settings
								</div>
								<ChevronRightIcon
									class="shrink-0 transition-transform [[data-state='open']>&]:rotate-90"
								/>
							</DropdownMenu.Item>
						{/snippet}
					</Collapsible.Trigger>
					<Collapsible.Content class="pl-4">
						<DropdownMenu.Item>
							<CircleSmallIcon />
							Account
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<CircleSmallIcon />
							Security
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<CircleSmallIcon />
							Billing & plans
						</DropdownMenu.Item>
					</Collapsible.Content>
				</DropdownMenu.Group>
			{/snippet}
		</Collapsible.Root>
		<Collapsible.Root>
			{#snippet child({ props })}
				<DropdownMenu.Group {...props}>
					<Collapsible.Trigger>
						{#snippet child({ props })}
							<DropdownMenu.Item
								{...props}
								onSelect={(event) => event.preventDefault()}
								class="justify-between"
							>
								<div class="flex items-center gap-2">
									<UsersIcon />
									Users
								</div>
								<ChevronRightIcon
									class="shrink-0 transition-transform [[data-state='open']>&]:rotate-90"
								/>
							</DropdownMenu.Item>
						{/snippet}
					</Collapsible.Trigger>
					<Collapsible.Content class="pl-4">
						<DropdownMenu.Item>
							<CircleSmallIcon />
							Teams
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<CircleSmallIcon />
							Projects
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<CircleSmallIcon />
							Connections
						</DropdownMenu.Item>
					</Collapsible.Content>
				</DropdownMenu.Group>
			{/snippet}
		</Collapsible.Root>
		<DropdownMenu.Item>
			<LogOutIcon />
			Log out
		</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
