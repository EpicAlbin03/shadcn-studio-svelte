<script lang="ts">
	import { RangeCalendar } from '$lib/components/ui/range-calendar';
	import { CalendarDate, isWeekend } from '@internationalized/date';
	import type { DateRange } from 'bits-ui';

	let value = $state<DateRange>({
		start: new CalendarDate(2025, 6, 17),
		end: new CalendarDate(2025, 6, 20)
	});
</script>

<div>
	<RangeCalendar
		bind:value
		isDateDisabled={(date) => isWeekend(date, 'en-US')}
		class="rounded-lg border"
	/>
	<p class="mt-3 text-center text-xs text-muted-foreground" role="region">
		Disabled weekend calendar
	</p>
</div>
