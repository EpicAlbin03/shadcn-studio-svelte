<script lang="ts">
	import { Calendar } from '$lib/components/ui/calendar';
	import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';

	let value = $state<CalendarDate | undefined>(today(getLocalTimeZone()));
</script>

<div>
	<Calendar type="single" numberOfMonths={2} bind:value class="rounded-lg border" />
	<p class="mt-4 text-center text-xs text-muted-foreground" role="region">Multi month calendar</p>
</div>
