<script lang="ts">
	import { Calendar } from '$lib/components/ui/calendar';
	import {
		CalendarDate,
		endOfYear,
		getLocalTimeZone,
		startOfYear,
		today
	} from '@internationalized/date';

	let todayDate = today(getLocalTimeZone());
	let value = $state<CalendarDate | undefined>(todayDate);
	let isYearView = $state(false);
	const startDate = new CalendarDate(1980, 6, 1);
	const endDate = new CalendarDate(2030, 6, 30);

	const eachYearOfInterval = ({ start, end }: { start: CalendarDate; end: CalendarDate }) => {
		let years: CalendarDate[] = [];
		let current = start;

		while (current.compare(end) <= 0) {
			years.push(current);
			current = current.add({ years: 1 });
		}

		return years;
	};

	const years = eachYearOfInterval({
		start: startOfYear(startDate),
		end: endOfYear(endDate)
	});
</script>

<div>
	<Calendar
		type="single"
		bind:value
		minValue={startDate}
		maxValue={endDate}
		class="overflow-hidden rounded-md border p-2
  [&_[data-calendar-header]]:!ms-2.5
  [&_[data-calendar-header]]:!me-20
  [&_[data-calendar-header]]:!justify-start
  [&_nav]:!absolute
  [&_nav]:!end-0
  [&_nav]:!flex
  [&_nav]:!w-fit
  [&_nav]:!items-center
  "
	/>
	<p class="mt-4 text-center text-xs text-muted-foreground" role="region">
		Calendar with advance selection{' '}
		<a
			href="https://originui.com/calendar-date-picker"
			class="underline hover:text-primary"
			target="_blank"
		>
			Origin UI
		</a>
	</p>
</div>
