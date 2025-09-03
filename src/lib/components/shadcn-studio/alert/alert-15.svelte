<script lang="ts">
	import { TriangleAlertIcon } from '@lucide/svelte';
	import { Alert, AlertTitle } from '$lib/components/ui/alert';
</script>

<Alert variant="destructive" class="border-destructive">
	<TriangleAlertIcon />
	<AlertTitle>Unable to process your payment.</AlertTitle>
</Alert>
