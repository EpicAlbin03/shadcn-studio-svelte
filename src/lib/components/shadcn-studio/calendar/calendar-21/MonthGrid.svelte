<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import { watch } from 'runed';
	import type { Snippet } from 'svelte';
	import CollapsibleYear from './CollapsibleYear.svelte';
	import { CalendarDate, endOfYear, getLocalTimeZone, startOfYear } from '@internationalized/date';
	import type { DateRange } from 'bits-ui';

	type Props = {
		class?: string;
		children: Snippet;
		isYearView: boolean;
		startDate: CalendarDate;
		endDate: CalendarDate;
		years: CalendarDate[];
		currentYear: number;
		currentMonth: number;
		onMonthSelect: (date: CalendarDate) => void;
	};

	let {
		class: className,
		children,
		isYearView,
		startDate,
		endDate,
		years,
		currentYear,
		currentMonth,
		onMonthSelect
	}: Props = $props();

	let currentYearRef = $state<HTMLDivElement>();
	let currentMonthButtonRef = $state<HTMLButtonElement>();
	let scrollAreaRef = $state<HTMLDivElement>();

	watch(
		() => isYearView,
		() => {
			if (isYearView && currentYearRef && scrollAreaRef) {
				const viewport = scrollAreaRef.querySelector(
					'[data-radix-scroll-area-viewport]'
				) as HTMLElement;

				if (viewport) {
					const yearTop = currentYearRef.offsetTop;
					viewport.scrollTop = yearTop;
				}

				setTimeout(() => {
					currentMonthButtonRef?.focus();
				}, 100);
			}
		}
	);

	const eachMonthOfInterval = ({ start, end }: { start: CalendarDate; end: CalendarDate }) => {
		let months = [];
		let current = start;

		while (current.compare(end) <= 0) {
			months.push(current);
			current = current.add({ months: 1 });
		}

		return months;
	};
</script>

<div class="relative">
	<table class={className}>{@render children()}</table>
	{#if isYearView}
		<div class="absolute inset-0 z-20 -mx-2 -mb-2 bg-background">
			<ScrollArea bind:ref={scrollAreaRef} class="h-full">
				{#each years as year (year.toDate(getLocalTimeZone()).getFullYear())}
					{@const fullYear = year.toDate(getLocalTimeZone()).getFullYear()}
					{@const months = eachMonthOfInterval({
						start: startOfYear(year),
						end: endOfYear(year)
					})}
					{@const isCurrentYear = fullYear === currentYear}

					<div bind:this={currentYearRef}>
						<CollapsibleYear title={fullYear.toString()} open={isCurrentYear}>
							<div class="grid grid-cols-3 gap-2">
								{#each months as month (month.toDate(getLocalTimeZone()).getTime())}
									{@const isDisabled = month.compare(startDate) < 0 || month.compare(endDate) > 0}
									{@const isCurrentMonth =
										month.toDate(getLocalTimeZone()).getMonth() === currentMonth &&
										fullYear === currentYear}
									{@const formatted = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(
										month.toDate('UTC')
									)}

									<Button
										bind:ref={currentMonthButtonRef}
										variant={isCurrentMonth ? 'default' : 'outline'}
										size="sm"
										class="h-7"
										disabled={isDisabled}
										onclick={() => onMonthSelect(month)}
									>
										{formatted}
									</Button>
								{/each}
							</div>
						</CollapsibleYear>
					</div>
				{/each}
			</ScrollArea>
		</div>
	{/if}
</div>
