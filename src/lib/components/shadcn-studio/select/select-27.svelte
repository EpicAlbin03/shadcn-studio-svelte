<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import * as Select from '$lib/components/ui/select/index.js';
	import { AppleIcon, BananaIcon, CherryIcon, GrapeIcon } from '@lucide/svelte';

	const fruits = [
		{ value: 'apple', label: 'Apple', icon: AppleIcon },
		{ value: 'banana', label: 'Banana', icon: BananaIcon },
		{ value: 'cherry', label: 'Cherry', icon: CherryIcon },
		{ value: 'grapes', label: 'Grapes', icon: GrapeIcon }
	];

	const id = $props.id();

	let value = $state('apple');
	const selectedFruit = $derived(fruits.find((f) => f.value === value) ?? fruits[0]);
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Select option with icon</Label>
	<Select.Root type="single" bind:value>
		<Select.Trigger {id} class="w-full">
			<span class="flex items-center gap-2">
				<selectedFruit.icon />
				{selectedFruit.label ?? 'Select a fruit'}
			</span>
		</Select.Trigger>
		<Select.Content>
			<Select.Group>
				<Select.Label>Fruits</Select.Label>
				{#each fruits as fruit (fruit.value)}
					<Select.Item value={fruit.value} label={fruit.label}>
						<fruit.icon />
						{fruit.label}
					</Select.Item>
				{/each}
			</Select.Group>
		</Select.Content>
	</Select.Root>
</div>
