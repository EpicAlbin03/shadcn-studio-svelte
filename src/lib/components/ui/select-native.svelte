<script lang="ts">
	import { ChevronDownIcon } from '@lucide/svelte';
	import { cn } from '$lib/utils';
	import type { HTMLSelectAttributes } from 'svelte/elements';
	import { type WithElementRef } from '$lib/utils';

	type Props = WithElementRef<HTMLSelectAttributes> & {
		type: 'single' | 'multiple';
	};

	let {
		ref = $bindable(null),
		class: className,
		children,
		type,
		value = $bindable(),
		...props
	}: Props = $props();
</script>

<div class="relative flex">
	<select
		bind:this={ref}
		bind:value
		data-slot="select-native"
		class={cn(
			'peer inline-flex w-full cursor-pointer appearance-none items-center rounded-md border border-input text-sm text-foreground shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 has-[option[disabled]:checked]:text-muted-foreground aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
			type === 'multiple' ? 'py-1 *:px-3 *:py-1 [&_option:checked]:bg-accent' : 'h-9 ps-3 pe-8',
			className
		)}
		{...props}
	>
		{@render children?.()}
	</select>
	{#if type === 'single'}
		<span
			class="pointer-events-none absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center text-muted-foreground/80 peer-disabled:opacity-50 peer-aria-invalid:text-destructive/80"
		>
			<ChevronDownIcon size={16} aria-hidden="true" />
		</span>
	{/if}
</div>
