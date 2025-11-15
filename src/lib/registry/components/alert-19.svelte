<script lang="ts">
	import { CheckCheckIcon } from '@lucide/svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
</script>

<Alert.Root class="border-green-600 text-green-600 dark:border-green-400 dark:text-green-400">
	<CheckCheckIcon />
	<Alert.Title>Account created successfully</Alert.Title>
	<Alert.Description class="text-green-600/80 dark:text-green-400/80">
		You are all set! You can now log in and start exploring your dashboard.
	</Alert.Description>
</Alert.Root>
