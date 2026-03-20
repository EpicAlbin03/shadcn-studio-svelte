<script lang="ts">
	import MenuIcon from '@lucide/svelte/icons/menu';
	import XIcon from '@lucide/svelte/icons/x';
	import { Button } from '$lib/components/ui/button';

	let isOpen = $state(false);
</script>

<Button variant="ghost" size="icon" onclick={() => (isOpen = !isOpen)} aria-label="Toggle menu">
	{#if isOpen}
		<XIcon />
	{:else}
		<MenuIcon />
	{/if}
</Button>
