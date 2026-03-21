<script lang="ts">
	import ChevronsUpDownIcon from '@lucide/svelte/icons/chevrons-up-down';
	import { tick } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Command from '$lib/components/ui/command/index.js';
	import { Label } from '$lib/components/ui/label';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { cn } from '$lib/utils';

	const items = [
		{
			continent: 'Fruits',
			items: [{ value: 'Apples' }, { value: 'Bananas' }, { value: 'Cherries' }]
		},
		{
			continent: 'Vegetables',
			items: [{ value: 'Carrots' }, { value: 'Broccoli' }, { value: 'Spinach' }]
		},
		{
			continent: 'Beverages',
			items: [{ value: 'Tea' }, { value: 'Coffee' }, { value: 'Juice' }]
		}
	];

	const id = $props.id();

	let open = $state(false);
	let value = $state('');
	let triggerRef = $state<HTMLButtonElement>(null!);

	function closeAndFocusTrigger() {
		open = false;
		tick().then(() => {
			triggerRef.focus();
		});
	}
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Combobox option group</Label>
	<Popover.Root bind:open>
		<Popover.Trigger bind:ref={triggerRef}>
			{#snippet child({ props })}
				<Button
					{...props}
					{id}
					variant="outline"
					role="combobox"
					aria-expanded={open}
					class="w-full justify-between border-input bg-background px-3 font-normal outline-offset-0 outline-none hover:bg-background focus-visible:outline-[3px]"
				>
					{#if value}
						<span class="flex min-w-0 items-center gap-2">
							<span class="truncate">{value}</span>
						</span>
					{:else}
						<span class="text-muted-foreground">Select item</span>
					{/if}
					<ChevronsUpDownIcon
						size={16}
						class="shrink-0 text-muted-foreground/80"
						aria-hidden="true"
					/>
				</Button>
			{/snippet}
		</Popover.Trigger>
		<Popover.Content
			class="w-full min-w-(--radix-popper-anchor-width) border-input p-0"
			align="start"
		>
			<Command.Root>
				<Command.Input placeholder="Search item..." />
				<Command.List>
					<Command.Empty>No item found.</Command.Empty>
					{#each items as group (group.continent)}
						<Command.Group heading={group.continent}>
							{#each group.items as item (item.value)}
								<Command.Item
									class={cn(
										value === item.value
											? '[&>.cn-command-item-indicator]:opacity-100'
											: '[&>.cn-command-item-indicator]:opacity-0'
									)}
									value={item.value}
									onSelect={() => {
										value = item.value;
										closeAndFocusTrigger();
									}}
								>
									{item.value}
								</Command.Item>
							{/each}
						</Command.Group>
					{/each}
				</Command.List>
			</Command.Root>
		</Popover.Content>
	</Popover.Root>
</div>
