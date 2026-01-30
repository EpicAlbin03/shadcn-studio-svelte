<script lang="ts">
	import TestimonialsComponent from './components/testimonials-18.svelte';
	import type { TestimonialItem } from './components/testimonials-18.svelte';

	const testimonials: TestimonialItem[] = [
		{
			name: 'Craig Bator',
			role: 'CEO & Co Founder',
			company: 'Zendesk',
			avatar: '/avatars/01.webp',
			rating: 5,
			content:
				"I've been using shadcn/studio for a year now and it's made managing my finances so much easier and quick."
		},
		{
			name: 'Martin Dorwart',
			role: 'Product manager',
			company: 'Orbit',
			avatar: '/avatars/02.webp',
			rating: 4,
			content:
				"With shadcn/studio, I can easily track my investments and see how they're performing in real-time."
		},
		{
			name: 'Sarah Johnson',
			role: 'Lead Designer',
			company: 'Figma',
			avatar: '/avatars/03.webp',
			rating: 5,
			content:
				"The UI components are beautifully designed and incredibly easy to customize. It's transformed our design workflow."
		},
		{
			name: 'Alex Chen',
			role: 'Frontend Developer',
			company: 'Vercel',
			avatar: '/avatars/04.webp',
			rating: 4,
			content:
				'shadcn/studio has saved us countless hours in development. The component library is comprehensive and well-documented.'
		}
	];
</script>

<TestimonialsComponent {testimonials} />
