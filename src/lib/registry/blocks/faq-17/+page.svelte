<script lang="ts">
	import FAQ from './components/faq-17.svelte';

	const faqItems = [
		{
			question: 'What does your company do?',
			answer:
				"Our company specializes in delivering high-quality solutions that are tailored to meet the evolving needs of businesses and individuals. Whether it's a digital product, a creative service, or a custom solution."
		},
		{
			question: 'What services do you offer?',
			answer:
				'We offer a wide range of services including web development, graphic design, digital marketing, and custom software solutions. Our team works closely with clients to create personalized strategies that help them achieve their goals.'
		}
	];
</script>

<FAQ {faqItems} />
