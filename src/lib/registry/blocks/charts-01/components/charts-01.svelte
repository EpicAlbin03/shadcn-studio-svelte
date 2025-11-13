<script lang="ts">
	import {
		BadgePercentIcon,
		ChartNoAxesCombinedIcon,
		CirclePercentIcon,
		DollarSignIcon,
		ShoppingBagIcon,
		TrendingUpIcon
	} from '@lucide/svelte';
	import { BarChart, PieChart, Text, type ChartContextValue } from 'layerchart';
	import { scaleBand } from 'd3-scale';
	import * as Avatar from '$lib/components/ui/avatar';
	import * as Card from '$lib/components/ui/card';
	import * as Chart from '$lib/components/ui/chart';
	import { cubicInOut } from 'svelte/easing';

	const salesPlanPercentage = 54;
	const totalBars = 24;
	const barValue = 315;
	const filledBars = Math.round((salesPlanPercentage * totalBars) / 100);

	// Sales chart data
	const salesChartData = Array.from({ length: totalBars }, (_, index) => {
		const date = new Date(2025, 5, 15);

		const formattedDate = date.toLocaleDateString('en-GB', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric'
		});

		return {
			date: formattedDate,
			index,
			sales: index < filledBars ? barValue : 0,
			background: barValue
		};
	});

	const salesChartConfig = {
		sales: {
			label: 'Sales',
			color: 'var(--primary)'
		},
		background: {
			label: 'Background',
			color: 'color-mix(in oklab, var(--primary) 12%, transparent)'
		}
	} satisfies Chart.ChartConfig;

	const MetricsData = [
		{
			icon: TrendingUpIcon,
			title: 'Sales trend',
			value: '$11,548'
		},
		{
			icon: BadgePercentIcon,
			title: 'Discount offers',
			value: '$1,326'
		},
		{
			icon: DollarSignIcon,
			title: 'Net profit',
			value: '$17,356'
		},
		{
			icon: ShoppingBagIcon,
			title: 'Total orders',
			value: '248'
		}
	];

	const revenueChartConfig = {
		sales: {
			label: 'Sales'
		},
		january: {
			label: 'January',
			color: 'var(--primary)'
		},
		february: {
			label: 'February',
			color: 'color-mix(in oklab, var(--primary) 60%, transparent)'
		},
		march: {
			label: 'March',
			color: 'color-mix(in oklab, var(--primary) 20%, transparent)'
		}
	} satisfies Chart.ChartConfig;

	const revenueChartData = [
		{ month: 'january', sales: 340, color: revenueChartConfig.january.color },
		{ month: 'february', sales: 200, color: revenueChartConfig.february.color },
		{ month: 'march', sales: 200, color: revenueChartConfig.march.color }
	];

	type Props = { class?: string };

	let { class: className }: Props = $props();

	const totalProfit = revenueChartData.reduce((acc, curr) => acc + curr.sales, 0);
	let salesContext = $state<ChartContextValue>();
	const salesBarColors = [salesChartConfig.background.color, salesChartConfig.sales.color];
</script>

