<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import * as Select from '$lib/components/ui/select/index.js';

	const cars = [
		{ value: 'tesla', label: 'Tesla' },
		{ value: 'bmw', label: 'BMW' },
		{ value: 'audi', label: 'Audi' },
		{ value: 'mercedes-benz', label: 'Mercedes-Benz' }
	];

	const id = $props.id();

	let value = $state('tesla');
	const triggerContent = $derived(cars.find((f) => f.value === value)?.label ?? 'Select a car');
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Select with error</Label>
	<Select.Root type="single" bind:value>
		<Select.Trigger {id} aria-invalid class="w-full">
			{triggerContent}
		</Select.Trigger>
		<Select.Content>
			<Select.Group>
				{#each cars as car (car.value)}
					<Select.Item value={car.value} label={car.label}>
						{car.label}
					</Select.Item>
				{/each}
			</Select.Group>
		</Select.Content>
	</Select.Root>
	<p class="mt-2 text-xs text-destructive" role="alert" aria-live="polite">
		Selected option is invalid
	</p>
</div>
