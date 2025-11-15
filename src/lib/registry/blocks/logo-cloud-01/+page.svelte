<script lang="ts">
	import LogoCloud from './components/logo-cloud-01.svelte';

	const logos = [
		{
			image: '/blocks/amazon.webp',
			alt: 'Amazon'
		},
		{
			image: '/blocks/hubspot.webp',
			alt: 'HubSpot'
		},
		{
			image: '/blocks/walmart.webp',
			alt: 'Walmart'
		},
		{
			image: '/blocks/microsoft.webp',
			alt: 'Microsoft'
		},
		{
			image: '/blocks/evernote.webp',
			alt: 'Evernote'
		},
		{
			image: '/blocks/paypal.webp',
			alt: 'PayPal'
		},
		{
			image: '/blocks/airbnb.webp',
			alt: 'Airbnb'
		},
		{
			image: '/blocks/adobe.webp',
			alt: 'Adobe'
		},
		{
			image: '/blocks/shopify.webp',
			alt: 'Shopify'
		},
		{
			image: '/blocks/huawei.webp',
			alt: 'Huawei'
		}
	];
</script>

<LogoCloud {logos} />
