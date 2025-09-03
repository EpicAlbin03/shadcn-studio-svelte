<script lang="ts">
	import { RangeCalendar } from '$lib/components/ui/range-calendar';
	import { getLocalTimeZone, today } from '@internationalized/date';

	const start = today(getLocalTimeZone());
	const end = start.add({ days: 7 });

	let value = $state({
		start,
		end
	});
</script>

<div>
	<RangeCalendar bind:value class="rounded-lg border" />
	<p class="mt-3 text-center text-xs text-muted-foreground" role="region">
		Single month calendar with range selection
	</p>
</div>
