<script lang="ts">
	import PagesContent from '$lib/components/layout/PagesContent.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { AppSidebar, CustomSidebarTrigger } from '$lib/components/layout/sidebar';

	type Props = {
		children: Children;
	};

	let { children }: Props = $props();
</script>

<div class="flex h-full w-full min-w-0 flex-col">
	<Header toggle={CustomSidebarTrigger} />
	<div class="flex flex-1">
		<div
			class="mx-auto flex w-full max-w-[1400px] border-dashed min-[1400px]:border-x min-[1800px]:max-w-[1536px]"
		>
			<AppSidebar />
			<PagesContent>{@render children?.()}</PagesContent>
		</div>
	</div>
	<Footer />
</div>
