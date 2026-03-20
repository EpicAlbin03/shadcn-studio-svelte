<script lang="ts">
	import { getLocalTimeZone, type CalendarDate } from '@internationalized/date';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import { Button } from '$lib/components/ui/button/index.js';
	import Calendar from '$lib/components/ui/calendar/calendar.svelte';
	import { Label } from '$lib/components/ui/label/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';

	const id = $props.id();
	let open = $state(false);
	let value = $state<CalendarDate | undefined>();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for="{id}-date" class="px-1">Disable outside days</Label>
	<Popover.Root bind:open>
		<Popover.Trigger id="{id}-date">
			{#snippet child({ props })}
				<Button {...props} variant="outline" class="w-full justify-between font-normal">
					{value ? value.toDate(getLocalTimeZone()).toLocaleDateString() : 'Pick a date'}
					<ChevronDownIcon />
				</Button>
			{/snippet}
		</Popover.Trigger>
		<Popover.Content class="w-auto overflow-hidden p-0" align="start">
			<Calendar
				type="single"
				disableDaysOutsideMonth
				bind:value
				onValueChange={() => {
					open = false;
				}}
			/>
		</Popover.Content>
	</Popover.Root>
</div>
