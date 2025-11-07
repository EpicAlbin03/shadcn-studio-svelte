<script lang="ts">
	import Header, { type NavigationSection } from './components/header.svelte';
	import HeroSection01 from './components/hero-section-01.svelte';

	const navigationData: NavigationSection[] = [
		{
			title: 'Home',
			href: '#'
		},
		{
			title: 'Products',
			href: '#'
		},
		{
			title: 'About Us',
			href: '#'
		},
		{
			title: 'Contacts',
			href: '#'
		}
	];
</script>

<div class="relative">
	<Header {navigationData} />

	<main class="flex flex-col">
		<HeroSection01 />
	</main>
</div>
