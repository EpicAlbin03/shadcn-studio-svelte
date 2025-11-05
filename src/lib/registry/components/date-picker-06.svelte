<script lang="ts">
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import RangeCalendar from '$lib/components/ui/range-calendar/range-calendar.svelte';
	import { Label } from '$lib/components/ui/label/index.js';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import type { DateRange } from 'bits-ui';
	import { CalendarDate, getLocalTimeZone, type DateValue } from '@internationalized/date';
	import { formatDateRange } from 'little-date';

	const id = $props.id();

	let value = $state<DateRange | undefined>({
		start: new CalendarDate(2025, 11, 20),
		end: new CalendarDate(2025, 11, 24)
	});

	function formatRange(start: DateValue, end: DateValue) {
		return formatDateRange(start.toDate(getLocalTimeZone()), end.toDate(getLocalTimeZone()), {
			includeTime: false
		});
	}
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for="{id}-dates" class="px-1">Date picker with short date</Label>
	<Popover.Root>
		<Popover.Trigger id="{id}-dates">
			{#snippet child({ props })}
				<Button {...props} variant="outline" class="w-full justify-between font-normal">
					{#if value?.start && value?.end}
						{formatRange(value.start, value.end)}
					{:else}
						Pick a date
					{/if}
					<ChevronDownIcon />
				</Button>
			{/snippet}
		</Popover.Trigger>
		<Popover.Content class="w-auto overflow-hidden p-0" align="start">
			<RangeCalendar bind:value />
		</Popover.Content>
	</Popover.Root>
</div>
