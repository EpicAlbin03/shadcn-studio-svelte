<script lang="ts">
	import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';
	import { Calendar } from '$lib/components/ui/calendar';
	import CalendarDay from '$lib/components/ui/calendar/calendar-day.svelte';

	let value = $state<CalendarDate | undefined>(today(getLocalTimeZone()));
</script>

<div>
	<Calendar type="single" bind:value class="rounded-md border">
		{#snippet day({ day })}
			<CalendarDay
				class="
      [[data-selected]]:!dark:bg-sky-400
      [[data-selected]]:!dark:hover:bg-sky-400
      rounded-full!
      data-selected:bg-sky-600!
      data-selected:text-white!
      "
			>
				{day.day}
			</CalendarDay>
		{/snippet}
	</Calendar>
	<p class="mt-3 text-center text-xs text-muted-foreground" role="region">
		Custom day select calendar
	</p>
</div>
