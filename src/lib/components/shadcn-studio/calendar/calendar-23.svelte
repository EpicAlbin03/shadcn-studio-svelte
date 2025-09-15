<script lang="ts">
	import { RangeCalendar } from '$lib/components/ui/range-calendar';
	import {
		endOfMonth,
		endOfYear,
		getLocalTimeZone,
		startOfMonth,
		startOfYear,
		today
	} from '@internationalized/date';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import type { DateRange } from 'bits-ui';

	let todayDate = today(getLocalTimeZone());

	const presets = {
		today: { start: todayDate, end: todayDate },
		yesterday: { start: todayDate.subtract({ days: 1 }), end: todayDate.subtract({ days: 1 }) },
		tomorrow: { start: todayDate, end: todayDate.add({ days: 1 }) },
		last7Days: { start: todayDate.subtract({ days: 6 }), end: todayDate },
		next7Days: { start: todayDate.add({ days: 1 }), end: todayDate.add({ days: 7 }) },
		last30Days: { start: todayDate.subtract({ days: 29 }), end: todayDate },
		monthToDate: { start: startOfMonth(todayDate), end: todayDate },
		lastMonth: {
			start: startOfMonth(todayDate.subtract({ months: 1 })),
			end: endOfMonth(todayDate.subtract({ months: 1 }))
		},
		nextMonth: {
			start: startOfMonth(todayDate.add({ months: 1 })),
			end: endOfMonth(todayDate.add({ months: 1 }))
		},
		yearToDate: { start: startOfYear(todayDate), end: todayDate },
		lastYear: {
			start: startOfYear(todayDate.subtract({ years: 1 })),
			end: endOfYear(todayDate.subtract({ years: 1 }))
		}
	};

	const presetOptions = [
		{
			label: 'Today',
			value: 'today'
		},
		{
			label: 'Yesterday',
			value: 'yesterday'
		},
		{
			label: 'Tomorrow',
			value: 'tomorrow'
		},
		{
			label: 'Last 7 days',
			value: 'last7Days'
		},
		{
			label: 'Next 7 days',
			value: 'next7Days'
		},
		{
			label: 'Last 30 days',
			value: 'last30Days'
		},
		{
			label: 'Month to date',
			value: 'monthToDate'
		},
		{
			label: 'Last month',
			value: 'lastMonth'
		},
		{
			label: 'Next month',
			value: 'nextMonth'
		},
		{
			label: 'Year to date',
			value: 'yearToDate'
		},
		{
			label: 'Last year',
			value: 'lastYear'
		}
	];

	let value = $state<DateRange>(presets.last7Days);
</script>

<div>
	<Card.Root class="max-w-xs py-4">
		<Card.Content class="flex justify-center px-4">
			<RangeCalendar bind:value class="bg-transparent p-0 [--cell-size:--spacing(10)]" />
		</Card.Content>
		<Card.Footer class="flex flex-wrap gap-2 border-t px-4 !pt-4">
			{#each presetOptions as preset (preset.value)}
				<Button
					variant="outline"
					size="sm"
					class="flex-1"
					onclick={() => {
						value = presets[preset.value as keyof typeof presets];
					}}
				>
					{preset.label}
				</Button>
			{/each}
		</Card.Footer>
	</Card.Root>
	<p class="mt-4 text-center text-xs text-muted-foreground" role="region">Calendar with presets</p>
</div>
