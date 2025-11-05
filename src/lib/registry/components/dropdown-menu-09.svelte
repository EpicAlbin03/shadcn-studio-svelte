<script lang="ts">
	import { PencilLine, Upload, Trash2 } from '@lucide/svelte';
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
				<PencilLine />
				Edit
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				<Upload />
				Share
			</DropdownMenu.Item>
			<DropdownMenu.Separator />
			<DropdownMenu.Item variant="destructive">
				<Trash2 />
				<span>Delete</span>
			</DropdownMenu.Item>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
