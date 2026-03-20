<script lang="ts">
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import ChevronUpIcon from '@lucide/svelte/icons/chevron-up';
	import ChevronsDownIcon from '@lucide/svelte/icons/chevrons-down';
	import ChevronsUpIcon from '@lucide/svelte/icons/chevrons-up';
	import EqualIcon from '@lucide/svelte/icons/equal';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';

	const listItems = [
		{
			icon: ChevronsUpIcon,
			color: 'text-destructive',
			priority: 'Highest'
		},
		{
			icon: ChevronUpIcon,
			color: 'text-destructive/60',
			priority: 'High'
		},
		{
			icon: EqualIcon,
			color: 'text-amber-600 dark:text-amber-400',
			priority: 'Medium'
		},
		{
			icon: ChevronDownIcon,
			color: 'text-green-600/60 dark:text-green-400/60',
			priority: 'Low'
		},
		{
			icon: ChevronsDownIcon,
			color: 'text-green-600 dark:text-green-400',
			priority: 'Lowest'
		}
	];
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Bordered Menu</Button>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56 shadow-none">
		<DropdownMenu.Label>Task priority</DropdownMenu.Label>
		<DropdownMenu.Group>
			{#each listItems as item}
				<DropdownMenu.Item>
					<item.icon class={item.color} />
					{item.priority}
				</DropdownMenu.Item>
			{/each}
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
