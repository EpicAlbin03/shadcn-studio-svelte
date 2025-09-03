<script lang="ts">
	import { ChevronDownIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuRadioGroup,
		DropdownMenuRadioItem,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';

	const options = [
		{
			label: 'Merge pull request',
			description:
				'All commits from this branch will be added to the base branch via a commit version.'
		},
		{
			label: 'Squash and merge',
			description:
				'The 6 commits from this branch will be combined into one commit in the base branch.'
		},
		{
			label: 'Rebase and merge',
			description: 'The 6 commits from this branch will be rebased and added to the base branch.'
		}
	];

	let selectedIndex = $state('0');
</script>

<div class="inline-flex w-fit divide-x divide-primary-foreground/30 rounded-md shadow-xs">
	<Button class="rounded-none rounded-s-md shadow-none focus-visible:z-10">
		{options[Number(selectedIndex)].label}
	</Button>
	<DropdownMenu>
		<DropdownMenuTrigger>
			{#snippet child({ props })}
				<Button {...props} size="icon" class="rounded-none rounded-e-md focus-visible:z-10">
					<ChevronDownIcon />
					<span class="sr-only">Select option</span>
				</Button>
			{/snippet}
		</DropdownMenuTrigger>
		<DropdownMenuContent side="bottom" sideOffset={4} align="end" class="max-w-64 md:max-w-xs!">
			<DropdownMenuRadioGroup bind:value={selectedIndex}>
				{#each options as option, index (option.label)}
					<DropdownMenuRadioItem value={String(index)} class="items-start [&>span]:pt-1.5">
						<div class="flex flex-col gap-1">
							<span class="text-sm font-medium">{option.label}</span>
							<span class="text-xs text-muted-foreground">{option.description}</span>
						</div>
					</DropdownMenuRadioItem>
				{/each}
			</DropdownMenuRadioGroup>
		</DropdownMenuContent>
	</DropdownMenu>
</div>