<Card.Root class={className}>
	<Card.Content class="space-y-4">
		<div class="grid gap-6 lg:grid-cols-5">
			<div class="flex flex-col gap-7 lg:col-span-3">
				<span class="text-lg font-semibold">Sales metrics</span>
				<div class="flex items-center gap-3">
					<img src="/apple-touch-icon.png" class="size-10.5 rounded-lg" alt="logo" />
					<div class="flex flex-col gap-0.5">
						<span class="text-xl font-medium">Sandy&apos; Company</span>
						<span class="text-sm text-muted-foreground">sandy@company.com</span>
					</div>
				</div>

				<div class="grid gap-4 sm:grid-cols-2">
					{#each MetricsData as metric}
						{@const Icon = metric.icon}
						<div class="flex items-center gap-3 rounded-md border px-4 py-2">
							<Avatar.Root class="size-8.5 rounded-sm">
								<Avatar.Fallback class="shrink-0 rounded-sm bg-primary/10 text-primary">
									<Icon class="size-5" />
								</Avatar.Fallback>
							</Avatar.Root>
							<div class="flex flex-col gap-0.5">
								<span class="text-sm font-medium text-muted-foreground">{metric.title}</span>
								<span class="text-lg font-medium">{metric.value}</span>
							</div>
						</div>
					{/each}
				</div>
			</div>
			<Card.Root class="gap-4 py-4 shadow-none lg:col-span-2">
				<Card.Header class="gap-1">
					<Card.Title class="text-lg font-semibold">Revenue goal</Card.Title>
				</Card.Header>

				<Card.Content class="px-0">
					<Chart.Container config={revenueChartConfig} class="h-38.5 w-full">
						<PieChart
							data={revenueChartData}
							key="month"
							value="sales"
							c="color"
							innerRadius={58}
							outerRadius={75}
							padAngle={0.02}
							props={{ pie: { motion: 'tween' } }}
						>
							{#snippet aboveMarks()}
								<Text
									value={String(totalProfit)}
									textAnchor="middle"
									verticalAnchor="middle"
									class="fill-card-foreground text-lg! font-medium"
									dy={-12}
								/>
								<Text
									value="Total Profit"
									textAnchor="middle"
									verticalAnchor="middle"
									class="fill-muted-foreground! text-sm!"
									dy={19}
								/>
							{/snippet}
							{#snippet tooltip()}
								<Chart.Tooltip hideLabel />
							{/snippet}
						</PieChart>
					</Chart.Container>
				</Card.Content>

				<Card.Footer class="justify-between">
					<span class="text-xl">Plan completed</span>
					<span class="text-2xl font-medium">56%</span>
				</Card.Footer>
			</Card.Root>
		</div>
		<Card.Root class="shadow-none">
			<Card.Content class="grid gap-4 px-4 lg:grid-cols-5">
				<div class="flex flex-col justify-center gap-6">
					<span class="text-lg font-semibold">Sales plan</span>
					<span class="max-lg:5xl text-6xl">{salesPlanPercentage}%</span>
					<span class="text-sm text-muted-foreground">Percentage profit from total sales</span>
				</div>
				<div class="flex flex-col gap-6 text-lg md:col-span-4">
					<span class="font-medium">Cohort analysis indicators</span>
					<span class="text-wrap text-muted-foreground">
						Analyzes the behaviour of a group of users who joined a product/service at the same
						time. over a certain period.
					</span>
					<div class="grid gap-6 md:grid-cols-2">
						<div class="flex items-center gap-2">
							<ChartNoAxesCombinedIcon class="size-6" />
							<span class="text-lg font-medium">Open Statistics</span>
						</div>
						<div class="flex items-center gap-2">
							<CirclePercentIcon class="size-6" />
							<span class="text-lg font-medium">Percentage Change</span>
						</div>
					</div>

					<Chart.Container config={salesChartConfig} class="h-8.5 w-full">
						<BarChart
							bind:context={salesContext}
							data={salesChartData}
							xScale={scaleBand().padding(0.32)}
							x="index"
							y="sales"
							yDomain={[0, barValue]}
							axis={false}
							tooltip={false}
							grid={false}
							rule={false}
							cRange={salesBarColors}
							series={[
								{
									key: 'background',
									label: salesChartConfig.background.label,
									color: salesChartConfig.background.color,
									value: 'background',
									props: {
										class: 'opacity-60'
									}
								},
								{
									key: 'sales',
									label: salesChartConfig.sales.label,
									color: salesChartConfig.sales.color,
									value: 'sales',
									props: {
										motion: {
											x: { type: 'tween', duration: 500, easing: cubicInOut },
											width: { type: 'tween', duration: 500, easing: cubicInOut },
											height: { type: 'tween', duration: 500, easing: cubicInOut },
											y: { type: 'tween', duration: 500, easing: cubicInOut }
										}
									}
								}
							]}
							props={{
								bars: {
									stroke: 'none',
									rounded: 'all',
									radius: 8,
									// use the height of the chart to animate the bars
									initialY: salesContext?.height,
									initialHeight: 0
								},
								highlight: { area: { fill: 'none' } }
							}}
						/>
					</Chart.Container>
				</div>
			</Card.Content>
		</Card.Root>
	</Card.Content>
</Card.Root>
