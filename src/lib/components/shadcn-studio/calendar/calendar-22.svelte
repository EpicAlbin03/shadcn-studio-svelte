<script lang="ts">
	import { Calendar } from '$lib/components/ui/calendar';
	import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';

	const presets = [
		{ label: 'Today', value: 0 },
		{ label: 'Yesterday', value: -1 },
		{ label: 'Tomorrow', value: 1 },
		{ label: 'In 3 days', value: 3 },
		{ label: 'In a week', value: 7 },
		{ label: 'In 2 weeks', value: 14 }
	];

	let todayDate = today(getLocalTimeZone());
	let value = $state<CalendarDate | undefined>(todayDate);
</script>

<div>
	<Card.Root class="max-w-xs py-4">
		<Card.Content class="flex justify-center px-4">
			<Calendar type="single" bind:value class="bg-transparent p-0 [--cell-size:--spacing(10)]" />
		</Card.Content>
		<Card.Footer class="flex flex-wrap gap-2 border-t px-4 !pt-4">
			{#each presets as preset (preset.value)}
				<Button
					variant="outline"
					size="sm"
					class="flex-1"
					onclick={() => {
						value = todayDate?.add({ days: preset.value });
					}}
				>
					{preset.label}
				</Button>
			{/each}
		</Card.Footer>
	</Card.Root>
	<p class="mt-4 text-center text-xs text-muted-foreground" role="region">Calendar with presets</p>
</div>
