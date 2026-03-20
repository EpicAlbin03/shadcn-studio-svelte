<script lang="ts">
	import ComponentsGrid from '$lib/components/components-grid.svelte';
	import MetaData from '$lib/components/MetaData.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import ExternalLinkIcon from '@lucide/svelte/icons/external-link';
	import type { PageProps } from './$types';
	import { ComponentCategoryContext } from '$lib/utils/components';

	let { data }: PageProps = $props();

	const components = $derived(data.components);
	const normalComponents = $derived(components.filter((component) => !component.isAnimated));
	const animatedComponents = $derived(components.filter((component) => component.isAnimated));
	const category = $derived(data.category);

	ComponentCategoryContext.set(() => category);

	const title = $derived(`Shadcn ${category.name}`);
	const description = $derived(
		`Elevate your UI with a growing collection of ${components.length} Shadcn ${category.name.toLowerCase()} components, built using shadcn-svelte and TailwindCSS.`
	);
</script>

<MetaData {title} {description} />

<div class="flex flex-1 flex-col space-y-4 p-6 sm:mb-20 sm:space-y-8 sm:p-8">
	<div class="flex flex-col items-start space-y-3">
		<h1 class="text-2xl font-bold sm:text-3xl">{category.name}</h1>
		<p class="text-muted-foreground">
			Elevate your UI with a growing collection of {normalComponents.length} Shadcn {category.name.toLowerCase()}
			components, built using shadcn-svelte and TailwindCSS.
		</p>
	</div>
	<div class="flex items-center space-x-2">
		{#each category.links || [] as link (link.href)}
			<Badge href={link.href} variant="secondary" target="_blank" rel="noreferrer">
				{link.label}
				<ExternalLinkIcon />
			</Badge>
		{/each}
	</div>
	{@render category.note?.()}
	<ComponentsGrid components={normalComponents} breakpoints={category.breakpoints} />
	{#if category.hasAnimation}
		<div id="animated-variants" class="flex flex-col items-start space-y-3 pt-24">
			<h2 class="text-2xl font-bold sm:text-3xl">Animated {category.name}</h2>
			<p class="text-muted-foreground">
				Enhance your UI with {animatedComponents.length}
				animated {category.name.toLowerCase()} components, built using shadcn-svelte, TailwindCSS, and
				motion-svelte.
			</p>
		</div>
		<ComponentsGrid components={animatedComponents} breakpoints={category.animation?.breakpoints} />
	{/if}
</div>
