<script lang="ts">
	import { UserCheckIcon } from '@lucide/svelte';
	import { Alert, AlertTitle } from '$lib/components/ui/alert';
</script>

<Alert
	class="rounded-md border-l-6 border-green-600 bg-green-600/10 text-green-600 dark:border-green-400 dark:bg-green-400/10 dark:text-green-400"
>
	<UserCheckIcon />
	<AlertTitle>Your request to join the team is approved.</AlertTitle>
</Alert>
