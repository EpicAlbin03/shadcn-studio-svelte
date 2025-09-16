<script lang="ts">
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

<div
	class="group relative w-full max-w-xs rounded-md border border-input bg-background shadow-xs transition-[color,box-shadow] outline-none focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50 has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-aria-invalid:border-destructive has-aria-invalid:ring-destructive/20 has-[input:is(:disabled)]:*:pointer-events-none dark:has-aria-invalid:ring-destructive/40"
>
	<label
		for={id}
		class="block px-3 pt-1 text-xs font-medium text-foreground dark:bg-input/30 dark:group-hover:bg-input/50"
	>
		Select with inset label
	</label>
	<Select.Root type="single" bind:value>
		<Select.Trigger
			{id}
			class="w-full rounded-t-none border-none bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 dark:group-hover:bg-input/50"
		>
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
