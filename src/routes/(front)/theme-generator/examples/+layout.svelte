<script lang="ts">
	import ExamplesNav from '$lib/components/examples/ExamplesNav.svelte';
	import PageNav from '$lib/components/examples/PageNav.svelte';

	let { children } = $props();
</script>

<PageNav id="examples">
	<ExamplesNav class="flex-1 overflow-hidden [&>a:first-child]:text-primary" />
</PageNav>
<div class="container-wrapper flex flex-1 flex-col section-soft pb-6">
	<div class="container flex flex-1 scroll-mt-20 flex-col">
		<div
			class="flex flex-col overflow-hidden rounded-lg border bg-background bg-clip-padding md:flex-1 xl:rounded-xl"
		>
			{@render children()}
		</div>
	</div>
</div>
