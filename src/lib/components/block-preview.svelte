<script lang="ts">
	import type { Component } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		name,
		type = 'example',
		class: className,
		align = 'center',
		hideCode = false,
		...restProps
	}: HTMLAttributes<HTMLElement> & {
		name: string;
		align?: 'center' | 'start' | 'end';
		description?: string;
		hideCode?: boolean;
		type?: 'block' | 'component' | 'example';
		component?: Component;
	} = $props();
</script>

<div
	class="relative aspect-4/2.5 w-full overflow-hidden rounded-md border md:-mx-4"
	data-llm-ignore
>
	<img
		src="/img/blocks/registry/{name}.png"
		alt={name}
		width={1440}
		height={900}
		class="absolute top-0 left-0 z-20 w-242.5 max-w-none bg-background sm:w-7xl md:hidden dark:hidden md:dark:hidden"
	/>
	<img
		src="/img/blocks/registry/{name}-dark.png"
		alt={name}
		width={1440}
		height={900}
		class="absolute top-0 left-0 z-20 hidden w-242.5 max-w-none bg-background sm:w-7xl md:hidden dark:block md:dark:hidden"
	/>
	<div class="absolute inset-0 hidden w-400 bg-background md:block">
		<iframe src="/view/{name}" class="size-full" title={name}></iframe>
	</div>
</div>
