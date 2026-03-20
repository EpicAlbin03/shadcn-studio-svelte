<script lang="ts">
	import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';
	import { Calendar } from '$lib/components/ui/calendar';

	let value = $state<CalendarDate | undefined>(today(getLocalTimeZone()));
</script>

<div>
	<Calendar type="single" bind:value captionLayout="dropdown" class="rounded-md border" />
	<p class="mt-3 text-center text-xs text-muted-foreground" role="region">
		Month and year dropdown calendar
	</p>
</div>
