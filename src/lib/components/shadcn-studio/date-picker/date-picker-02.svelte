<script lang="ts">
	import RangeCalendar from '$lib/components/ui/range-calendar/range-calendar.svelte';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import { getLocalTimeZone } from '@internationalized/date';
	import type { DateRange } from 'bits-ui';

	const id = $props.id();
	let open = $state(false);
	let value = $state<DateRange | undefined>();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for="{id}-dates" class="px-1">Range date picker</Label>
	<Popover.Root bind:open>
		<Popover.Trigger id="{id}-dates">
			{#snippet child({ props })}
				<Button {...props} variant="outline" class="w-full justify-between font-normal">
					{value?.start && value?.end
						? `${value.start.toDate(getLocalTimeZone()).toLocaleDateString()} - ${value.end.toDate(getLocalTimeZone()).toLocaleDateString()}`
						: 'Pick a date'}
					<ChevronDownIcon />
				</Button>
			{/snippet}
		</Popover.Trigger>
		<Popover.Content class="w-auto overflow-hidden p-0" align="start">
			<RangeCalendar bind:value />
		</Popover.Content>
	</Popover.Root>
</div>
