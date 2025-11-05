<script lang="ts">
	import { CheckIcon, ChevronsUpDownIcon, PlusIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Command from '$lib/components/ui/command/index.js';
	import { Label } from '$lib/components/ui/label';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { cn } from '$lib/utils';
	import { tick } from 'svelte';

	const universities = [
		{
			value: 'harvard',
			label: 'Harvard University'
		},
		{
			value: 'cambridge',
			label: 'University of Cambridge'
		},
		{
			value: 'stanford',
			label: 'Stanford University'
		},
		{
			value: 'texas',
			label: 'University of Texas'
		}
	];

	const id = $props.id();

	let open = $state(false);
	let value = $state('harvard');
	let triggerRef = $state<HTMLButtonElement>(null!);
	const selectedLabel = $derived(universities.find((f) => f.value === value)?.label);

	function closeAndFocusTrigger() {
		open = false;
		tick().then(() => {
			triggerRef.focus();
		});
	}
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Combobox with search and add button</Label>
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
					<span class={cn('truncate', !value && 'text-muted-foreground')}>
						{#if selectedLabel}
							{selectedLabel}
						{:else}
							<span class="text-muted-foreground">Select university</span>
						{/if}
					</span>
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
				<Command.Input placeholder="Find university" />
				<Command.List>
					<Command.Empty>No university found.</Command.Empty>
					<Command.Group>
						{#each universities as university (university.value)}
							<Command.Item
								value={university.value}
								onSelect={() => {
									value = university.value;
									closeAndFocusTrigger();
								}}
							>
								{university.label}
								{#if value === university.value}
									<CheckIcon size={16} class="ml-auto" />
								{/if}
							</Command.Item>
						{/each}
					</Command.Group>
					<Command.Separator />
					<Command.Group>
						<Button variant="ghost" class="w-full justify-start font-normal">
							<PlusIcon size={16} class="-ms-2 opacity-60" aria-hidden="true" />
							New university
						</Button>
					</Command.Group>
				</Command.List>
			</Command.Root>
		</Popover.Content>
	</Popover.Root>
</div>
