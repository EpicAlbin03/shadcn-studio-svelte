<script lang="ts">
	import PagesContent from '$lib/components/layout/PagesContent.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { AppSidebar, CustomSidebarTrigger } from '$lib/components/layout/sidebar';
	import type { Snippet } from 'svelte';
	import DocsToc, { type TableOfContents } from '$lib/components/docs/docs-toc.svelte';

	type Props = {
		children?: Snippet;
		isDocPage?: boolean;
		toc?: TableOfContents;
		title?: string;
	};

	let { children, isDocPage, toc, title }: Props = $props();
</script>

<div class="flex h-full w-full min-w-0 flex-col">
	<Header toggle={CustomSidebarTrigger} />
	<div class="flex flex-1">
		<div
			class="mx-auto flex w-full max-w-[1400px] border-dashed min-[1400px]:border-x min-[1800px]:max-w-[1536px]"
		>
			<AppSidebar />
			<PagesContent>{@render children?.()}</PagesContent>
			{#if isDocPage && toc}
				<div class="w-[300px] border-l border-dashed max-xl:hidden">
					<DocsToc {toc} {title} />
				</div>
			{/if}
		</div>
	</div>
	<Footer />
</div>
