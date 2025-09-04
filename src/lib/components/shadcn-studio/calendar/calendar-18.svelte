<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Calendar } from '$lib/components/ui/calendar';
	import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';
	import {
		Card,
		CardAction,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';

	let value = $state<CalendarDate | undefined>(new CalendarDate(2025, 6, 15));
</script>

<div>
	<Card>
		<CardHeader>
			<CardTitle>Book the show</CardTitle>
			<CardDescription>Find a date</CardDescription>
			<CardAction>
				<Button size="sm" variant="outline" onclick={() => (value = today(getLocalTimeZone()))}>
					Today
				</Button>
			</CardAction>
		</CardHeader>
		<CardContent>
			<Calendar type="single" bind:value class="bg-transparent p-0" />
		</CardContent>
	</Card>
	<p class="mt-4 text-center text-xs text-muted-foreground" role="region">
		Calendar with today button
	</p>
</div>
