<script lang="ts">
	import PencilLineIcon from '@lucide/svelte/icons/pencil-line';
	import Trash2Icon from '@lucide/svelte/icons/trash2';
	import UploadIcon from '@lucide/svelte/icons/upload';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Align Start</Button>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="start" class="w-34">
		<DropdownMenu.Group>
			<DropdownMenu.Item>
				<PencilLineIcon />
				Edit
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				<UploadIcon />
				Share
			</DropdownMenu.Item>
			<DropdownMenu.Separator />
			<DropdownMenu.Item variant="destructive">
				<Trash2Icon />
				<span>Delete</span>
			</DropdownMenu.Item>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
