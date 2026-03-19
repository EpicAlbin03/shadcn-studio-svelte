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
  **:data-calendar-header:flex!
  **:data-calendar-header:w-full!
  **:data-calendar-header:items-center!
  **:data-calendar-header:justify-start!
  [&_nav]:flex!
  [&_nav]:h-8!
  [&_nav]:items-center!
  [&_nav]:justify-end!
  "
	/>
	<p class="mt-4 text-center text-xs text-muted-foreground" role="region">
		Right side month year navigation calendar
	</p>
</div>
