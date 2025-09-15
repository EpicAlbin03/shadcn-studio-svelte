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
		</SelectTrigger>
		<SelectContent>
			<SelectGroup>
				<SelectLabel>Fruits</SelectLabel>
				{#each fruits as fruit (fruit.value)}
					<Select.Item value={fruit.value} label={fruit.label}>
						{fruit.label}
					</SelectItem>
				{/each}
			</SelectGroup>
		</SelectContent>
	</Select>
</div>
