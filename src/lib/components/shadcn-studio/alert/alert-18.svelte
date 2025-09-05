<script lang="ts">
	import { CircleAlertIcon } from '@lucide/svelte';
	import { Alert, AlertTitle, AlertDescription } from '$lib/components/ui/alert';
</script>

<Alert class="border-sky-600 text-sky-600 dark:border-sky-400 dark:text-sky-400">
	<CircleAlertIcon />
	<AlertTitle>Verify your email to activate your account</AlertTitle>
	<AlertDescription class="text-sky-600/80 dark:text-sky-400/80">
		We've sent a confirmation link to your inbox. Check your email to complete the sign-up.
	</AlertDescription>
</Alert>
