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

	function onValueChange(value: number) {
		let clampedValue = Math.max(min, Math.min(max, value));
		onChange(clampedValue);
	}
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
				bind:value={() => value, (v) => onValueChange(v)}
				{min}
				{max}
				{step}
				class="h-6 w-18 px-2 text-xs"
			/>
			<span class="text-xs text-muted-foreground">{unit}</span>
		</div>
	</div>
	<Slider
		type="single"
		id={`slider-${label.replace(/\s+/g, '-').toLowerCase()}`}
		bind:value={() => value, (v) => onChange(v)}
		{min}
		{max}
		{step}
		class="py-1"
	/>
</div>
