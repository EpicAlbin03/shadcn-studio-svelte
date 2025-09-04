<script lang="ts">
	import { SpinnerSVG } from '$lib/assets/svg';
	import type { ComponentProps } from '$lib/types/components';
	import { CircleX } from '@lucide/svelte';
	import type { Component as ComponentType } from 'svelte';

	type Props = { componentName: ComponentProps['name']; category: string };

	let { componentName, category, ...props }: Props = $props();

	const loadComponent: Promise<ComponentType | null> = $derived.by(async () => {
		if (!componentName) {
			return null;
		}

		try {
			const module = await import(
				`$lib/components/shadcn-studio/${category}/${componentName}.svelte`
			);
			return module.default;
		} catch (err) {
			throw new Error(`Failed to load component ${componentName}`);
		}
	});
</script>

{#await loadComponent}
	<div class="flex h-full flex-col items-center justify-center">
		<SpinnerSVG class="size-10 animate-spin" />
	</div>
{:then Component}
	{#if Component}
		<Component {...props} currentPage={1} totalPages={10} />
	{/if}
{:catch error}
	<div class="flex h-full flex-col items-center justify-center gap-4">
		<CircleX class="size-10" />
		{error.message}
	</div>
{/await}
