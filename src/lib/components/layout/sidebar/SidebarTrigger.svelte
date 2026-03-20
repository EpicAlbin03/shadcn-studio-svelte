<script lang="ts">
	import MenuIcon from '@lucide/svelte/icons/menu';
	import { Button } from '$lib/components/ui/button';
	import { useSidebar } from '$lib/components/ui/sidebar';

	const sidebar = useSidebar();
</script>

<Button
	variant="outline"
	size="icon"
	class="cursor-pointer lg:hidden"
	onclick={() => sidebar.toggle()}
>
	<MenuIcon class="size-5" />
	<span class="sr-only">Sidebar</span>
</Button>
