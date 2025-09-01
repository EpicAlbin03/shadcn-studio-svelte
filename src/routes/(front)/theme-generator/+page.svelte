<script lang="ts">
	import { IsMobile } from '$lib/hooks/is-mobile.svelte';
	import PageNav from '$lib/components/examples/PageNav.svelte';
	import ExamplesNav from '$lib/components/examples/ExamplesNav.svelte';
	import CardsDemo from '$lib/components/examples/cards/Demo.svelte';

	const mobile = new IsMobile();
</script>

<svelte:head>
	<title>Shadcn Theme Generator</title>
	<meta
		name="description"
		content="Preview your theme changes across different components and layouts."
	/>
	<!-- <link rel="canonical" href="https://shadcnstudio.com/theme-generator" /> -->

	<!-- Open Graph -->
	<!-- <meta property="og:title" content="Shadcn Theme Generator" />
<meta property="og:description" content="Preview your theme changes across different components and layouts." />
<meta property="og:url" content="https://shadcnstudio.com/theme-generator" />
<meta property="og:image" content="https://cdn.shadcnstudio.com/ss-assets/smm/marketing/shadcn-studio-smm-banner.png" />
<meta property="og:image:type" content="image/png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Shadcn Studio - Craft Stunning Shadcn UI, Lightning Fast" /> -->

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Shadcn Theme Generator" />
	<meta
		name="twitter:description"
		content="Preview your theme changes across different components and layouts."
	/>
	<!-- <meta name="twitter:image" content="https://cdn.shadcnstudio.com/ss-assets/smm/marketing/shadcn-studio-smm-banner.png" /> -->
</svelte:head>

{#if !mobile.current}
	<PageNav class="hidden md:flex">
		<ExamplesNav class="flex-1 overflow-hidden [&>a:first-child]:text-primary" />
	</PageNav>
{/if}
<div class="container-wrapper flex flex-1 flex-col section-soft pb-6">
	<div class="container flex flex-1 flex-col">
		<CardsDemo />
	</div>
</div>
