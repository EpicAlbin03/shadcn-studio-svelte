<script lang="ts">
	import { CircleAlertIcon } from '@lucide/svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
</script>

<Alert.Root class="border-none bg-sky-600 text-white dark:bg-sky-400">
	<CircleAlertIcon />
	<Alert.Title>Your profile is visible</Alert.Title>
	<Alert.Description class="text-white/80">
		Anyone can view your basic information.
	</Alert.Description>
</Alert.Root>
