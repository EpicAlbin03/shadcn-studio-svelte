<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import * as Select from '$lib/components/ui/select/index.js';

	const countries = [
		{ value: 'us', label: 'United States' },
		{ value: 'jp', label: 'Japan' },
		{ value: 'au', label: 'Australia' },
		{ value: 'br', label: 'Brazil' }
	];

	const id = $props.id();

	let value = $state('jp');
	const triggerContent = $derived(
		countries.find((f) => f.value === value)?.label ?? 'Select a country'
	);
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>
		Required select
		<span class="text-destructive">*</span>
	</Label>
	<Select.Root type="single" bind:value required>
		<Select.Trigger {id} class="w-full">
			{triggerContent}
		</Select.Trigger>
		<Select.Content>
			<Select.Group>
				{#each countries as country (country.value)}
					<Select.Item value={country.value} label={country.label}>
						{country.label}
					</Select.Item>
				{/each}
			</Select.Group>
		</Select.Content>
	</Select.Root>
</div>
