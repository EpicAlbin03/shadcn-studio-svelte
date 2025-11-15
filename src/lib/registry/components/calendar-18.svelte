<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Calendar } from '$lib/components/ui/calendar';
	import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';
	import * as Card from '$lib/components/ui/card/index.js';

	let value = $state<CalendarDate | undefined>(new CalendarDate(2025, 6, 15));
</script>

<div>
	<Card.Root>
		<Card.Header>
			<Card.Title>Book the show</Card.Title>
			<Card.Description>Find a date</Card.Description>
			<Card.Action>
				<Button size="sm" variant="outline" onclick={() => (value = today(getLocalTimeZone()))}>
					Today
				</Button>
			</Card.Action>
		</Card.Header>
		<Card.Content>
			<Calendar type="single" bind:value class="bg-transparent p-0" />
		</Card.Content>
	</Card.Root>
	<p class="mt-4 text-center text-xs text-muted-foreground" role="region">
		Calendar with today button
	</p>
</div>
