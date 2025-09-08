<script lang="ts">
	import { CheckIcon, ChevronDownIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import {
		Command,
		CommandEmpty,
		CommandInput,
		CommandItem,
		CommandList
	} from '$lib/components/ui/command';
	import { Label } from '$lib/components/ui/label';
	import { Popover, PopoverContent, PopoverTrigger } from '$lib/components/ui/popover';
	import { tick } from 'svelte';

	const countries = [
		{ value: '1', label: 'India', flag: '/flags/india.webp' },
		{ value: '2', label: 'China', flag: '/flags/china.webp' },
		{ value: '3', label: 'Monaco', flag: '/flags/monaco.webp' },
		{ value: '4', label: 'Serbia', flag: '/flags/serbia.webp' },
		{ value: '5', label: 'Romania', flag: '/flags/romania.webp' },
		{ value: '6', label: 'Mayotte', flag: '/flags/mayotte.webp' },
		{ value: '7', label: 'Iraq', flag: '/flags/iraq.webp' },
		{ value: '8', label: 'Syria', flag: '/flags/syria.webp' },
		{ value: '9', label: 'Korea', flag: '/flags/korea.webp' },
		{ value: '10', label: 'Zimbabwe', flag: '/flags/zimbabwe.webp' }
	];

	const id = $props.id();

	let open = $state(false);
	let value = $state('');
	let triggerRef = $state<HTMLButtonElement>(null!);
	const selectedFlag = $derived(countries.find((item) => item.label === value)?.flag);

	function closeAndFocusTrigger() {
		open = false;
		tick().then(() => {
			triggerRef.focus();
		});
	}
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Options with flag and search</Label>
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
							<img src={selectedFlag} alt={value} class="h-4 w-5" />
							<span class="truncate">{value}</span>
						</span>
					{:else}
						<span class="text-muted-foreground">Select country</span>
					{/if}
					<ChevronDownIcon size={16} class="shrink-0 text-muted-foreground/80" aria-hidden="true" />
				</Button>
			{/snippet}
		</PopoverTrigger>
		<PopoverContent
			class="w-full min-w-[var(--radix-popper-anchor-width)] border-input p-0"
			align="start"
		>
			<Command>
				<CommandInput placeholder="Search country..." />
				<CommandList>
					<CommandEmpty>No country found.</CommandEmpty>
					{#each countries as country (country.value)}
						<CommandItem
							value={country.label}
							onSelect={() => {
								value = country.label;
								closeAndFocusTrigger();
							}}
						>
							<img src={country.flag} alt={`${country.label} flag`} class="h-4 w-5" />
							{country.label}
							{#if value === country.value}
								<CheckIcon size={16} class="ml-auto" />
							{/if}
						</CommandItem>
					{/each}
				</CommandList>
			</Command>
		</PopoverContent>
	</Popover>
</div>
