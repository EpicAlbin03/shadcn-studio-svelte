<script lang="ts">
	import Blog from './components/blog-15.svelte';

	const blogPosts = [
		{
			title: 'Design Smarter: How User Behavior Shapes Winning Products',
			description: 'Learn how to discover what users truly want and build with confidence.',
			imageUrl: '/blocks/landing-page-04.webp',
			imageAlt: 'Design workspace with color swatches',
			date: 'March 12, 2025',
			category: 'Product',
			author: 'Phillip Palmer',
			authorLink: '#',
			blogLink: '#',
			categoryLink: '#'
		},
		{
			title: 'Nail Your First Launch: A Checklist for Product Debut Success',
			description: 'Avoid common launch traps and create excitement from day one.',
			imageUrl: '/blocks/landing-page-05.webp',
			imageAlt: 'Product launch analytics',
			date: 'January 20, 2025',
			category: 'Startup Growth',
			author: 'Michael Brown',
			authorLink: '#',
			blogLink: '#',
			categoryLink: '#'
		},
		{
			title: 'Why Fast Apps Win: The Blueprint for Lightning-Quick Experiences',
			description: 'Explore proven strategies to boost speed and delight users every time.',
			imageUrl: '/blocks/landing-page-06.webp',
			imageAlt: 'Mobile app development',
			date: 'February 28, 2025',
			category: 'Product',
			author: 'Jane Smith',
			authorLink: '#',
			blogLink: '#',
			categoryLink: '#'
		},
		{
			title: 'Scaling Design the Right Way with a Solid Component System',
			description: 'Build consistency, save time, and ship optimized UI every release.',
			imageUrl: '/blocks/landing-page-07.webp',
			imageAlt: 'Component design system',
			date: 'March 05, 2025',
			category: 'Design',
			author: 'Dylan Field',
			authorLink: '#',
			blogLink: '#',
			categoryLink: '#'
		},
		{
			title: 'Product KPIs That Actually Matter And How to Track Them',
			description: 'Measure progress the right way to build momentum and stay focused.',
			imageUrl: '/blocks/landing-page-08.webp',
			imageAlt: 'Team analyzing KPIs',
			date: 'January 09, 2025',
			category: 'Design',
			author: 'Nina Rich',
			authorLink: '#',
			blogLink: '#',
			categoryLink: '#'
		},
		{
			title: 'How AI-Driven Workflows Are Transforming Product Development',
			description: 'Discover smarter ways to ideate, design, and build using AI tools.',
			imageUrl: '/blocks/landing-page-09.webp',
			imageAlt: 'AI in product development',
			date: 'March 05, 2025',
			category: 'Startup Growth',
			author: 'Startup Growth',
			authorLink: '#',
			blogLink: '#',
			categoryLink: '#'
		}
	];
</script>

<Blog {blogPosts} />
