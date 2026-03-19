<script lang="ts">
	import Portfolio from './components/portfolio-01.svelte';

	const images: string[] = [
		'/img/blocks/portfolio-01.webp',
		'/img/blocks/portfolio-02.webp',
		'/img/blocks/portfolio-03.webp',
		'/img/blocks/portfolio-04.webp',
		'/img/blocks/portfolio-05.webp',
		'/img/blocks/portfolio-06.webp'
	];
</script>

<Portfolio {images} />
