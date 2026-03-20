<script lang="ts">
	import { CalendarDate } from '@internationalized/date';
	import * as Card from '$lib/components/ui/card/index.js';
	import { RangeCalendar } from '$lib/components/ui/range-calendar/index.js';

	const start = new CalendarDate(2023, 5, 5);
</script>

<Card.Root class="hidden max-w-65 p-0 sm:flex">
	<Card.Content class="p-0">
		<RangeCalendar placeholder={start} value={{ start, end: start.add({ days: 8 }) }} />
	</Card.Content>
</Card.Root>
