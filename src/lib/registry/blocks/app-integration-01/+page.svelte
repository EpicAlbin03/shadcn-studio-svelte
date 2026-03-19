<script lang="ts">
	import AppIntegration from './components/app-integration-01.svelte';

	const integrations = [
		{
			name: 'Microsoft',
			description: 'Empowering Innovation and Connectivity',
			image: '/img/blocks/microsoft-icon.webp',
			alt: 'Microsoft'
		},
		{
			name: 'Spotify',
			description: 'Your soundtrack to every moment.',
			image: '/img/blocks/spotify-icon.webp',
			alt: 'Spotify'
		},
		{
			name: 'Github',
			description: 'Your Hub for Open Source Innovation',
			image: '/img/blocks/github-icon.webp',
			alt: 'Github'
		}
	];
</script>

<AppIntegration {integrations} />
