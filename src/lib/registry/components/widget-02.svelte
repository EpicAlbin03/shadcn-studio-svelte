<script lang="ts">
	import { BarChart, type ChartContextValue } from 'layerchart';
	import * as Card from '$lib/components/ui/card';
	import * as Chart from '$lib/components/ui/chart';
	import { Separator } from '$lib/components/ui/separator';
	import { cn } from '$lib/utils';
	import { cubicInOut } from 'svelte/easing';

	// Product reached data
	const productReachChartData = [
		{ month: 'January', reached: 168 },
		{ month: 'February', reached: 305 },
		{ month: 'March', reached: 213 },
		{ month: 'April', reached: 330 },
		{ month: 'May', reached: 305 }
	];

	const productReachChartConfig = {
		reached: {
			label: 'Reached',
			color: 'var(--primary)'
		}
	} satisfies Chart.ChartConfig;

	// Order placed data
	const orderPlacedChartData = [
		{ month: 'January', orders: 168 },
		{ month: 'February', orders: 305 },
		{ month: 'March', orders: 213 },
		{ month: 'April', orders: 330 },
		{ month: 'May', orders: 305 }
	];

	const orderPlacedChartConfig = {
		orders: {
			label: 'Orders',
			color: 'color-mix(in oklab, var(--primary) 10%, transparent)'
		}
	} satisfies Chart.ChartConfig;

	type Props = { class?: string };

	let { class: className }: Props = $props();

	let context = $state<ChartContextValue>();
</script>

<Card.Root class={cn('gap-4', className)}>
	<Card.Header class="flex justify-between gap-2">
		<div class="flex flex-col gap-1">
			<span class="text-lg font-semibold">Product insight</span>
			<span class="text-sm text-muted-foreground">Published on 12 MAY 2025 - 6:10 PM</span>
		</div>
		<img src="/blocks/widget-02.webp" alt="Product" class="w-20.5 rounded-md" />
	</Card.Header>
	<Card.Content class="space-y-4">
		<Separator />
		<div class="flex items-center justify-between gap-1">
			<div class="flex flex-col gap-1">
				<span class="text-xs">Product reached</span>
				<span class="text-2xl font-semibold">21,153</span>
			</div>
			<Chart.Container config={productReachChartConfig} class="min-h-13 max-w-18">
				<BarChart
					bind:context
					data={productReachChartData}
					x="month"
					axis={false}
					tooltip={false}
					grid={false}
					rule={false}
					series={[
						{ key: 'reached', label: 'Reached', color: productReachChartConfig.reached.color }
					]}
					props={{
						bars: {
							stroke: 'none',
							rounded: 'all',
							radius: 2,
							// use the height of the chart to animate the bars
							initialY: context?.height,
							initialHeight: 0,
							motion: {
								x: { type: 'tween', duration: 500, easing: cubicInOut },
								width: { type: 'tween', duration: 500, easing: cubicInOut },
								height: { type: 'tween', duration: 500, easing: cubicInOut },
								y: { type: 'tween', duration: 500, easing: cubicInOut }
							}
						},
						highlight: { area: { fill: 'none' } }
					}}
				/>
			</Chart.Container>
		</div>

		<div class="flex items-center justify-between gap-1">
			<div class="flex flex-col gap-1">
				<span class="text-xs">Order placed </span>
				<span class="text-2xl font-semibold">2,123</span>
			</div>
			<Chart.Container config={orderPlacedChartConfig} class="min-h-13 max-w-18">
				<BarChart
					bind:context
					data={orderPlacedChartData}
					x="month"
					axis={false}
					tooltip={false}
					grid={false}
					rule={false}
					series={[{ key: 'orders', label: 'Orders', color: orderPlacedChartConfig.orders.color }]}
					props={{
						bars: {
							stroke: 'none',
							rounded: 'all',
							radius: 2,
							// use the height of the chart to animate the bars
							initialY: context?.height,
							initialHeight: 0,
							motion: {
								x: { type: 'tween', duration: 500, easing: cubicInOut },
								width: { type: 'tween', duration: 500, easing: cubicInOut },
								height: { type: 'tween', duration: 500, easing: cubicInOut },
								y: { type: 'tween', duration: 500, easing: cubicInOut }
							}
						},
						highlight: { area: { fill: 'none' } }
					}}
				/>
			</Chart.Container>
		</div>
	</Card.Content>
</Card.Root>
