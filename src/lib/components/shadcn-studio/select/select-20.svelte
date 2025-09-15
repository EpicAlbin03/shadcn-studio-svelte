<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import {
		Select,
		SelectContent,
		SelectGroup,
		SelectItem,
		SelectLabel,
		SelectTrigger
	} from '$lib/components/ui/select';

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

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Disabled options select</Label>
	<Select.Root type="single" bind:value>
		<Select.Trigger {id} class="w-full">
			{triggerContent}
		</SelectTrigger>
		<SelectContent>
			<SelectGroup>
				<SelectLabel>Fruits</SelectLabel>
				{#each fruits as fruit (fruit.value)}
					<SelectItem
						value={fruit.value}
						label={fruit.label}
						disabled={['banana', 'grapes'].includes(fruit.value)}
					>
						{fruit.label}
					</SelectItem>
				{/each}
			</SelectGroup>
		</SelectContent>
	</Select>
</div>
