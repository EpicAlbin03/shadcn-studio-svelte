<script lang="ts">
	import ComponentsGrid from '$lib/components/ComponentsGrid.svelte';
	import MetaData from '$lib/components/MetaData.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { ExternalLinkIcon } from '@lucide/svelte';
	import type { PageProps } from './$types';
	import { ComponentCategoryContext } from '$lib/utils/components';

	let { data }: PageProps = $props();

	const validComponentsData = $derived(data.validComponentsData);
	const category = $derived(data.category);
	const components = $derived(data.components);

	ComponentCategoryContext.set(data.category);

	const title = $derived(`Shadcn ${category.name}`);
	const description = $derived(
		`Elevate your UI with a growing collection of ${components.length} Shadcn ${category.name.toLowerCase()} components, built using Svelte and Tailwind CSS.`
	);
</script>

<MetaData {title} {description} />

<div class="flex flex-1 flex-col space-y-4 p-6 sm:mb-20 sm:space-y-8 sm:p-8">
	<div class="flex flex-col items-start space-y-3">
		<h1 class="text-2xl font-bold sm:text-3xl">Shadcn {category.name}</h1>
		<p class="text-muted-foreground">
			Elevate your UI with a growing collection of {components.filter(
				(component) => !component?.isAnimated
			).length} Shadcn {category.name.toLowerCase()} components, built using Svelte and Tailwind CSS.
		</p>
	</div>
	<div class="flex items-center space-x-2">
		{#each category.links || [] as link}
			<Badge href={link.href} variant="secondary" target="_blank" rel="noreferrer">
				{link.label}
				<ExternalLinkIcon />
			</Badge>
		{/each}
	</div>
	{@render category.note?.()}
	<ComponentsGrid
		components={components.filter((component) => !component?.isAnimated)}
		slug={category.slug}
		{validComponentsData}
		breakpoints={category.breakpoints}
	/>
	{#if category.hasAnimation}
		<div id="animated-variants" class="flex flex-col items-start space-y-3 pt-24">
			<h2 class="text-2xl font-bold sm:text-3xl">Animated {category.name}</h2>
			<p class="text-muted-foreground">
				Enhance your interface with {components.filter((component) => component?.isAnimated).length}
				animated {category.name.toLowerCase()} components, crafted with Svelte, Tailwind CSS, and Motion
				for smooth, interactive animations.
			</p>
		</div>
		<ComponentsGrid
			components={components.filter((component) => component?.isAnimated)}
			slug={category.slug}
			{validComponentsData}
			breakpoints={category.animation?.breakpoints}
		/>
	{/if}
</div>
