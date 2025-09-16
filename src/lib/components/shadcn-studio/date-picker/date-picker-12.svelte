<script lang="ts">
	import Calendar from '$lib/components/ui/calendar/calendar.svelte';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import { CalendarDate, getLocalTimeZone } from '@internationalized/date';

	const id = $props.id();

	let openFrom = $state(false);
	let openTo = $state(false);
	let valueFrom = $state<CalendarDate | undefined>(new CalendarDate(2025, 6, 18));
	let valueTo = $state<CalendarDate | undefined>(new CalendarDate(2025, 6, 25));
</script>

<div class="flex w-full max-w-64 min-w-0 flex-col gap-6">
	<div class="flex gap-4">
		<div class="flex flex-1 flex-col gap-3">
			<Label for="{id}-date-from" class="px-1">Departure date</Label>
			<Popover.Root bind:open={openFrom}>
				<Popover.Trigger id="{id}-date-from">
					{#snippet child({ props })}
						<Button {...props} variant="outline" class="w-full justify-between font-normal">
							{valueFrom
								? valueFrom.toDate(getLocalTimeZone()).toLocaleDateString('en-US', {
										day: '2-digit',
										month: 'short',
										year: 'numeric'
									})
								: 'Pick a date'}
							<ChevronDownIcon />
						</Button>
					{/snippet}
				</Popover.Trigger>
				<Popover.Content class="w-auto overflow-hidden p-0" align="start">
					<Calendar
						type="single"
						bind:value={valueFrom}
						onValueChange={() => {
							openFrom = false;
						}}
					/>
				</Popover.Content>
			</Popover.Root>
		</div>
		<div class="flex flex-col gap-3">
			<Label for="{id}-time-from" class="invisible px-1">From</Label>
			<Input
				type="time"
				id="{id}-time-from"
				step="1"
				value="09:30:00"
				class="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
			/>
		</div>
	</div>
	<div class="flex gap-4">
		<div class="flex flex-1 flex-col gap-3">
			<Label for="{id}-date-to" class="px-1">Return date</Label>
			<Popover.Root bind:open={openTo}>
				<Popover.Trigger id="{id}-date-to">
					{#snippet child({ props })}
						<Button {...props} variant="outline" class="w-full justify-between font-normal">
							{valueTo
								? valueTo.toDate(getLocalTimeZone()).toLocaleDateString('en-US', {
										day: '2-digit',
										month: 'short',
										year: 'numeric'
									})
								: 'Pick a date'}
							<ChevronDownIcon />
						</Button>
					{/snippet}
				</Popover.Trigger>
				<Popover.Content class="w-auto overflow-hidden p-0" align="start">
					<Calendar
						type="single"
						bind:value={valueTo}
						onValueChange={() => {
							openTo = false;
						}}
						isDateDisabled={(date) => {
							return (valueFrom && date.compare(valueFrom) < 0) ?? false;
						}}
					/>
				</Popover.Content>
			</Popover.Root>
		</div>
		<div class="flex flex-col gap-3">
			<Label for="{id}-time-to" class="invisible px-1">To</Label>
			<Input
				type="time"
				id="{id}-time-to"
				step="1"
				value="18:30:00"
				class="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
			/>
		</div>
	</div>
</div>
