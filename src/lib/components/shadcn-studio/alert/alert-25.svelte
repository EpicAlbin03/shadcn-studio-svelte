<script lang="ts">
	import { TriangleAlertIcon } from '@lucide/svelte';
	import { Alert, AlertTitle, AlertDescription } from '$lib/components/ui/alert';
</script>

<Alert class="border-none bg-destructive/10 text-destructive">
	<TriangleAlertIcon />
	<AlertTitle>Upload failed</AlertTitle>
	<AlertDescription class="text-destructive/80">
		Something went wrong. Please try again or use a different file format.
	</AlertDescription>
</Alert>
