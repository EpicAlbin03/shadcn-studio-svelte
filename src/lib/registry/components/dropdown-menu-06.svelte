<script lang="ts">
	import AlignJustifyIcon from '@lucide/svelte/icons/align-justify';
	import Heading1Icon from '@lucide/svelte/icons/heading1';
	import Heading2Icon from '@lucide/svelte/icons/heading2';
	import PencilIcon from '@lucide/svelte/icons/pencil';
	import TextSearchIcon from '@lucide/svelte/icons/text-search';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';

	const listItems = [
		{
			icon: Heading1Icon,
			property: 'Heading 1',
			description: 'big section or hero heading'
		},
		{
			icon: Heading2Icon,
			property: 'Heading 2',
			description: 'Sub section heading'
		},
		{
			icon: AlignJustifyIcon,
			property: 'Align justify',
			description: 'text will fill all area'
		},
		{
			icon: TextSearchIcon,
			property: 'Text search',
			description: 'find any text'
		}
	];
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="ghost" size="icon" class="rounded-full">
				<PencilIcon />
				<span class="sr-only">Edit menu</span>
			</Button>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56">
		<DropdownMenu.Label>Edit text</DropdownMenu.Label>
		<DropdownMenu.Group>
			{#each listItems as item}
				<DropdownMenu.Item>
					<span class="flex items-center justify-center rounded-md border p-2">
						<item.icon />
					</span>
					<div class="flex flex-col">
						<span class="text-popover-foreground">{item.property}</span>
						<span class="text-xs text-muted-foreground">{item.description}</span>
					</div>
				</DropdownMenu.Item>
			{/each}
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
