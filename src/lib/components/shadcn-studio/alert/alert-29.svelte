<script lang="ts">
	import { CircleAlertIcon } from '@lucide/svelte';
	import { Alert, AlertTitle, AlertDescription } from '$lib/components/ui/alert';
</script>

<Alert class="border-none bg-sky-600 text-white dark:bg-sky-400">
	<CircleAlertIcon />
	<AlertTitle>Your profile is visible</AlertTitle>
	<AlertDescription class="text-white/80">Anyone can view your basic information.</AlertDescription>
</Alert>
