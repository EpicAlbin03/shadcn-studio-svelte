<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Slider } from '$lib/components/ui/slider';

	type Props = {
		value: number;
		onChange: (value: number) => void;
		min: number;
		max: number;
		step?: number;
		label: string;
		unit?: string;
	};

	let { value, onChange, min, max, step = 1, label, unit = 'px' }: Props = $props();

	let localValue = $state(value);
</script>

<div class="mb-3">
	<div class="mb-1.5 flex items-center justify-between">
		<Label for={`slider-${label.replace(/\s+/g, '-').toLowerCase()}`} class="text-lg font-medium">
			{label}
		</Label>
		<div class="flex items-center gap-1">
			<Input
				id={`input-${label.replace(/\s+/g, '-').toLowerCase()}`}
				type="number"
				bind:value={localValue}
				onchange={() => onChange(localValue)}
				{min}
				{max}
				{step}
				class="h-6 w-18 px-2 text-xs"
			/>
			<span class="text-xs text-muted-foreground">{unit}</span>
		</div>
	</div>
	<Slider
		id={`slider-${label.replace(/\s+/g, '-').toLowerCase()}`}
		bind:value={localValue}
		{min}
		{max}
		{step}
		onValueChange={(values: number[]) => onChange(values[0])}
		class="py-1"
	/>
</div>
