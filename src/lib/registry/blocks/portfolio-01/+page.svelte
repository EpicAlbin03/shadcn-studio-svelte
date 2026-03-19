<script lang="ts">
	import Portfolio from './components/portfolio-01.svelte';

	const images: string[] = [
		'/img/blocks/portfolio-37.webp',
		'/img/blocks/portfolio-36.webp',
		'/img/blocks/portfolio-35.webp',
		'/img/blocks/portfolio-34.webp',
		'/img/blocks/portfolio-33.webp',
		'/img/blocks/portfolio-32.webp'
	];
</script>

<Portfolio {images} />
