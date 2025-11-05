<script lang="ts">
	import { CheckCheckIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<Button
	size="icon"
	class="bg-green-600/10 text-green-600 hover:bg-green-600/20 focus-visible:ring-green-600/20 dark:bg-green-400/10 dark:text-green-400 dark:hover:bg-green-400/20 dark:focus-visible:ring-green-400/40"
>
	<CheckCheckIcon />
	<span class="sr-only">Check</span>
</Button>
