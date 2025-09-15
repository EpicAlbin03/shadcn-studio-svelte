<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuSeparator,
		DropdownMenuShortcut,
		DropdownMenuGroup,
		DropdownMenuItem,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Align End</Button>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end" class="w-66">
		<DropdownMenuGroup>
			<DropdownMenu.Item>
				New Tab<DropdownMenuShortcut>⌘ + T</DropdownMenuShortcut>
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				New Window <DropdownMenuShortcut>⌘ + N</DropdownMenuShortcut>
			</DropdownMenu.Item>
			<DropdownMenuSeparator />
			<DropdownMenu.Item>
				New Incognito Window <DropdownMenuShortcut>⌘ + ⇧ + N</DropdownMenuShortcut>
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				History <DropdownMenuShortcut>⌘ + Y</DropdownMenuShortcut>
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				Downloads <DropdownMenuShortcut>⌥ + ⇧ + L</DropdownMenuShortcut>
			</DropdownMenu.Item>
		</DropdownMenuGroup>
	</DropdownMenuContent>
</DropdownMenu.Root>
