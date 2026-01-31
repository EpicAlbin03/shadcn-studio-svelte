<script lang="ts">
	import Blog from './components/blog-17.svelte';

	const blogPosts = [
		{
			title: 'Ship Faster with a Scalable UI Architecture',
			description:
				'Reduce tech debt, accelerate release cycles,  keep your product consistent you grow.',
			imageUrl: '/blocks/landing-page-04.webp',
			imageAlt: 'ship',
			date: 'May 23, 2025',
			category: 'Dev Productivity',
			author: 'Lea Potts',
			authorLink: '#',
			blogLink: '#',
			categoryLink: '#'
		},
		{
			title: 'SEO Playbook for SaaS Products That Scale',
			description:
				'Turn search into compounding sign-ups with a strategy tailored for SaaS funnels.',
			imageUrl: '/blocks/landing-page-10.webp',
			imageAlt: 'Seo',
			date: 'May 15, 2025',
			category: 'SEO',
			author: 'Bella Craig',
			authorLink: '#',
			blogLink: '#',
			categoryLink: '#'
		},
		{
			title: 'Automating Product Delivery with AI Workflows',
			description: 'Replace repetitive tasks with AI-powered and give teams more time to innovate.',
			imageUrl: '/blocks/landing-page-09.webp',
			imageAlt: 'AI',
			date: 'February 28, 2025',
			category: 'AI Automation',
			author: 'Noah Ortega',
			authorLink: '#',
			blogLink: '#',
			categoryLink: '#'
		}
	];
</script>

<Blog {blogPosts} />
