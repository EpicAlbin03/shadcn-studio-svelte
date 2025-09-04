<script lang="ts">
	import { Calendar } from '$lib/components/ui/calendar';
	import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';

	let value = $state<CalendarDate | undefined>(today(getLocalTimeZone()));
</script>

<div>
	<Calendar
		type="single"
		bind:value
		class="
    rounded-md border
    [&_[data-calendar-day]]:rounded-full
    [&_[data-selected]]:rounded-full
    [&_[data-selected]]:bg-sky-600
    [&_[data-selected]]:text-white
    [&_[data-selected]]:dark:bg-sky-400
    [&_[data-selected]]:dark:hover:bg-sky-400"
	/>
	<p class="mt-3 text-center text-xs text-muted-foreground" role="region">
		Custom day select calendar
	</p>
</div>
