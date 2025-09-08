<script lang="ts">
	import {
		ChevronsUpDownIcon,
		DollarSignIcon,
		FactoryIcon,
		FilmIcon,
		HospitalIcon,
		HotelIcon,
		MonitorIcon,
		ScaleIcon,
		SchoolIcon,
		TractorIcon,
		ZapIcon
	} from '@lucide/svelte';
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
	import { tick } from 'svelte';

	const industries = [
		{
			value: 'information technology',
			label: 'Information Technology',
			icon: MonitorIcon
		},
		{
			value: 'healthcare',
			label: 'Healthcare',
			icon: HospitalIcon
		},
		{
			value: 'finance',
			label: 'Finance',
			icon: DollarSignIcon
		},
		{
			value: 'education',
			label: 'Education',
			icon: SchoolIcon
		},
		{
			value: 'entertainment',
			label: 'Entertainment',
			icon: FilmIcon
		},
		{
			value: 'manufacturing',
			label: 'Manufacturing',
			icon: FactoryIcon
		},
		{
			value: 'energy',
			label: 'Energy',
			icon: ZapIcon
		},
		{
			value: 'hospitality',
			label: 'Hospitality',
			icon: HotelIcon
		},
		{
			value: 'legal',
			label: 'Legal',
			icon: ScaleIcon
		},
		{
			value: 'agriculture',
			label: 'Agriculture',
			icon: TractorIcon
		}
	];

	const id = $props.id();

	let open = $state(false);
	let value = $state('');
	let triggerRef = $state<HTMLButtonElement>(null!);
	const selectedItem = $derived(industries.find((industry) => industry.value === value));

	function closeAndFocusTrigger() {
		open = false;
		tick().then(() => {
			triggerRef.focus();
		});
	}
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Combobox option with icon</Label>
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
							{#if selectedItem}
								{@const Icon = selectedItem.icon}
								<Icon class="size-4 text-muted-foreground" />
							{/if}
							<span class="truncate">
								{selectedItem?.label}
							</span>
						</span>
					{:else}
						<span class="text-muted-foreground">Select industry category</span>
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
				<CommandInput placeholder="Search industries..." />
				<CommandList>
					<CommandEmpty>No industry found.</CommandEmpty>
					<CommandGroup>
						{#each industries as industry (industry.value)}
							<CommandItem
								value={industry.value}
								onSelect={() => {
									value = industry.value;
									closeAndFocusTrigger();
								}}
								class="flex items-center justify-between"
							>
								<div class="flex items-center gap-2">
									<industry.icon class="size-4 text-muted-foreground" />
									{industry.label}
								</div>
							</CommandItem>
						{/each}
					</CommandGroup>
				</CommandList>
			</Command>
		</PopoverContent>
	</Popover>
</div>
