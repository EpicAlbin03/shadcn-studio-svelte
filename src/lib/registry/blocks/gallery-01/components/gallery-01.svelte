<script lang="ts">
	import { cn } from '$lib/utils';

	type GalleryImage = {
		src: string;
		alt: string;
	};

	type GallerySection = {
		type?: string;
		images: GalleryImage[];
	};

	type Props = { sections: GallerySection[] };

	let { sections }: Props = $props();
</script>

<section class="py-8 sm:py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
			<h2 class="text-2xl font-semibold md:text-3xl lg:text-4xl">
				<span class="relative z-1">
					Explore our
					<span class="absolute bottom-1 left-0 -z-1 h-px w-full bg-primary" aria-hidden="true"
					></span>
				</span>{' '}
				Gallery
			</h2>
			<p class="text-xl text-muted-foreground">
				Explore our gallery to learn more about our amazing products and their features.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2">
			{#each sections as section}
				<div class={cn({ 'grid grid-cols-2 gap-6': section.type === 'grid' })}>
					{#each section.images as image}
						<img src={image.src} alt={image.alt} class="rounded-lg object-cover" />
					{/each}
				</div>
			{/each}
		</div>
	</div>
</section>
