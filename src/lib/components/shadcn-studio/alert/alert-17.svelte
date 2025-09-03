<script lang="ts">
	import { CircleAlertIcon } from '@lucide/svelte';
	import { Alert, AlertTitle, AlertDescription } from '$lib/components/ui/alert';
</script>

<Alert>
	<CircleAlertIcon />
	<AlertTitle>Creating your account</AlertTitle>
	<AlertDescription>Fill in your details to get started.</AlertDescription>
</Alert>
