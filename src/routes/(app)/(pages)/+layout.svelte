<script lang="ts">
	import { SidebarProvider } from '$lib/components/ui/sidebar';
	import PagesLayout from '$lib/components/layout/PagesLayout.svelte';

	let { children } = $props();
</script>

<SidebarProvider style="--sidebar-width: 18.75rem; --sidebar-width-mobile: 18.75rem;">
	<PagesLayout>{@render children?.()}</PagesLayout>
</SidebarProvider>
