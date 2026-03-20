<script lang="ts">
	import { CalendarDate } from '@internationalized/date';
	import type { DateRange } from 'bits-ui';
	import { RangeCalendar } from '$lib/components/ui/range-calendar';

	let value = $state<DateRange>({
		start: new CalendarDate(2025, 5, 22),
		end: new CalendarDate(2025, 6, 17)
	});
</script>

<div>
	<RangeCalendar bind:value numberOfMonths={2} class="rounded-lg border" />
	<p class="mt-3 text-center text-xs text-muted-foreground" role="region">
		Multi month calendar with range selection
	</p>
</div>
