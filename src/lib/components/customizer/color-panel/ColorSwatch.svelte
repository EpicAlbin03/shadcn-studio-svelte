<script lang="ts">
	import Input from '$lib/components/ui/input/input.svelte';
	import { colorFormatter } from '$lib/utils/color-converter';
	import DebouncedInput from './DebouncedInput.svelte';

	type Props = {
		label: string;
		value: string;
		onChange: (value: string) => void;
	};

	let { label, value, onChange }: Props = $props();

	// Convert color to hex for display
	const hexColor = $derived(colorFormatter(value, 'hex'));
</script>

<div class="flex flex-col gap-2">
	<div class="flex items-center justify-between">
		<span class="text-sm font-medium">{label}</span>
		<span class="font-mono text-xs text-muted-foreground">{hexColor}</span>
	</div>
	<div class="flex items-center gap-2">
		<div
			class="relative flex size-9.5 cursor-pointer items-center justify-center overflow-hidden rounded border"
			style={`background-color: ${value}`}
		>
			<DebouncedInput
				id={`color-${label.replace(/\s+/g, '-').toLowerCase()}`}
				type="color"
				bind:value
				onChange={() => onChange(value)}
				class="absolute inset-0 h-full w-full cursor-pointer opacity-0"
			/>
		</div>
		<Input
			type="text"
			bind:value={() => value, (v) => onChange(v)}
			class="flex-1 rounded-md border px-3 py-2 text-sm"
		/>
	</div>
</div>
