<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import BlocksNav from '$lib/components/blocks-nav.svelte';
	import PageHeader from '$lib/components/layout/page-header/page-header.svelte';
	import PageHeaderHeading from '$lib/components/layout/page-header/page-header-heading.svelte';
	import PageHeaderDescription from '$lib/components/layout/page-header/page-header-description.svelte';
	import PageActions from '$lib/components/layout/page-header/page-actions.svelte';
	import PageNav from '$lib/components/layout/page-nav.svelte';
	import MetaData from '$lib/components/MetaData.svelte';
	import FrontLayout from '$lib/components/layout/FrontLayout.svelte';

	let { children } = $props();

	const title = 'Building Blocks for the Web';
	const description =
		'Clean, modern building blocks. Works with all Svelte projects. Copy and paste into your apps. Open Source. Free forever.';
</script>

<MetaData {title} {description} />

<FrontLayout>
	<PageHeader>
		<PageHeaderHeading>{title}</PageHeaderHeading>
		<PageHeaderDescription>{description}</PageHeaderDescription>
		<PageActions>
			<Button href="#blocks" size="sm">Browse Blocks</Button>
			<!-- <Button href="/docs/blocks" variant="ghost" size="sm">Add a block</Button> -->
		</PageActions>
	</PageHeader>
	<PageNav>
		<BlocksNav />
		<Button
			size="sm"
			variant="secondary"
			href="/blocks/sidebar"
			class="mr-7 hidden shadow-none lg:flex"
		>
			Browse all blocks
		</Button>
	</PageNav>
	<div class="container-wrapper flex-1 section-soft md:py-12">
		<div class="container">{@render children?.()}</div>
	</div>
</FrontLayout>
