<script lang="ts">
	import TotalEarningCard from '$lib/registry/components/widget-01.svelte';

	const earningData = [
		{
			img: '/blocks/zipcar.webp',
			platform: 'Zipcar',
			technologies: 'Vuejs & HTML',
			earnings: '-$23,569.26',
			progressPercentage: 75
		},
		{
			img: '/blocks/bitbank.webp',
			platform: 'Bitbank',
			technologies: 'Figma & React',
			earnings: '-$12,650.31',
			progressPercentage: 25
		},
		{
			img: '/blocks/aviato.webp',
			platform: 'Aviato',
			technologies: 'HTML & Angular',
			earnings: '-$55,699.50',
			progressPercentage: 50
		}
	];
</script>

<div class="mx-auto max-w-7xl px-6 py-8 sm:px-8 sm:py-16">
	<div class="flex justify-center">
		<TotalEarningCard
			title="Total Earning"
			earning={24650}
			trend="up"
			percentage={10}
			comparisonText="Compare to last year ($84,325)"
			{earningData}
			class="w-full max-w-100"
		/>
	</div>
</div>
