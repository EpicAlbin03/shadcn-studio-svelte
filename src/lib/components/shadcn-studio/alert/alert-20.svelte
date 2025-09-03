<script lang="ts">
	import { CircleAlertIcon } from '@lucide/svelte';
	import { Alert, AlertTitle, AlertDescription } from '$lib/components/ui/alert';
</script>

<Alert class="border-amber-600 text-amber-600 dark:border-amber-400 dark:text-amber-400">
	<CircleAlertIcon />
	<AlertTitle>Your password is too weak</AlertTitle>
	<AlertDescription class="text-amber-600/80 dark:text-amber-400/80">
		Try using a mix of uppercase letters, numbers, and symbols for better security.
	</AlertDescription>
</Alert>
