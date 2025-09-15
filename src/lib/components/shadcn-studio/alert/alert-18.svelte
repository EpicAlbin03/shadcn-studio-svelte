<script lang="ts">
	import { CircleAlertIcon } from '@lucide/svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
</script>

<Alert.Root class="border-sky-600 text-sky-600 dark:border-sky-400 dark:text-sky-400">
	<CircleAlertIcon />
	<Alert.Title>Verify your email to activate your account</Alert.Title>
	<Alert.Description class="text-sky-600/80 dark:text-sky-400/80">
		We've sent a confirmation link to your inbox. Check your email to complete the sign-up.
	</Alert.Description>
</Alert.Root>
