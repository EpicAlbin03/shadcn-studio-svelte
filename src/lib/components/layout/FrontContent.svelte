<script lang="ts">
	import ScrollToTop from '$lib/components/layout/ScrollToTop.svelte';

	let { children } = $props();
</script>

<main class="flex flex-1 flex-col">
	<div
		class="mx-auto h-full w-full max-w-350 border-dashed min-[1400px]:border-x min-[1800px]:max-w-384"
	>
		{@render children?.()}
	</div>
	<ScrollToTop />
</main>
