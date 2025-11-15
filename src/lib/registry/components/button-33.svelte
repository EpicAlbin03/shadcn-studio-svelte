<script lang="ts">
	import { MenuIcon, XIcon } from '@lucide/svelte';
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
