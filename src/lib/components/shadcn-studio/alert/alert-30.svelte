<script lang="ts">
	import { TriangleAlertIcon } from '@lucide/svelte';
	import { Alert, AlertTitle, AlertDescription } from '$lib/components/ui/alert';
</script>

<Alert class="border-none bg-destructive text-white dark:bg-destructive/60">
	<TriangleAlertIcon />
	<AlertTitle>Couldn&apos;t save changes</AlertTitle>
	<AlertDescription class="text-white/80">Please try again or reload the page.</AlertDescription>
</Alert>
