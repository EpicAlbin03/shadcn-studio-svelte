<script lang="ts">
	import { CalendarX2Icon, Clock8Icon, TriangleAlertIcon, TruckIcon } from '@lucide/svelte';
	import StatisticsCard from './components/statistics-01.svelte';

	const StatisticsCardData = [
		{
			icon: TruckIcon,
			value: '42',
			title: 'Shipped Orders',
			changePercentage: '+18.2%'
		},
		{
			icon: TriangleAlertIcon,
			value: '8',
			title: 'Damaged Returns',
			changePercentage: '-8.7%'
		},
		{
			icon: CalendarX2Icon,
			value: '27',
			title: 'Missed Delivery Slots',
			changePercentage: '+4.3%'
		},
		{
			icon: Clock8Icon,
			value: '13',
			title: 'Late Deliveries',
			changePercentage: '-2.5%'
		}
	];
</script>

<div class="py-8 sm:py-16 lg:py-24">
	<div class="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
		{#each StatisticsCardData as card}
			<StatisticsCard
				icon={card.icon}
				title={card.title}
				value={card.value}
				changePercentage={card.changePercentage}
			/>
		{/each}
	</div>
</div>
