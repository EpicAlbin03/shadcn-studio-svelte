<script lang="ts">
	import LogoCloud from './components/logo-cloud-01.svelte';

	const logos = [
		{
			image: '/img/blocks/amazon.webp',
			alt: 'Amazon'
		},
		{
			image: '/img/blocks/hubspot.webp',
			alt: 'HubSpot'
		},
		{
			image: '/img/blocks/walmart.webp',
			alt: 'Walmart'
		},
		{
			image: '/img/blocks/microsoft.webp',
			alt: 'Microsoft'
		},
		{
			image: '/img/blocks/evernote.webp',
			alt: 'Evernote'
		},
		{
			image: '/img/blocks/paypal.webp',
			alt: 'PayPal'
		},
		{
			image: '/img/blocks/airbnb.webp',
			alt: 'Airbnb'
		},
		{
			image: '/img/blocks/adobe.webp',
			alt: 'Adobe'
		},
		{
			image: '/img/blocks/shopify.webp',
			alt: 'Shopify'
		},
		{
			image: '/img/blocks/huawei.webp',
			alt: 'Huawei'
		}
	];
</script>

<LogoCloud {logos} />
