<script lang="ts">
	import PlanDialog from './components/dashboard-dialog-01.svelte';

	const plansData = [
		{
			id: '1',
			title: 'Basic plan',
			price: 10,
			description: 'Includes 20GB individual data.',
			features: ['32+ integrations', 'Basic reporting', '20GB individual data', 'Basic support']
		},
		{
			id: '2',
			title: 'Starter Package',
			price: 12,
			description: 'Comes with 512GB personal data.',
			features: [
				'35+ integrations',
				'Essential reporting features',
				'512GB personal data included',
				'Standard support services'
			]
		}
	];
</script>

<div class="flex h-dvh items-start justify-center p-8">
	<PlanDialog open data={plansData} />
</div>
