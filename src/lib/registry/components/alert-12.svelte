<script lang="ts">
	import { UserRoundXIcon } from '@lucide/svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
</script>

<Alert.Root
	class="rounded-none border-0 border-l-6 border-destructive bg-destructive/10 text-destructive"
>
	<UserRoundXIcon />
	<Alert.Title>Your request to join the team is denied.</Alert.Title>
</Alert.Root>
