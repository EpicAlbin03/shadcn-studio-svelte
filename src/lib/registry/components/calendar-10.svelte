<script lang="ts">
	import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';
	import { Calendar } from '$lib/components/ui/calendar';

	let value = $state<CalendarDate | undefined>(today(getLocalTimeZone()));
</script>

<div>
	<Calendar
		type="single"
		bind:value
		class="rounded-lg border [--cell-size:--spacing(11)] md:[--cell-size:--spacing(13)]"
	/>
	<p class="mt-3 text-center text-xs text-muted-foreground" role="region">Variable size calendar</p>
</div>
