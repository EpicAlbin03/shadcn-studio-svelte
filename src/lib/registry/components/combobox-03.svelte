<script lang="ts">
	import { CheckIcon, ChevronsUpDownIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Command from '$lib/components/ui/command/index.js';
	import { Label } from '$lib/components/ui/label';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { cn } from '$lib/utils';
	import { tick } from 'svelte';

	const items = [
		{
			category: 'Fruits',
			items: [{ value: 'Apples' }, { value: 'Bananas' }, { value: 'Cherries' }]
		},
		{
			category: 'Vegetables',
			items: [{ value: 'Carrots' }, { value: 'Broccoli', disabled: true }, { value: 'Spinach' }]
		},
		{
			category: 'Beverages',
			items: [{ value: 'Tea' }, { value: 'Coffee', disabled: true }, { value: 'Juice' }]
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
	<Label for={id}>Combobox disabled option</Label>
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
			class="w-full min-w-[var(--radix-popper-anchor-width)] border-input p-0"
			align="start"
		>
			<Command.Root>
				<Command.Input placeholder="Search item..." />
				<Command.List>
					<Command.Empty>No item found.</Command.Empty>
					{#each items as group (group.category)}
						<Command.Group heading={group.category}>
							{#each group.items as item (item.value)}
								<Command.Item
									value={item.value}
									onSelect={() => {
										value = item.value;
										closeAndFocusTrigger();
									}}
									class={cn(item.disabled && 'cursor-not-allowed opacity-50')}
									disabled={item.disabled}
								>
									{item.value}
									{#if value === item.value}
										<CheckIcon size={16} class="ml-auto" />
									{/if}
								</Command.Item>
							{/each}
						</Command.Group>
					{/each}
				</Command.List>
			</Command.Root>
		</Popover.Content>
	</Popover.Root>
</div>
