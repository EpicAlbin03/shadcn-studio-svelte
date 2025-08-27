<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = {
		value: string;
		onChange: (value: string) => void;
		debounce?: number;
	} & Omit<HTMLAttributes<HTMLInputElement>, 'onchange'>;

	let { value: initialValue = $bindable(), onChange, debounce = 300, ...props }: Props = $props();

	let value = $state(initialValue);

	$effect(() => {
		const timeout = setTimeout(() => {
			onChange(value);
		}, debounce);

		return () => clearTimeout(timeout);
	});
</script>

<input {...props} type="color" bind:value />
