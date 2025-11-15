<script lang="ts">
	import * as Select from '$lib/components/ui/select/index.js';

	const cities = [
		{ value: 'new-york', label: 'New York' },
		{ value: 'london', label: 'London' },
		{ value: 'tokyo', label: 'Tokyo' },
		{ value: 'paris', label: 'Paris' }
	];

	const id = $props.id();

	let value = $state('');
	const triggerContent = $derived(cities.find((f) => f.value === value)?.label ?? 'Select a city');
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
				{#each cities as city (city.value)}
					<Select.Item value={city.value} label={city.label}>
						{city.label}
					</Select.Item>
				{/each}
			</Select.Group>
		</Select.Content>
	</Select.Root>
</div>
