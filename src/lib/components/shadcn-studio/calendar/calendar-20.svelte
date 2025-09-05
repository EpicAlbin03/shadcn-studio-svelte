<script lang="ts">
	import { Calendar } from '$lib/components/ui/calendar';
	import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Card, CardContent, CardHeader } from '$lib/components/ui/card';
	import { ClockIcon } from '@lucide/svelte';

	const id = $props.id();

	let value = $state<CalendarDate | undefined>(today(getLocalTimeZone()));
</script>

<div>
	<Card class="w-fit py-4">
		<CardHeader class="flex items-center justify-center gap-2 border-b px-3 !pb-3">
			<div class="flex w-full flex-col gap-3">
				<Label for={id} class="text-xs">Enter Time</Label>
				<div class="relative grow">
					<Input
						{id}
						type="time"
						step="1"
						value="12:00:00"
						class="peer appearance-none ps-9 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
					/>
					<div
						class="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50"
					>
						<ClockIcon size={16} aria-hidden="true" />
					</div>
				</div>
			</div>
		</CardHeader>
		<CardContent class="px-5">
			<Calendar type="single" bind:value class="bg-transparent p-0" />
		</CardContent>
	</Card>
	<p class="mt-4 text-center text-xs text-muted-foreground" role="region">
		Calendar with time input
	</p>
</div>
