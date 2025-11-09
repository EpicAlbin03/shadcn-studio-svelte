<script lang="ts">
	import SocialProof from './components/social-proof-01.svelte';

	const features = [
		{
			title: 'Powerful Campaign Tracking & ROI Analysis',
			description: 'Track campaign performance and analyze return on investment'
		},
		{
			title: 'Customizable Reporting & Data Exportation',
			description: 'Create custom reports and export data easily'
		}
	];
</script>

<SocialProof {features} />
