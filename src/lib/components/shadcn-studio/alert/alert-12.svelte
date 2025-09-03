<script lang="ts">
	import { UserRoundXIcon } from '@lucide/svelte';
	import { Alert, AlertTitle } from '$lib/components/ui/alert';
</script>

<Alert
	class="rounded-none border-0 border-l-6 border-destructive bg-destructive/10 text-destructive"
>
	<UserRoundXIcon />
	<AlertTitle>Your request to join the team is denied.</AlertTitle>
</Alert>
