<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Calendar } from '$lib/components/ui/calendar';
	import * as Card from '$lib/components/ui/card/index.js';
	import { CalendarDate, getLocalTimeZone } from '@internationalized/date';
	import { CircleCheck } from '@lucide/svelte';

	let value = $state<CalendarDate | undefined>(new CalendarDate(2025, 6, 20));
	let selectedTime = $state<string | null>('10:00');

	const bookedDates = Array.from({ length: 3 }, (_, i) => new CalendarDate(2025, 6, 17 + i));
	const timeSlots = Array.from({ length: 37 }, (_, i) => {
		const totalMinutes = i * 15;
		const hour = Math.floor(totalMinutes / 60) + 9;
		const minute = totalMinutes % 60;
		return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
	});
</script>

<Card.Root class="gap-0 p-0">
	<Card.Content class="relative p-0 md:pr-48">
		<div class="p-6">
			<Calendar
				type="single"
				bind:value
				isDateUnavailable={(date) => bookedDates.some((d) => d.compare(date) === 0)}
				class="bg-transparent p-0 [--cell-size:--spacing(10)] data-unavailable:line-through data-unavailable:opacity-100 md:[--cell-size:--spacing(12)] [&_[data-outside-month]]:hidden"
				weekdayFormat="short"
			/>
		</div>
		<div
			class="no-scrollbar inset-y-0 right-0 flex max-h-72 w-full scroll-pb-6 flex-col gap-4 overflow-y-auto border-t p-6 md:absolute md:max-h-none md:w-48 md:border-t-0 md:border-l"
		>
			<div class="grid gap-2">
				{#each timeSlots as time (time)}
					<Button
						variant={selectedTime === time ? 'default' : 'outline'}
						onclick={() => (selectedTime = time)}
						class="w-full shadow-none"
					>
						{time}
					</Button>
				{/each}
			</div>
		</div>
	</Card.Content>
	<Card.Footer class="flex flex-col gap-4 border-t px-6 !py-5 md:flex-row">
		<div class="flex items-center gap-2 text-sm">
			{#if value && selectedTime}
				<CircleCheck class="size-5 stroke-green-600 dark:stroke-green-400" />
				<span>
					Your meeting is booked for
					<span class="font-medium">
						{value.toDate(getLocalTimeZone()).toLocaleDateString('en-US', {
							weekday: 'long',
							day: 'numeric',
							month: 'short'
						})}
					</span>
					at <span class="font-medium">{selectedTime}</span>.
				</span>
			{:else}
				Select a date and time for your meeting.
			{/if}
		</div>
		<Button
			disabled={!value || !selectedTime}
			class="w-full md:ml-auto md:w-auto"
			variant="outline"
		>
			Continue
		</Button>
	</Card.Footer>
</Card.Root>
