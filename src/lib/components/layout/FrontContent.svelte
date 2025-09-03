<script lang="ts">
	import ScrollToTop from '$lib/components/layout/ScrollToTop.svelte';

	let { children } = $props();
</script>

<main class="flex flex-1 flex-col">
	<div
		class="mx-auto h-full w-full max-w-[1400px] border-dashed min-[1400px]:border-x min-[1800px]:max-w-[1536px]"
	>
		{@render children?.()}
	</div>
	<ScrollToTop />
</main>
