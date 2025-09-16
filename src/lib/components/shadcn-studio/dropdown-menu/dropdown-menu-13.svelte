<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';

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
		<DropdownMenu.Label>Appearance</DropdownMenu.Label>
		<DropdownMenu.Separator />
		<DropdownMenu.CheckboxItem bind:checked={showStatusBar}>Status Bar</DropdownMenu.CheckboxItem>
		<DropdownMenu.CheckboxItem bind:checked={showActivityBar} disabled>
			API
		</DropdownMenu.CheckboxItem>
		<DropdownMenu.CheckboxItem bind:checked={showPanel}>Invite users</DropdownMenu.CheckboxItem>
	</DropdownMenu.Content>
</DropdownMenu.Root>
