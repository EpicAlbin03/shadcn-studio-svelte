<script lang="ts">
	import Gallery from './components/gallery-01.svelte';

	const gallerySections = [
		{
			images: [
				{
					src: '/img/blocks/gallery-10.webp',
					alt: 'Coastal cliffs and ocean view'
				}
			]
		},
		{
			type: 'grid',
			images: [
				{
					src: '/img/blocks/gallery-09.webp',
					alt: 'Silhouettes on beach'
				},
				{
					src: '/img/blocks/gallery-08.webp',
					alt: 'Snowy mountain peaks'
				},
				{
					src: '/img/blocks/gallery-07.webp',
					alt: 'Rolling green hills'
				},
				{
					src: '/img/blocks/gallery-06.webp',
					alt: 'Sunset landscape'
				}
			]
		},
		{
			type: 'grid',
			images: [
				{
					src: '/img/blocks/gallery-05.webp',
					alt: 'Silhouettes on beach'
				},
				{
					src: '/img/blocks/gallery-04.webp',
					alt: 'Snowy mountain peaks'
				},
				{
					src: '/img/blocks/gallery-03.webp',
					alt: 'Rolling green hills'
				},
				{
					src: '/img/blocks/gallery-02.webp',
					alt: 'Sunset landscape'
				}
			]
		},
		{
			images: [
				{
					src: '/img/blocks/gallery-1.webp',
					alt: 'Coastal cliffs and ocean view'
				}
			]
		}
	];
</script>

<Gallery sections={gallerySections} />
