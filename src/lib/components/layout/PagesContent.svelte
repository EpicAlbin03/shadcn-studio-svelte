<script lang="ts">
	import ScrollToTop from '$lib/components/layout/ScrollToTop.svelte';

	let { children } = $props();
</script>

<main class="flex flex-1">
	<div class="flex flex-1 flex-col" id="main-section">
		{@render children?.()}
	</div>
	<ScrollToTop />
</main>
