<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import {
		DropdownMenu,
		DropdownMenuCheckboxItem,
		DropdownMenuContent,
		DropdownMenuLabel,
		DropdownMenuSeparator,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';

	let showStatusBar = $state(true);
	let showActivityBar = $state(false);
	let showPanel = $state(false);
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">With checkbox</Button>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56">
		<DropdownMenuLabel>Appearance</DropdownMenuLabel>
		<DropdownMenuSeparator />
		<DropdownMenuCheckboxItem bind:checked={showStatusBar}>Status Bar</DropdownMenuCheckboxItem>
		<DropdownMenuCheckboxItem bind:checked={showActivityBar} disabled>API</DropdownMenuCheckboxItem>
		<DropdownMenuCheckboxItem bind:checked={showPanel}>Invite users</DropdownMenuCheckboxItem>
	</DropdownMenuContent>
</DropdownMenu.Root>
