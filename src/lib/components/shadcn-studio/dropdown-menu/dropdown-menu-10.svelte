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

<DropdownMenu>
	<DropdownMenuTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Align End</Button>
		{/snippet}
	</DropdownMenuTrigger>
	<DropdownMenuContent align="end" class="w-66">
		<DropdownMenuGroup>
			<DropdownMenuItem>
				New Tab<DropdownMenuShortcut>⌘ + T</DropdownMenuShortcut>
			</DropdownMenuItem>
			<DropdownMenuItem>
				New Window <DropdownMenuShortcut>⌘ + N</DropdownMenuShortcut>
			</DropdownMenuItem>
			<DropdownMenuSeparator />
			<DropdownMenuItem>
				New Incognito Window <DropdownMenuShortcut>⌘ + ⇧ + N</DropdownMenuShortcut>
			</DropdownMenuItem>
			<DropdownMenuItem>
				History <DropdownMenuShortcut>⌘ + Y</DropdownMenuShortcut>
			</DropdownMenuItem>
			<DropdownMenuItem>
				Downloads <DropdownMenuShortcut>⌥ + ⇧ + L</DropdownMenuShortcut>
			</DropdownMenuItem>
		</DropdownMenuGroup>
	</DropdownMenuContent>
</DropdownMenu>
