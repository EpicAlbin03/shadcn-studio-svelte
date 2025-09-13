<script lang="ts">
	import Calendar from '$lib/components/ui/calendar/calendar.svelte';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import { getLocalTimeZone } from '@internationalized/date';
	import type { CalendarDate } from '@internationalized/date';

	const id = $props.id();

	let open = $state(false);
	let value = $state<CalendarDate | undefined>();
</script>

<div class="flex gap-4">
	<div class="flex flex-col gap-3">
		<Label for="{id}-date" class="px-1">Date picker</Label>
		<Popover.Root bind:open>
			<Popover.Trigger id="{id}-date">
				{#snippet child({ props })}
					<Button {...props} variant="outline" class="w-32 justify-between font-normal">
						{value ? value.toDate(getLocalTimeZone()).toLocaleDateString() : 'Pick a date'}
						<ChevronDownIcon />
					</Button>
				{/snippet}
			</Popover.Trigger>
			<Popover.Content class="w-auto overflow-hidden p-0" align="start">
				<Calendar
					type="single"
					bind:value
					onValueChange={() => {
						open = false;
					}}
				/>
			</Popover.Content>
		</Popover.Root>
	</div>
	<div class="flex flex-col gap-3">
		<Label for="{id}-time" class="px-1">Time input</Label>
		<Input
			type="time"
			id="{id}-time"
			step="1"
			value="06:30:00"
			class="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
		/>
	</div>
</div>
