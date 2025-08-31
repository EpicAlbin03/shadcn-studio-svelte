<script lang="ts">
	import { useDebounce } from 'runed';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = {
		type: 'color' | 'text';
		value: string;
		onChange: (value: string) => void;
		duration?: number;
	} & Omit<HTMLAttributes<HTMLInputElement>, 'onchange'>;

	let { type, value = $bindable(), onChange, duration = 300, ...props }: Props = $props();

	const debounce = useDebounce(
		() => {
			onChange(value);
		},
		() => duration
	);
</script>

<input {...props} {type} bind:value oninput={() => debounce()} />
