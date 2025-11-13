<script lang="ts">
	import DashboardSidebar from '$lib/registry/components/dashboard-sidebar-01.svelte';
	import DashboardHeader from '$lib/registry/components/dashboard-header-01.svelte';
	import DashboardFooter from '$lib/registry/components/dashboard-footer-01.svelte';
	import StatisticsCard, {
		type StatisticsCardData
	} from '$lib/registry/components/statistics-01.svelte';
	import ProductInsightsCard from '$lib/registry/components/widget-02.svelte';
	import TotalEarningCard, { type EarningData } from '$lib/registry/components/widget-01.svelte';
	import SalesMetricsCard from '$lib/registry/components/charts-01.svelte';
	import TransactionDatatable, { type TransactionItem } from './data-table-transaction.svelte';
	import * as Card from '$lib/components/ui/card';

	type Props = {
		statisticsCardData: StatisticsCardData[];
		earningData: EarningData[];
		transactionData: TransactionItem[];
	};

	let { statisticsCardData, earningData, transactionData }: Props = $props();
</script>

<DashboardSidebar />
<div class="flex flex-1 flex-col">
	<DashboardHeader />
	<main class="size-full flex-1 px-4 py-6 sm:px-6">
		<div class="grid grid-cols-2 gap-6 lg:grid-cols-3">
			<div class="col-span-full grid gap-6 sm:grid-cols-3 md:max-lg:grid-cols-1">
				{#each statisticsCardData as card}
					<StatisticsCard
						icon={card.icon}
						title={card.title}
						value={card.value}
						changePercentage={card.changePercentage}
					/>
				{/each}
			</div>

			<div class="grid gap-6 max-xl:col-span-full lg:max-xl:grid-cols-2">
				<ProductInsightsCard class="justify-between gap-3 [&>[data-slot=card-content]]:space-y-5" />

				<TotalEarningCard
					title="Total Earning"
					earning={24650}
					trend="up"
					percentage={10}
					comparisonText="Compare to last year ($84,325)"
					{earningData}
					class="justify-between gap-5 sm:min-w-0 [&>[data-slot=card-content]]:space-y-7"
				/>
			</div>

			<SalesMetricsCard
				class="col-span-full xl:col-span-2 [&>[data-slot=card-content]]:space-y-6"
			/>

			<Card.Root class="col-span-full w-full py-0">
				<TransactionDatatable data={transactionData} />
			</Card.Root>
		</div>
	</main>
	<DashboardFooter />
</div>
