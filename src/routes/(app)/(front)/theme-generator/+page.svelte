<script lang="ts">
	import { IsMobile } from '$lib/hooks/is-mobile.svelte';
	import PageNav from '$lib/components/examples/PageNav.svelte';
	import ExamplesNav from '$lib/components/examples/ExamplesNav.svelte';
	import CardsDemo from '$lib/components/examples/cards/Demo.svelte';

	const mobile = new IsMobile();
</script>

{#if !mobile.current}
	<PageNav class="hidden md:flex">
		<ExamplesNav class="flex-1 overflow-hidden [&>a:first-child]:text-primary" />
	</PageNav>
{/if}
<div class="flex flex-1 flex-col section-soft pb-6">
	<div class="flex flex-1 flex-col">
		<CardsDemo />
	</div>
</div>
