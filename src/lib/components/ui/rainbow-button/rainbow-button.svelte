<script lang="ts" module>
	import { cn, type WithElementRef } from '$lib/utils/index.js';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	export type ButtonProps = WithElementRef<HTMLButtonAttributes>;
</script>

<script lang="ts">
	let {
		class: className,
		ref = $bindable(null),
		type = 'button',
		disabled,
		children,
		...restProps
	}: ButtonProps = $props();
</script>

<button
	bind:this={ref}
	data-slot="button"
	class={cn(
		'group relative inline-flex size-9 animate-rainbow cursor-pointer items-center justify-center rounded-md border-2 border-transparent bg-[length:200%] [background-clip:padding-box,border-box,border-box] [background-origin:border-box] font-medium text-primary-foreground transition-colors focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',

		// before styles
		'before:absolute before:bottom-[-20%] before:left-0 before:z-0 before:h-1/5 before:w-full before:animate-rainbow before:bg-[linear-gradient(90deg,#ff4242,#a1ff42,#42a1ff,#42d0ff,#a142ff)] before:[filter:blur(calc(0.625*1rem))]',

		// bg styles
		'bg-[linear-gradient(var(--primary),var(--primary)),linear-gradient(var(--primary)_30%,rgba(0,0,0,0)),linear-gradient(90deg,#ff4242,#a1ff42,#42a1ff,#42d0ff,#a142ff)]',
		className
	)}
	{type}
	{disabled}
	{...restProps}
>
	{@render children?.()}
</button>
