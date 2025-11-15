<script lang="ts">
	import { ShieldCheckIcon, ShieldXIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="flex flex-wrap items-center gap-4">
	<Button
		class="bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40"
	>
		Reject
		<ShieldXIcon />
	</Button>
	<Button
		class="bg-green-600/10 text-green-600 hover:bg-green-600/20 focus-visible:ring-green-600/20 dark:bg-green-400/10 dark:text-green-400 dark:hover:bg-green-400/20 dark:focus-visible:ring-green-400/40"
	>
		Approve
		<ShieldCheckIcon />
	</Button>
</div>
