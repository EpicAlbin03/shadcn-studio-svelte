<script lang="ts">
	import Blog from './components/blog-01.svelte';

	const blogCards = [
		{
			img: '/blocks/blog-01.webp',
			alt: 'Modern house',
			title: 'Laws of Transfer of Immovable Property',
			description:
				'Experience the charm of this lovely and cozy apartment, featuring warm decor and inviting spaces, perfect for relaxation and comfort, ideal for your next getaway.',
			blogLink: '#'
		},
		{
			img: '/blocks/blog-02.webp',
			alt: 'Traditional house',
			title: 'Thane Development Plan 2026 & Master Plan',
			description:
				'Discover a unique nook in the heart of the city, offering convenience and access to attractions. Stylishly designed, it provides a comfortable retreat.',
			blogLink: '#'
		},
		{
			img: '/blocks/blog-03.webp',
			alt: 'Modern house with pool',
			title: 'What is a Property Sale Agreement?',
			description:
				'Welcome to this charming independent house bedroom, featuring a spacious layout and cozy furnishings. Enjoy abundant natural light and peaceful.',
			blogLink: '#'
		}
	];
</script>

<Blog {blogCards} />
