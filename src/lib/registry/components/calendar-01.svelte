<script lang="ts">
	import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';
	import { Calendar } from '$lib/components/ui/calendar';

	let value = $state<CalendarDate | undefined>(today(getLocalTimeZone()));
</script>

<div>
	<Calendar type="single" bind:value class="rounded-lg border" />
	<p class="mt-3 text-center text-xs text-muted-foreground" role="region">Default month</p>
</div>
