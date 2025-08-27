<script lang="ts">
	import { colorFormatter } from '$lib/utils/color-converter';
	import DebouncedInput from './DebouncedInput.svelte';

	type Props = {
		label: string;
		value: string;
		onChange: (value: string) => void;
	};

	let { label, value, onChange }: Props = $props();

	let localValue = $state(value);

	// Convert color to hex for display
	const hexColor = $derived(colorFormatter(localValue, 'hex'));
</script>

<div class="flex flex-col gap-2">
	<div class="flex items-center justify-between">
		<span class="text-sm font-medium">{label}</span>
		<span class="font-mono text-xs text-muted-foreground">{hexColor}</span>
	</div>
	<div class="flex items-center gap-2">
		<div
			class="relative flex size-9.5 cursor-pointer items-center justify-center overflow-hidden rounded border"
			style={`backgroundColor: ${localValue}`}
		>
			<DebouncedInput
				id={`color-${label.replace(/\s+/g, '-').toLowerCase()}`}
				bind:value={localValue}
				onChange={(localValue) => {
					onChange(localValue);
				}}
				class="absolute inset-0 h-full w-full cursor-pointer opacity-0"
			/>
		</div>
		<input
			type="text"
			bind:value={localValue}
			onchange={() => {
				onChange(localValue);
			}}
			class="flex-1 rounded-md border px-3 py-2 text-sm"
		/>
	</div>
</div>
