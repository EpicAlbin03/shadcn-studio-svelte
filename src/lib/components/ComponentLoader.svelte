<script lang="ts">
	import type { ComponentProps } from '$lib/types/components';

	type Props = {
		componentName: ComponentProps['name'];
		category: string;
	};

	let { componentName, category, ...props }: Props = $props();

	async function loadComponent() {
		if (!componentName) {
			return null;
		}

		try {
			const module = await import(`$lib/components/shadcn-studio/${category}/${componentName}`);
			return module.default;
		} catch (error) {
			throw new Error(`Failed to load component ${componentName}: ${error}`);
		}
	}
</script>

{#await loadComponent()}
	<div>Loading component...</div>
{:then Component}
	{#if Component}
		<Component {...props} currentPage={1} totalPages={10} />
	{/if}
{:catch error}
	<div>Error loading component: {error.message}</div>
{/await}
