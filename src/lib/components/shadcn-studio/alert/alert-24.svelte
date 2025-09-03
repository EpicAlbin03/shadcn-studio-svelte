<script lang="ts">
	import { CircleAlertIcon } from '@lucide/svelte';
	import { Alert, AlertTitle, AlertDescription } from '$lib/components/ui/alert';
</script>

<Alert class="border-none bg-amber-600/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400">
	<CircleAlertIcon />
	<AlertTitle>This file might be too large</AlertTitle>
	<AlertDescription class="text-amber-600/80 dark:text-amber-400/80">
		Uploading large files may take longer or fail. Consider compressing it first.
	</AlertDescription>
</Alert>
