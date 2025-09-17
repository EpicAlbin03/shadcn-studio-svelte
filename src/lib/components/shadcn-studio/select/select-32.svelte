<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import type { Option } from '$lib/components/ui/multi-select';
	import { MultiSelect } from '$lib/components/ui/multi-select';

	const categories: Option[] = [
		{
			value: 'clothing',
			label: 'Clothing'
		},
		{
			value: 'footwear',
			label: 'Footwear'
		},
		{
			value: 'accessories',
			label: 'Accessories'
		},
		{
			value: 'jewelry',
			label: 'Jewelry',
			disable: true
		},
		{
			value: 'outerwear',
			label: 'Outerwear'
		},
		{
			value: 'fragrance',
			label: 'Fragrance'
		},
		{
			value: 'makeup',
			label: 'Makeup'
		},
		{
			value: 'skincare',
			label: 'Skincare'
		},
		{
			value: 'furniture',
			label: 'Furniture'
		},
		{
			value: 'lighting',
			label: 'Lighting'
		},
		{
			value: 'kitchenware',
			label: 'Kitchenware',
			disable: true
		},
		{
			value: 'computers',
			label: 'Computers'
		},
		{
			value: 'audio',
			label: 'Audio'
		},
		{
			value: 'wearables',
			label: 'Wearables'
		},
		{
			value: 'supplements',
			label: 'Supplements'
		},
		{
			value: 'sportswear',
			label: 'Sportswear'
		}
	];
</script>

<div class="w-full max-w-xs space-y-2">
	<Label>Multiselect</Label>
	<MultiSelect
		commandProps={{
			label: 'Select categories'
		}}
		value={categories.slice(0, 2)}
		defaultOptions={categories}
		placeholder="Select categories"
		hideClearAllButton
		hidePlaceholderWhenSelected
		{emptyIndicator}
		class="w-full"
	/>
	<p class="text-xs text-muted-foreground" role="region" aria-live="polite">
		Inspired by
		<a
			href="hhttps://shadcnui-expansions.typeart.cc/docs/multiple-selector"
			class="underline hover:text-primary"
			target="_blank"
		>
			shadcn/ui expressions
		</a>
	</p>
</div>

{#snippet emptyIndicator()}
	<p class="text-center text-sm">No results found</p>
{/snippet}
