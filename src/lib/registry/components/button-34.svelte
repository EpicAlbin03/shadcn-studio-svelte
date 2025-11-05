<script lang="ts">
	import { SunIcon, MoonIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';

	let isDark = $state(false);
</script>

<Button
	variant="outline"
	size="icon"
	onclick={() => (isDark = !isDark)}
	aria-label="Toggle dark mode"
	class={cn(
		isDark
			? 'border-sky-600 text-sky-600! hover:bg-sky-600/10 focus-visible:border-sky-600 focus-visible:ring-sky-600/20 dark:border-sky-400 dark:text-sky-400! dark:hover:bg-sky-400/10 dark:focus-visible:border-sky-400 dark:focus-visible:ring-sky-400/40'
			: 'border-amber-600 text-amber-600! hover:bg-amber-600/10 focus-visible:border-amber-600 focus-visible:ring-amber-600/20 dark:border-amber-400 dark:text-amber-400! dark:hover:bg-amber-400/10 dark:focus-visible:border-amber-400 dark:focus-visible:ring-amber-400/40'
	)}
>
	{#if isDark}
		<MoonIcon />
	{:else}
		<SunIcon />
	{/if}
</Button>
