<script lang="ts">
	import type { ComponentProps, ProcessedComponentsData } from '$lib/types/components';
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import { ComponentCard, ComponentDetails, ComponentLoader } from './component';

	type Props = {
		components: ComponentProps[];
		slug: string;
		validComponentsData: ProcessedComponentsData[];
		breakpoints?: {
			xs?: number;
			sm?: number;
			md?: number;
			lg?: number;
			xl?: number;
		};
	};

	let { components, slug, validComponentsData, breakpoints }: Props = $props();

	const bp = $derived({
		xs: breakpoints?.xs ?? 1,
		sm: breakpoints?.sm ?? 1,
		md: breakpoints?.md ?? 1,
		lg: breakpoints?.lg ?? 1,
		xl: breakpoints?.xl ?? 1
	});

	let columns = $derived<number>(bp.xl ?? bp.lg ?? bp.md ?? bp.sm ?? bp.xs);
	const length = $derived(components.length);

	const handleResize = () => {
		const width = window.innerWidth;

		if (width >= 1280) columns = bp.xl ?? bp.lg ?? bp.md ?? bp.sm ?? bp.xs;
		else if (width >= 1024) columns = bp.lg ?? bp.md ?? bp.sm ?? bp.xs;
		else if (width >= 768) columns = bp.md ?? bp.sm ?? bp.xs;
		else if (width >= 640) columns = bp.sm ?? bp.xs;
		else columns = bp.xs;
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
				<ComponentLoader componentName={component.name} category={slug} />
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
