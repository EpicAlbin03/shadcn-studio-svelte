<script lang="ts">
	import Header from './components/header.svelte';
	import HeroSection from './components/hero-41.svelte';
	import type { NavigationSection } from './components/menu-navigation.svelte';

	const navigationData: NavigationSection[] = [
		{
			title: 'About Us',
			href: '#'
		},
		{
			title: 'Testimonials',
			href: '#'
		},
		{
			title: 'Contact us',
			href: '#'
		},
		{
			title: 'Offers',
			href: '#'
		}
	];

	const menudata = [
		{
			id: 1,
			img: '/blocks/bistro-18.webp',
			imgAlt: 'plate-1',
			userComment:
				'The ambiance is perfect and the food is absolutely delicious. Highly recommended!',
			userAvatar: '/avatars/56.webp'
		},
		{
			id: 2,
			img: '/blocks/bistro-19.webp',
			imgAlt: 'plate-2',
			userComment:
				'Best dining experience in town. The staff is friendly and the menu is exceptional.',
			userAvatar: '/avatars/46.webp'
		},
		{
			id: 3,
			img: '/blocks/bistro-20.webp',
			imgAlt: 'plate-3',
			userComment: 'Every dish is crafted with care. This place never disappoints!',
			userAvatar: '/avatars/57.webp'
		},
		{
			id: 4,
			img: '/blocks/bistro-05.webp',
			imgAlt: 'plate-4',
			userComment: 'Great atmosphere and incredible flavors. A must-visit restaurant!',
			userAvatar: '/avatars/58.webp'
		},
		{
			id: 5,
			img: '/blocks/bistro-20.webp',
			imgAlt: 'plate-3',
			userComment: 'Every dish is crafted with care. This place never disappoints!',
			userAvatar: '/avatars/57.webp'
		}
	];
</script>

<div class="overflow-x-hidden">
	<Header {navigationData} />

	<main class="flex flex-col pt-17.5">
		<HeroSection {menudata} />
	</main>
</div>
