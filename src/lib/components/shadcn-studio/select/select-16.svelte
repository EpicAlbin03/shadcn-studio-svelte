<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import * as Select from '$lib/components/ui/select/index.js';

	const categories = [
		{ value: 'electronics', label: 'Electronics' },
		{ value: 'clothing', label: 'Clothing' },
		{ value: 'home-appliances', label: 'Home Appliances' },
		{ value: 'books', label: 'Books' }
	];

	const id = $props.id();

	let value = $state('electronics');
	const triggerContent = $derived(
		categories.find((f) => f.value === value)?.label ?? 'Select a category'
	);
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Select with colored border and ring</Label>
	<Select.Root type="single" bind:value>
		<Select.Trigger
			{id}
			class="w-full focus-visible:border-indigo-500 focus-visible:ring-indigo-500/20 dark:focus-visible:ring-indigo-500/40"
		>
			{triggerContent}
		</Select.Trigger>
		<Select.Content>
			<Select.Group>
				{#each categories as category (category.value)}
					<Select.Item value={category.value} label={category.label}>
						{category.label}
					</Select.Item>
				{/each}
			</Select.Group>
		</Select.Content>
	</Select.Root>
</div>
