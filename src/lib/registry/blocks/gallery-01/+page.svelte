<script lang="ts">
	import Gallery from './components/gallery-01.svelte';

	const gallerySections = [
		{
			images: [
				{
					src: '/blocks/gallery-01.webp',
					alt: 'Coastal cliffs and ocean view'
				}
			]
		},
		{
			type: 'grid',
			images: [
				{
					src: '/blocks/gallery-02.webp',
					alt: 'Silhouettes on beach'
				},
				{
					src: '/blocks/gallery-03.webp',
					alt: 'Snowy mountain peaks'
				},
				{
					src: '/blocks/gallery-04.webp',
					alt: 'Rolling green hills'
				},
				{
					src: '/blocks/gallery-05.webp',
					alt: 'Sunset landscape'
				}
			]
		},
		{
			type: 'grid',
			images: [
				{
					src: '/blocks/gallery-06.webp',
					alt: 'Silhouettes on beach'
				},
				{
					src: '/blocks/gallery-07.webp',
					alt: 'Snowy mountain peaks'
				},
				{
					src: '/blocks/gallery-08.webp',
					alt: 'Rolling green hills'
				},
				{
					src: '/blocks/gallery-09.webp',
					alt: 'Sunset landscape'
				}
			]
		},
		{
			images: [
				{
					src: '/blocks/gallery-10.webp',
					alt: 'Coastal cliffs and ocean view'
				}
			]
		}
	];
</script>

<Gallery sections={gallerySections} />
