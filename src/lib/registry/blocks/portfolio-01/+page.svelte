<script lang="ts">
	import Portfolio from './components/portfolio-01.svelte';

	const images: string[] = [
		'/blocks/portfolio-01.webp',
		'/blocks/portfolio-02.webp',
		'/blocks/portfolio-03.webp',
		'/blocks/portfolio-04.webp',
		'/blocks/portfolio-05.webp',
		'/blocks/portfolio-06.webp'
	];
</script>

<Portfolio {images} />
