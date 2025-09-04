<script lang="ts">
	import { Calendar } from '$lib/components/ui/calendar';
	import CalendarDay from '$lib/components/ui/calendar/calendar-day.svelte';
	import { CalendarDate, getLocalTimeZone, today, type DateValue } from '@internationalized/date';

	const todayDate = today(getLocalTimeZone());
	let value = $state<CalendarDate | undefined>(todayDate);

	const getPriceForDate = (dateVal: DateValue) => {
		const date = dateVal.toDate(getLocalTimeZone());
		const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
		const val = (seed * 9301 + 49297) % 233280;
		return Math.floor(50 + (val / 233280) * 200);
	};
</script>

<div>
	<Calendar
		type="single"
		bind:value
		minValue={todayDate}
		class="rounded-lg border shadow-sm [--cell-size:--spacing(11)] md:[--cell-size:--spacing(13)]"
	>
		{#snippet day({ day, outsideMonth })}
			{@const price = getPriceForDate(day)}
			{@const isGreen = price < 100}
			<CalendarDay class="flex flex-col items-center">
				{day.day}
				{#if !outsideMonth}
					<span class={isGreen ? 'text-green-600 dark:text-green-400' : ''}>${price}</span>
				{/if}
			</CalendarDay>
		{/snippet}
	</Calendar>
	<p class="mt-4 text-center text-xs text-muted-foreground" role="region">Calendar with pricing</p>
</div>
