<script lang="ts">
	import { Label } from '$lib/components/ui/label/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Calendar } from '$lib/components/ui/calendar/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import { parseDate } from 'chrono-node';
	import { CalendarDate, getLocalTimeZone, type DateValue } from '@internationalized/date';
	import { untrack } from 'svelte';

	function formatDate(date: DateValue | undefined) {
		if (!date) return '';

		return date.toDate(getLocalTimeZone()).toLocaleDateString('en-US', {
			day: '2-digit',
			month: 'long',
			year: 'numeric'
		});
	}

	const id = $props.id();

	let open = $state(false);
	let inputValue = $state('In 2 days');
	let value = $state<DateValue | undefined>(
		untrack(() => {
			const date = parseDate(inputValue);
			if (date) return new CalendarDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
			return undefined;
		})
	);
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for="{id}-date" class="px-1">Date picker with natural language input</Label>
	<div class="relative flex gap-2">
		<Input
			id="{id}-date"
			bind:value={
				() => inputValue,
				(v) => {
					inputValue = v;
					const date = parseDate(v);
					if (date) {
						value = new CalendarDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
					}
				}
			}
			placeholder="Tomorrow or next week"
			class="bg-background pr-10"
			onkeydown={(e) => {
				if (e.key === 'ArrowDown') {
					e.preventDefault();
					open = true;
				}
			}}
		/>
		<Popover.Root bind:open>
			<Popover.Trigger id="{id}-date-picker">
				{#snippet child({ props })}
					<Button
						{...props}
						variant="ghost"
						class="absolute top-1/2 right-2 size-6 -translate-y-1/2"
					>
						<CalendarIcon class="size-3.5" />
						<span class="sr-only">Select date</span>
					</Button>
				{/snippet}
			</Popover.Trigger>
			<Popover.Content class="w-auto overflow-hidden p-0" align="end">
				<Calendar
					type="single"
					bind:value
					onValueChange={(v) => {
						inputValue = formatDate(v);
						open = false;
					}}
				/>
			</Popover.Content>
		</Popover.Root>
	</div>
	<div class="px-1 text-sm text-muted-foreground">
		Your post will be published on
		<span class="font-medium">{formatDate(value)}</span>.
	</div>
</div>
