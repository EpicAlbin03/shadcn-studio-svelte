<script lang="ts">
	import FrontContent from '$lib/components/layout/FrontContent.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import FrontMenuToggle from '$lib/components/layout/FrontMenuToggle.svelte';

	type Props = {
		children: Children;
	};

	let { children }: Props = $props();
</script>

<div class="flex h-full w-full min-w-0 flex-col">
	<Header toggle={FrontMenuToggle} />
	<FrontContent>{@render children?.()}</FrontContent>
	<Footer />
</div>
