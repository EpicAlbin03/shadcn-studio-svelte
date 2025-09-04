<script lang="ts">
	import { CalendarIcon } from '@lucide/svelte';
	import { Calendar } from '$lib/components/ui/calendar';
	import { CalendarDate, DateFormatter, getLocalTimeZone, today } from '@internationalized/date';
	import { Card, CardContent, CardHeader } from '$lib/components/ui/card';
	import { Label } from '$lib/components/ui/label';
	import { Popover, PopoverContent, PopoverTrigger } from '$lib/components/ui/popover';
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
	<Card class="gap-5 py-5">
		<CardHeader class="flex items-center gap-2 border-b px-3 !pb-3">
			<div class="flex w-full flex-col gap-3">
				<Label for={`${id}-date`} class="text-xs">Enter Date</Label>
				<Popover bind:open>
					<PopoverTrigger>
						{#snippet child({ props })}
							<Button
								id={`${id}-date`}
								variant="outline"
								class={cn('justify-start text-left font-normal', !value && 'text-muted-foreground')}
								{...props}
							>
								<CalendarIcon class="mr-2 size-4" />
								{value ? df.format(value.toDate(getLocalTimeZone())) : 'Select a date'}
							</Button>
						{/snippet}
					</PopoverTrigger>
					<PopoverContent class="w-auto p-0">
						<Calendar bind:value onValueChange={() => (open = false)} type="single" initialFocus />
					</PopoverContent>
				</Popover>
			</div>
		</CardHeader>
		<CardContent class="px-5">
			<Calendar type="single" bind:value class="bg-transparent p-0" />
		</CardContent>
	</Card>
	<p class="mt-4 text-center text-xs text-muted-foreground" role="region">
		Calendar with date input
	</p>
</div>
