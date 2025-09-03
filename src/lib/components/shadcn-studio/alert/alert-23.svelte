<script lang="ts">
	import { CheckCheckIcon } from '@lucide/svelte';
	import { Alert, AlertTitle, AlertDescription } from '$lib/components/ui/alert';
</script>

<Alert class="border-none bg-green-600/10 text-green-600 dark:bg-green-400/10 dark:text-green-400">
	<CheckCheckIcon />
	<AlertTitle>File uploaded successfully</AlertTitle>
	<AlertDescription class="text-green-600/80 dark:text-green-400/80">
		Your document has been saved and is now available in your files.
	</AlertDescription>
</Alert>
