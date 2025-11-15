<script lang="ts">
	import { BellIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<Button variant="outline" size="icon" class="relative">
	<BellIcon />
	<span
		class="absolute -end-0.5 -top-0.5 size-2 animate-bounce rounded-full bg-sky-600 dark:bg-sky-400"
	></span>
	<span class="sr-only">Notifications</span>
</Button>
