<script lang="ts">
	import { TriangleAlertIcon } from '@lucide/svelte';
	import { Alert, AlertTitle } from '$lib/components/ui/alert';
</script>

<Alert variant="destructive">
	<TriangleAlertIcon />
	<AlertTitle>Something went wrong!</AlertTitle>
</Alert>
