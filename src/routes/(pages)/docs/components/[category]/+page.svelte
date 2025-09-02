<script lang="ts">
	import ComponentsGrid from '$lib/components/ComponentsGrid.svelte';
	import MetaData from '$lib/components/MetaData.svelte';
	import { getCategory } from '$lib/config/components.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const validComponentsData = $derived(data.validComponentsData);
	const category = $derived(getCategory(data.category.slug));
	const components = $derived(data.components);

	export async function generateMetadata(
		{ params }: Props,
		parent: ResolvingMetadata
	): Promise<Metadata> {
		const category = getCategory((await params).category);

		if (!category || category.isComingSoon) {
			return {};
		}

		const components = getComponentsByNames(category.components.map((item) => item.name));
		const parentMetadata = await parent;

		return {
			title: `Shadcn ${category.name}`,
			description: `Elevate your UI with a growing collection of ${components.length} Shadcn ${category.name.toLowerCase()} components, built using React and Tailwind CSS.`,
			openGraph: {
				title: `Shadcn ${category.name}`,
				description: `Elevate your UI with a growing collection of ${components.length} Shadcn ${category.name.toLowerCase()} components, built using React and Tailwind CSS.`,
				url: `https://shadcnstudio.com/docs/components/${category.slug}`,
				images: parentMetadata.openGraph?.images
			},
			twitter: {
				card: parentMetadata.twitter?.card || 'summary_large_image',
				title: `Shadcn ${category.name}`,
				description: `Elevate your UI with a growing collection of ${components.length} Shadcn ${category.name.toLowerCase()} components, built using React and Tailwind CSS.`
			},
			alternates: {
				canonical: `https://shadcnstudio.com/docs/components/${category.slug}`
			}
		};
	}

	const title = `Shadcn ${category.name}`;
	const description = `Elevate your UI with a growing collection of ${components.length} Shadcn ${category.name.toLowerCase()} components, built using React and Tailwind CSS.`;
</script>

{#if category || !category.isComingSoon}
	<MetaData {title} {description} />
{/if}

<div class="flex flex-1 flex-col space-y-4 p-4 sm:space-y-8 sm:p-8">
	<div class="flex flex-col items-start space-y-3">
		<h1 class="text-2xl font-bold sm:text-3xl">{`Shadcn ${category.name}`}</h1>
		<p class="text-muted-foreground">
			{`Elevate your UI with a growing collection of ${components.filter((component) => !component?.isAnimated).length} Shadcn ${category.name.toLowerCase()} components, built using React and Tailwind CSS.`}
		</p>
	</div>
	{category.note}
	<ComponentsGrid
		components={components.filter((component) => !component?.isAnimated)}
		slug={category.slug}
		{validComponentsData}
		breakpoints={category.breakpoints}
	/>
	{#if category.hasAnimation}
		<div id="animated-variants" class="flex flex-col items-start space-y-3 pt-24">
			<h2 class="text-2xl font-bold sm:text-3xl">{`Animated ${category.name}`}</h2>
			<p class="text-muted-foreground">
				{`Enhance your interface with ${components.filter((component) => component?.isAnimated).length} animated ${category.name.toLowerCase()} components, crafted with React, Tailwind CSS, and Motion for smooth, interactive animations.`}
			</p>
		</div>
		<ComponentsGrid
			components={components.filter((component) => !component?.isAnimated)}
			slug={category.slug}
			{validComponentsData}
			breakpoints={category.animation?.breakpoints}
		/>
	{/if}
</div>
