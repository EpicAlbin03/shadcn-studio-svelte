<script lang="ts">
	import { CheckCheckIcon } from '@lucide/svelte';
	import { Alert, AlertTitle, AlertDescription } from '$lib/components/ui/alert';
</script>

<Alert class="border-green-600 text-green-600 dark:border-green-400 dark:text-green-400">
	<CheckCheckIcon />
	<AlertTitle>Account created successfully</AlertTitle>
	<AlertDescription class="text-green-600/80 dark:text-green-400/80">
		You are all set! You can now log in and start exploring your dashboard.
	</AlertDescription>
</Alert>
