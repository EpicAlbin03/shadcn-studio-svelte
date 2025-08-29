<script lang="ts">
	import type { ComponentProps, ProcessedComponentsData } from '$lib/types/components';
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import { ComponentCard, ComponentDetails, ComponentLoader } from './component';

	type Props = {
		components: ComponentProps[];
		category: any;
		validComponentsData: ProcessedComponentsData[];
		xs?: number;
		sm?: number;
		md?: number;
		lg?: number;
		xl?: number;
	};

	let { components, category, validComponentsData, sm, md, lg, xl, xs = 1 }: Props = $props();

	let columns = $state<number>(xl ?? lg ?? md ?? sm ?? xs);
	const length = $derived(components.length);

	const handleResize = () => {
		const width = window.innerWidth;

		if (width >= 1280) columns = xl ?? lg ?? md ?? sm ?? xs;
		else if (width >= 1024) columns = lg ?? md ?? sm ?? xs;
		else if (width >= 768) columns = md ?? sm ?? xs;
		else if (width >= 640) columns = sm ?? xs;
		else columns = xs;
	};

	onMount(() => {
		handleResize();
	});
</script>

<svelte:window onresize={handleResize} />

<div
	class="group/grid mb-0 grid divide-x divide-y divide-dashed"
	style="grid-template-columns: repeat({columns}, minmax(0, 1fr))"
>
	{#each components as component, index (component.name)}
		<div
			class={cn(
				{
					'border-b-0': index >= length - (length % columns || columns),
					'border-e-0': (index + 1) % columns === 0,
					'border-e border-dashed': length % columns !== 0 && index === length - 1
				},
				component?.className
					?.split(' ')
					.filter((word) => word.includes('col-span-') || word.includes('border-e-'))
			)}
		>
			<ComponentCard componentName={component.name} class={component?.className}>
				<ComponentLoader componentName={component.name} category={category.slug} />
				<ComponentDetails
					componentsData={validComponentsData.find(
						(comp) => comp.component.name === component.name
					) as ProcessedComponentsData}
				/>
				{#if component?.badge}
					<span class="absolute start-4.5 top-3 font-['Gamja_Flower'] text-lg">
						{component?.badge}
					</span>
				{/if}
			</ComponentCard>
		</div>
	{/each}
</div>
