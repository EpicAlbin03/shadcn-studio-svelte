<script lang="ts">
	import { Calendar } from '$lib/components/ui/calendar';
	import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';

	let value = $state<CalendarDate | undefined>(today(getLocalTimeZone()));
</script>

<div>
	<Calendar
		type="single"
		bind:value
		class="rounded-md border
  [&_[data-calendar-header]]:!flex
  [&_[data-calendar-header]]:!w-full
  [&_[data-calendar-header]]:!items-center
  [&_[data-calendar-header]]:!justify-start
  [&_nav]:!flex
  [&_nav]:!h-8
  [&_nav]:!items-center
  [&_nav]:!justify-end
  "
	/>
	<p class="mt-4 text-center text-xs text-muted-foreground" role="region">
		Right side month year navigation calendar
	</p>
</div>
