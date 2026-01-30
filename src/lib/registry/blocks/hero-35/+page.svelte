<script lang="ts">
	import Header from './components/header.svelte';
	import HeroSection from './components/hero-35.svelte';
	import type { NavigationSection } from './components/menu-navigation.svelte';

	const navigationData: NavigationSection[] = [
		{
			title: 'Home',
			href: '#'
		},
		{
			title: 'Categories',
			href: '#'
		},
		{
			title: 'Team',
			href: '#'
		},
		{
			title: 'About Us',
			href: '#'
		}
	];

	const blogdata = [
		{
			img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/ink/image-02.png',
			date: 'January 20, 2026',
			blogTitle: 'Build with Empathy for Better User Outcomes',
			description: 'Understand user needs to create intuitive and lovable experiences.',
			author: 'Allen Reilly',
			badge: 'UI',
			authorLink: '#',
			blogLink: '#',
			categoryLink: '#'
		},
		{
			img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/ink/image-03.png',
			date: 'May 20, 2025',
			blogTitle: 'Write Code That Scales with Your Product',
			description: 'Structure your projects for easier updates, faster growth, and bugs.',
			author: 'Sara Wilkerson',
			badge: 'Coding',
			authorLink: '#',
			blogLink: '#',
			categoryLink: '#'
		}
	];
</script>

<div class="overflow-x-hidden">
	<Header {navigationData} />

	<main class="flex flex-col pt-17.5">
		<HeroSection {blogdata} />
	</main>
</div>
