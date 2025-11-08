<script lang="ts">
	import Pricing from './components/pricing-01.svelte';

	const pricingData = [
		{
			id: 'starter',
			title: 'Starter',
			description: 'Ideal for crypto pros!',
			monthly: 99,
			annual: 999
		},
		{
			id: 'professional',
			title: 'Professional',
			description: 'Ideal for business owners.',
			monthly: 199,
			annual: 1999
		}
	];
</script>

<Pricing {pricingData} />
