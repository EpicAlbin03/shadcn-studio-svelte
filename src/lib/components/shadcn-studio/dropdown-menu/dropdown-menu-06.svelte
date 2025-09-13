<script lang="ts">
	import { AlignJustify, Heading1, Heading2, Pencil, TextSearch } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuGroup,
		DropdownMenuItem,
		DropdownMenuLabel,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';

	const listItems = [
		{
			icon: Heading1,
			property: 'Heading 1',
			description: 'big section or hero heading'
		},
		{
			icon: Heading2,
			property: 'Heading 2',
			description: 'Sub section heading'
		},
		{
			icon: AlignJustify,
			property: 'Align justify',
			description: 'text will fill all area'
		},
		{
			icon: TextSearch,
			property: 'text search',
			description: 'find any text'
		}
	];
</script>

<DropdownMenu>
	<DropdownMenuTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="ghost" size="icon" class="rounded-full">
				<Pencil />
				<span class="sr-only">Edit menu</span>
			</Button>
		{/snippet}
	</DropdownMenuTrigger>
	<DropdownMenuContent class="w-56">
		<DropdownMenuLabel>Edit text</DropdownMenuLabel>
		<DropdownMenuGroup>
			{#each listItems as item}
				<DropdownMenuItem>
					<span class="flex items-center justify-center rounded-md border p-2">
						<item.icon />
					</span>
					<div class="flex flex-col">
						<span class="text-popover-foreground">{item.property}</span>
						<span class="text-xs text-muted-foreground">{item.description}</span>
					</div>
				</DropdownMenuItem>
			{/each}
		</DropdownMenuGroup>
	</DropdownMenuContent>
</DropdownMenu>
