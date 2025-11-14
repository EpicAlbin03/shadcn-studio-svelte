<script lang="ts">
	import { SidebarProvider } from '$lib/components/ui/sidebar';
	import PagesLayout from '$lib/components/layout/PagesLayout.svelte';

	let { children, data } = $props();

	const doc = $derived(data.doc);
</script>

<SidebarProvider style="--sidebar-width: 18.75rem; --sidebar-width-mobile: 18.75rem;">
	{#if doc && doc.toc.items?.length}
		<PagesLayout isDocPage={true} toc={doc.toc} title={doc.title}
			>{@render children?.()}</PagesLayout
		>
	{:else}
		<PagesLayout>{@render children?.()}</PagesLayout>
	{/if}
</SidebarProvider>
