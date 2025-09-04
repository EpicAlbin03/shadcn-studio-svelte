<script lang="ts">
	import { Calendar } from '$lib/components/ui/calendar';
	import { CalendarDate } from '@internationalized/date';

	let value = $state<CalendarDate[] | undefined>([
		new CalendarDate(2025, 6, 12),
		new CalendarDate(2025, 6, 17)
	]);
</script>

<div>
	<Calendar type="multiple" bind:value preventDeselect maxDays={5} class="rounded-lg border" />
	<p class="mt-3 text-center text-xs text-muted-foreground" role="region">
		Multi day select calendar
	</p>
</div>
