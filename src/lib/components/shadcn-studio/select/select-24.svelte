<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import * as Select from '$lib/components/ui/select/index.js';

	const fruits = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'blueberry', label: 'Blueberry' },
		{ value: 'grapes', label: 'Grapes' },
		{ value: 'pineapple', label: 'Pineapple' }
	];

	const id = $props.id();

	let value = $state('apple');
	const triggerContent = $derived(fruits.find((f) => f.value === value)?.label ?? 'Select a fruit');
</script>

<div class="group relative w-full max-w-xs">
	<label
		for={id}
		class="absolute start-2 top-0 z-10 block -translate-y-1/2 bg-background px-1 text-xs font-medium text-foreground group-has-disabled:opacity-50"
	>
		Select with overlapping label
	</label>
	<Select.Root type="single" bind:value>
		<Select.Trigger {id} class="w-full dark:!bg-background">
			{triggerContent}
		</Select.Trigger>
		<Select.Content>
			<Select.Group>
				<Select.Label>Fruits</Select.Label>
				{#each fruits as fruit (fruit.value)}
					<Select.Item value={fruit.value} label={fruit.label}>
						{fruit.label}
					</Select.Item>
				{/each}
			</Select.Group>
		</Select.Content>
	</Select.Root>
</div>
