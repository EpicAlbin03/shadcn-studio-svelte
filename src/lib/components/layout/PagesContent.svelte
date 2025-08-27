<script lang="ts">
	import ScrollToTop from '$lib/components/layout/ScrollToTop.svelte';

	type Props = {
		children: Children;
	};

	let { children }: Props = $props();
</script>

<main class="flex flex-1">
	<div class="flex flex-1 flex-col" id="main-section">
		{@render children?.()}
	</div>
	<ScrollToTop />
</main>
