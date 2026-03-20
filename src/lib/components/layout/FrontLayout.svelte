<script lang="ts">
	import Footer from '$lib/components/layout/Footer.svelte';
	import FrontContent from '$lib/components/layout/FrontContent.svelte';
	import FrontMenuToggle from '$lib/components/layout/FrontMenuToggle.svelte';
	import Header from '$lib/components/layout/Header.svelte';

	let { children } = $props();
</script>

<div class="flex h-full w-full min-w-0 flex-col">
	<Header toggle={FrontMenuToggle} />
	<FrontContent>{@render children?.()}</FrontContent>
	<Footer />
</div>
