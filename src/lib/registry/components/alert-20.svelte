<script lang="ts">
	import { CircleAlertIcon } from '@lucide/svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
</script>

<Alert.Root class="border-amber-600 text-amber-600 dark:border-amber-400 dark:text-amber-400">
	<CircleAlertIcon />
	<Alert.Title>Your password is too weak</Alert.Title>
	<Alert.Description class="text-amber-600/80 dark:text-amber-400/80">
		Try using a mix of uppercase letters, numbers, and symbols for better security.
	</Alert.Description>
</Alert.Root>
