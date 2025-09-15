<script lang="ts">
	import { ChevronDown, ChevronsDown, ChevronUp, ChevronsUp, Equal } from '@lucide/svelte';
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
			icon: ChevronsUp,
			color: 'text-destructive',
			priority: 'Highest'
		},
		{
			icon: ChevronUp,
			color: 'text-destructive/60',
			priority: 'High'
		},
		{
			icon: Equal,
			color: 'text-amber-600 dark:text-amber-400',
			priority: 'Medium'
		},
		{
			icon: ChevronDown,
			color: 'text-green-600/60 dark:text-green-400/60',
			priority: 'Low'
		},
		{
			icon: ChevronsDown,
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
		<DropdownMenuLabel>Task priority</DropdownMenuLabel>
		<DropdownMenuGroup>
			{#each listItems as item}
				<DropdownMenu.Item>
					<item.icon class={item.color} />
					{item.priority}
				</DropdownMenu.Item>
			{/each}
		</DropdownMenuGroup>
	</DropdownMenuContent>
</DropdownMenu.Root>
