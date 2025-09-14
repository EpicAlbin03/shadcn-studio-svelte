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

	let value = $state('');
	const triggerContent = $derived(fruits.find((f) => f.value === value)?.label);
</script>

<div class="w-full max-w-xs space-y-2">
	<Select type="single" bind:value>
		<SelectTrigger {id} size="sm" class="w-full">
			{triggerContent ?? 'Small select'}
		</SelectTrigger>
		<SelectContent>
			<SelectGroup>
				<SelectLabel>Fruits</SelectLabel>
				{#each fruits as fruit (fruit.value)}
					<SelectItem value={fruit.value} label={fruit.label}>
						{fruit.label}
					</SelectItem>
				{/each}
			</SelectGroup>
		</SelectContent>
	</Select>
	<Select type="single" bind:value>
		<SelectTrigger {id} class="w-full">
			{triggerContent ?? 'Default select'}
		</SelectTrigger>
		<SelectContent>
			<SelectGroup>
				<SelectLabel>Fruits</SelectLabel>
				{#each fruits as fruit (fruit.value)}
					<SelectItem value={fruit.value} label={fruit.label}>
						{fruit.label}
					</SelectItem>
				{/each}
			</SelectGroup>
		</SelectContent>
	</Select>
	<Select type="single" bind:value>
		<SelectTrigger {id} class="!h-10 w-full">
			{triggerContent ?? 'Large select'}
		</SelectTrigger>
		<SelectContent>
			<SelectGroup>
				<SelectLabel>Fruits</SelectLabel>
				{#each fruits as fruit (fruit.value)}
					<SelectItem value={fruit.value} label={fruit.label}>
						{fruit.label}
					</SelectItem>
				{/each}
			</SelectGroup>
		</SelectContent>
	</Select>
</div>
