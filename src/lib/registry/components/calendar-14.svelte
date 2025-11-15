<script lang="ts">
	import { RangeCalendar } from '$lib/components/ui/range-calendar';
	import RangeCalendarDay from '$lib/components/ui/range-calendar/range-calendar-day.svelte';
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
		class="rounded-md border
  [&_[data-range-end]]:!rounded-r-full
  [&_[data-range-end]]:!text-white
  [&_[data-range-start]]:!rounded-l-full
  [&_[data-range-start]]:!text-white
  [&_[data-selected]]:!bg-sky-600/20
  "
	>
		{#snippet day({ day })}
			<RangeCalendarDay
				class="
      [[data-range-end]]:!rounded-full
      [[data-range-end]]:!bg-sky-600
      [[data-range-middle]]:!bg-transparent
      [[data-range-start]]:!rounded-full
      [[data-range-start]]:!bg-sky-600
      "
			>
				{day.day}
			</RangeCalendarDay>
		{/snippet}
	</RangeCalendar>
	<p class="mt-3 text-center text-xs text-muted-foreground" role="region">
		Custom range selection calendar
	</p>
</div>
