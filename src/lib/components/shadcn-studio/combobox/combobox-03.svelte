<script lang="ts">
	import { CheckIcon, ChevronsUpDownIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import {
		Command,
		CommandEmpty,
		CommandGroup,
		CommandInput,
		CommandItem,
		CommandList
	} from '$lib/components/ui/command';
	import { Label } from '$lib/components/ui/label';
	import { Popover, PopoverContent, PopoverTrigger } from '$lib/components/ui/popover';
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
	<Popover bind:open>
		<PopoverTrigger bind:ref={triggerRef}>
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
		</PopoverTrigger>
		<PopoverContent
			class="w-full min-w-[var(--radix-popper-anchor-width)] border-input p-0"
			align="start"
		>
			<Command>
				<CommandInput placeholder="Search item..." />
				<CommandList>
					<CommandEmpty>No item found.</CommandEmpty>
					{#each items as group (group.category)}
						<CommandGroup heading={group.category}>
							{#each group.items as item (item.value)}
								<CommandItem
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
								</CommandItem>
							{/each}
						</CommandGroup>
					{/each}
				</CommandList>
			</Command>
		</PopoverContent>
	</Popover>
</div>
