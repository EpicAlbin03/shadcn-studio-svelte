<script lang="ts">
	import Calendar from '$lib/components/ui/calendar/calendar.svelte';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import { getLocalTimeZone, type CalendarDate } from '@internationalized/date';

	const id = $props.id();
	let open = $state(false);
	let value = $state<CalendarDate | undefined>();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for="{id}-date" class="px-1">Date picker</Label>
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
				bind:value
				onValueChange={() => {
					open = false;
				}}
			/>
		</Popover.Content>
	</Popover.Root>
</div>
