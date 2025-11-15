<script lang="ts">
	import { CalendarIcon } from '@lucide/svelte';
	import { Calendar } from '$lib/components/ui/calendar';
	import { CalendarDate, DateFormatter, getLocalTimeZone, today } from '@internationalized/date';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Label } from '$lib/components/ui/label';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { cn } from '$lib/utils';
	import { Button } from '$lib/components/ui/button';

	const id = $props.id();

	let open = $state(false);
	let value = $state<CalendarDate | undefined>(today(getLocalTimeZone()));

	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});
</script>

<div>
	<Card.Root class="gap-5 py-5">
		<Card.Header class="flex items-center gap-2 border-b px-3 !pb-3">
			<div class="flex w-full flex-col gap-3">
				<Label for={id} class="text-xs">Enter Date</Label>
				<Popover.Root bind:open>
					<Popover.Trigger>
						{#snippet child({ props })}
							<Button
								{id}
								variant="outline"
								class={cn('justify-start text-left font-normal', !value && 'text-muted-foreground')}
								{...props}
							>
								<CalendarIcon class="mr-2 size-4" />
								{value ? df.format(value.toDate(getLocalTimeZone())) : 'Select a date'}
							</Button>
						{/snippet}
					</Popover.Trigger>
					<Popover.Content class="w-auto p-0">
						<Calendar bind:value onValueChange={() => (open = false)} type="single" initialFocus />
					</Popover.Content>
				</Popover.Root>
			</div>
		</Card.Header>
		<Card.Content class="px-5">
			<Calendar type="single" bind:value class="bg-transparent p-0" />
		</Card.Content>
	</Card.Root>
	<p class="mt-4 text-center text-xs text-muted-foreground" role="region">
		Calendar with date input
	</p>
</div>
