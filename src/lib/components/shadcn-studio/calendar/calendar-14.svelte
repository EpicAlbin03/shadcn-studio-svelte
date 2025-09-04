<script lang="ts">
	import { RangeCalendar } from '$lib/components/ui/range-calendar';
	import { CalendarDate } from '@internationalized/date';
	import type { DateRange } from 'bits-ui';

	let value = $state<DateRange>({
		start: new CalendarDate(2025, 6, 4),
		end: new CalendarDate(2025, 6, 17)
	});
</script>

<div>
	<RangeCalendar
		bind:value
		class="
    rounded-md border
    [&_[data-calendar-day]]:rounded-full
    [&_[data-range-end]]:rounded-full
    [&_[data-range-end]]:bg-sky-600
    [&_[data-range-end]]:text-white
    [&_[data-range-end]]:hover:bg-sky-600
    [&_[data-range-end]]:dark:bg-sky-400
    [&_[data-range-end]]:dark:hover:bg-sky-400
    [&_[data-range-start]]:rounded-full
    [&_[data-range-start]]:bg-sky-600
    [&_[data-range-start]]:text-white
    [&_[data-range-start]]:hover:bg-sky-600
    [&_[data-range-start]]:dark:bg-sky-400
    [&_[data-range-start]]:dark:hover:bg-sky-400
    [&_[role='gridcell'][data-range-end]]:rounded-l-none
    [&_[role='gridcell'][data-range-end]]:rounded-r-full
    [&_[role='gridcell'][data-range-start]]:rounded-l-full
    [&_[role='gridcell'][data-range-start]]:rounded-r-none
    [&_[role='gridcell'][data-selected]]:bg-sky-600/20
    [&_[role='gridcell'][data-selected]]:dark:bg-sky-400/10"
	/>
	<p class="mt-3 text-center text-xs text-muted-foreground" role="region">
		Custom range selection calendar
	</p>
</div>
