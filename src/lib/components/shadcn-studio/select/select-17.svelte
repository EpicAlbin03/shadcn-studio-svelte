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
	<Label for={id}>Select with background color</Label>
	<Select.Root type="single" bind:value>
		<SelectTrigger
			{id}
			class="w-full border-sky-600 bg-sky-600/10 text-sky-600 shadow-none focus-visible:border-sky-600 focus-visible:ring-sky-600/20 dark:bg-sky-400/10 dark:text-sky-400 dark:hover:bg-sky-400/10 dark:focus-visible:ring-sky-400/40 [&_svg]:!text-sky-600 dark:[&_svg]:!text-sky-400"
		>
			{triggerContent}
		</SelectTrigger>
		<SelectContent>
			<SelectGroup
				class="[&_div:focus]:bg-sky-600/20 [&_div:focus]:text-sky-600 dark:[&_div:focus]:bg-sky-400/20 dark:[&_div:focus]:text-sky-400"
			>
				<SelectLabel>Fruits</SelectLabel>
				{#each fruits as fruit (fruit.value)}
					<SelectItem
						value={fruit.value}
						label={fruit.label}
						class="focus:[&_svg]:!text-sky-600 dark:focus:[&_svg]:!text-sky-400"
					>
						{fruit.label}
					</SelectItem>
				{/each}
			</SelectGroup>
		</SelectContent>
	</Select>
</div>
