<script lang="ts">
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group';

	const id = $props.id();

	const items = [
		{ value: '1', label: 'Size: 6 (UK)' },
		{ value: '2', label: 'Size: 7 (UK)', disabled: true },
		{ value: '3', label: 'Size: 8 (UK)' },
		{ value: '4', label: 'Size: 9 (UK)' },
		{ value: '5', label: 'Size: 10 (UK)' }
	];
</script>

<fieldset class="w-full max-w-96 space-y-4">
	<legend class="text-sm leading-none font-medium text-foreground">Select Shoe Size:</legend>
	<RadioGroup class="grid grid-cols-3 gap-2" value="1">
		{#each items as item (`${id}-${item.value}`)}
			<label
				class="relative flex flex-col items-center gap-3 rounded-md border border-input px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50 has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50 has-data-[state=checked]:border-primary/80"
			>
				<RadioGroupItem
					id="{id}-{item.value}"
					value={item.value}
					class="sr-only after:absolute after:inset-0"
					aria-label="size-radio-{item.value}"
					disabled={item.disabled}
				/>
				<p class="text-sm leading-none font-medium text-foreground">{item.label}</p>
			</label>
		{/each}
	</RadioGroup>
</fieldset>
