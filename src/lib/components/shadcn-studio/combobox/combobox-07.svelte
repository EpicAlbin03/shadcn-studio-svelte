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

	const id = $props.id();

	let open = $state(false);
	let value = $state('harvard');
	let triggerRef = $state<HTMLButtonElement>(null!);

	function closeAndFocusTrigger() {
		open = false;
		tick().then(() => {
			triggerRef.focus();
		});
	}

	// Fetch supported timezones
	const timezones = Intl.supportedValuesOf('timeZone');

	const formattedTimezones = $derived.by(() => {
		return timezones
			.map((timezone) => {
				const formatter = new Intl.DateTimeFormat('en', {
					timeZone: timezone,
					timeZoneName: 'shortOffset'
				});

				const parts = formatter.formatToParts(new Date());
				const offset = parts.find((part) => part.type === 'timeZoneName')?.value || '';
				const formattedOffset = offset === 'GMT' ? 'GMT+0' : offset;

				return {
					value: timezone,
					label: `(${formattedOffset}) ${timezone.replace(/_/g, ' ')}`,
					numericOffset: parseInt(formattedOffset.replace('GMT', '').replace('+', '') || '0')
				};
			})
			.sort((a, b) => a.numericOffset - b.numericOffset); // Sort by numeric offset
	});

	const selectedValue = $derived(formattedTimezones.find((f) => f.value === value)?.label);
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Timezone combobox</Label>
	<Popover bind:open>
		<PopoverTrigger bind:ref={triggerRef}>
			{#snippet child({ props })}
				<Button
					{...props}
					{id}
					variant="outline"
					role="combobox"
					aria-expanded={open}
					class="w-full justify-between"
				>
					<span class={cn('truncate')}>
						{#if selectedValue}
							{selectedValue}
						{:else}
							<span class="text-muted-foreground">Select timezone</span>
						{/if}
					</span>
					<ChevronsUpDownIcon
						size={16}
						class="shrink-0 text-muted-foreground/80"
						aria-hidden="true"
					/>
				</Button>
			{/snippet}
		</PopoverTrigger>
		<PopoverContent class="w-(--radix-popper-anchor-width) p-0">
			<Command>
				<CommandInput placeholder="Search timezone" />
				<CommandList>
					<CommandEmpty>No timezone found.</CommandEmpty>
					<CommandGroup>
						{#each formattedTimezones as timezone (timezone.value)}
							<CommandItem
								value={timezone.value}
								onSelect={() => {
									value = timezone.value;
									closeAndFocusTrigger();
								}}
							>
								<span class="truncate">{timezone.label}</span>
								{#if value === timezone.value}
									<CheckIcon size={16} class="ml-auto" />
								{/if}
							</CommandItem>
						{/each}
					</CommandGroup>
				</CommandList>
			</Command>
		</PopoverContent>
	</Popover>
</div>
