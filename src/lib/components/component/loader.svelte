<script lang="ts">
	import CircleXIcon from '@lucide/svelte/icons/circle-x';
	import type { Component as ComponentType } from 'svelte';
	import { SpinnerSVG } from '$lib/assets/svg';
	import type { ComponentProps } from '$lib/types/components';

	type Props = { componentName: ComponentProps['name'] };

	let { componentName, ...props }: Props = $props();

	async function loadComponent(name: string): Promise<ComponentType | null> {
		if (!name) {
			return null;
		}

		try {
			const module = await import(`$lib/registry/components/${name}.svelte`);
			return module.default;
		} catch (error) {
			try {
				const module = await import(`$lib/registry/components/${name}/${name}.svelte`);
				return module.default;
			} catch (folderError) {
				console.error(`Failed to load component ${name}: ${error}`);
				throw new Error(`Failed to load component ${name}`, { cause: folderError });
			}
		}
	}

	const componentPromise = $derived(loadComponent(componentName));
</script>

{#await componentPromise}
	<div class="flex h-full flex-col items-center justify-center">
		<SpinnerSVG class="size-10 animate-spin" />
	</div>
{:then Component}
	{#if Component}
		<Component {...props} currentPage={1} totalPages={10} />
	{/if}
{:catch error}
	<div class="flex h-full flex-col items-center justify-center gap-4">
		<CircleXIcon class="size-10" />
		{error.message}
	</div>
{/await}
