<script lang="ts">
	import { RangeCalendar } from '$lib/components/ui/range-calendar';
	import { CalendarDate } from '@internationalized/date';
	import type { DateRange } from 'bits-ui';

	let value = $state<DateRange>({
		start: new CalendarDate(2025, 6, 8),
		end: new CalendarDate(2025, 6, 17)
	});
</script>

<div>
	<RangeCalendar bind:value numberOfMonths={1} minDays={5} class="rounded-lg border" />
	<p class="mt-3 text-center text-xs text-muted-foreground" role="region">
		Minimum 5 days selection
	</p>
</div>
