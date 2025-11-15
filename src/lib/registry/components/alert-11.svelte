<script lang="ts">
	import { UserCheckIcon } from '@lucide/svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
</script>

<Alert.Root
	class="rounded-md border-l-6 border-green-600 bg-green-600/10 text-green-600 dark:border-green-400 dark:bg-green-400/10 dark:text-green-400"
>
	<UserCheckIcon />
	<Alert.Title>Your request to join the team is approved.</Alert.Title>
</Alert.Root>
