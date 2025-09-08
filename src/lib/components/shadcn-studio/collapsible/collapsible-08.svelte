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
	import {
		Collapsible,
		CollapsibleContent,
		CollapsibleTrigger
	} from '$lib/components/ui/collapsible';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuGroup,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';
</script>

<DropdownMenu>
	<DropdownMenuTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Dropdown with collapsible</Button>
		{/snippet}
	</DropdownMenuTrigger>
	<DropdownMenuContent class="w-56">
		<DropdownMenuItem>
			<UserIcon />
			<span>Profile</span>
		</DropdownMenuItem>
		<Collapsible>
			{#snippet child({ props })}
				<DropdownMenuGroup {...props}>
					<CollapsibleTrigger>
						{#snippet child({ props })}
							<DropdownMenuItem
								{...props}
								onSelect={(event) => event.preventDefault()}
								class="justify-between"
							>
								<div class="flex items-center gap-2">
									<SettingsIcon />
									<span>Settings</span>
								</div>
								<ChevronRightIcon
									class="shrink-0 transition-transform [[data-state='open']>&]:rotate-90"
								/>
							</DropdownMenuItem>
						{/snippet}
					</CollapsibleTrigger>
					<CollapsibleContent class="pl-4">
						<DropdownMenuItem>
							<CircleSmallIcon />
							<span>Account</span>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<CircleSmallIcon />
							<span>Security</span>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<CircleSmallIcon />
							<span>Billing & plans</span>
						</DropdownMenuItem>
					</CollapsibleContent>
				</DropdownMenuGroup>
			{/snippet}
		</Collapsible>
		<Collapsible>
			{#snippet child({ props })}
				<DropdownMenuGroup {...props}>
					<CollapsibleTrigger>
						{#snippet child({ props })}
							<DropdownMenuItem
								{...props}
								onSelect={(event) => event.preventDefault()}
								class="justify-between"
							>
								<div class="flex items-center gap-2">
									<UsersIcon />
									<span>Users</span>
								</div>
								<ChevronRightIcon
									class="shrink-0 transition-transform [[data-state='open']>&]:rotate-90"
								/>
							</DropdownMenuItem>
						{/snippet}
					</CollapsibleTrigger>
					<CollapsibleContent class="pl-4">
						<DropdownMenuItem>
							<CircleSmallIcon />
							<span>Teams</span>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<CircleSmallIcon />
							<span>Projects</span>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<CircleSmallIcon />
							<span>Connections</span>
						</DropdownMenuItem>
					</CollapsibleContent>
				</DropdownMenuGroup>
			{/snippet}
		</Collapsible>
		<DropdownMenuItem>
			<LogOutIcon />
			<span>Log out</span>
		</DropdownMenuItem>
	</DropdownMenuContent>
</DropdownMenu>
