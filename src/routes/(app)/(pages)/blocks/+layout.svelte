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

	const title = 'Shadcn Blocks';
	const description =
		'Explore free Shadcn UI blocks to speed up your development. Fully customizable, easy to use, and dark mode ready.';
</script>

<MetaData {title} {description} />

<FrontLayout>
	<PageHeader>
		<PageHeaderHeading>{title}</PageHeaderHeading>
		<PageHeaderDescription>{description}</PageHeaderDescription>
		<!-- <PageActions>
			<Button href="#blocks" size="sm">Browse Blocks</Button>
			<Button href="/docs/blocks" variant="ghost" size="sm">Add a block</Button>
		</PageActions> -->
	</PageHeader>
	<PageNav>
		<BlocksNav />
		<!-- <Button
			size="sm"
			variant="secondary"
			href="/blocks/marketing"
			class="mr-7 hidden shadow-none lg:flex"
		>
			Browse all blocks
		</Button> -->
	</PageNav>
	<div class="container-wrapper flex-1 section-soft md:py-12">
		<div class="container pb-24">{@render children?.()}</div>
	</div>
</FrontLayout>
