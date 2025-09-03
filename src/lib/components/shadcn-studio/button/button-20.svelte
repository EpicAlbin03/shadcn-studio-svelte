<script lang="ts">
	import { CopyIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="flex h-11.5 items-center overflow-hidden rounded-full border px-1">
	<p class="max-w-56 truncate overflow-hidden px-2.5 text-sm text-muted-foreground">
		http:/localhost:5173/docs/components/button
	</p>
	<Button
		size="icon"
		class="rounded-full bg-sky-600 text-white hover:bg-sky-600/90 focus-visible:ring-sky-600/20 dark:bg-sky-400/60 dark:focus-visible:ring-sky-400/40"
	>
		<CopyIcon />
		<span class="sr-only">Copy</span>
	</Button>
</div>
