<script lang="ts">
	import { ShieldAlertIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<Button
	size="icon"
	class="bg-transparent bg-gradient-to-r from-destructive via-destructive/60 to-destructive [background-size:200%_auto] text-white hover:bg-transparent hover:bg-[99%_center] focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40"
>
	<ShieldAlertIcon />
	<span class="sr-only">Security</span>
</Button>
