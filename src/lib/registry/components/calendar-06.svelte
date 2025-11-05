<script lang="ts">
	import { Calendar } from '$lib/components/ui/calendar';
	import { CalendarDate } from '@internationalized/date';

	let value = $state<CalendarDate | undefined>(new CalendarDate(2025, 6, 18));
</script>

<div>
	<Calendar
		type="single"
		bind:value
		minValue={new CalendarDate(2025, 6, 12)}
		class="rounded-lg border"
	/>
	<p class="mt-3 text-center text-xs text-muted-foreground" role="region">Disabled day calendar</p>
</div>
