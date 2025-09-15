<script lang="ts">
	import { PencilLine, Upload, Trash2 } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuSeparator,
		DropdownMenuGroup,
		DropdownMenuItem,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Align Start</Button>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="start" class="w-34">
		<DropdownMenuGroup>
			<DropdownMenu.Item>
				<PencilLine />
				Edit
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				<Upload />
				Share
			</DropdownMenu.Item>
			<DropdownMenuSeparator />
			<DropdownMenuItem variant="destructive">
				<Trash2 />
				<span>Delete</span>
			</DropdownMenu.Item>
		</DropdownMenuGroup>
	</DropdownMenuContent>
</DropdownMenu.Root>
