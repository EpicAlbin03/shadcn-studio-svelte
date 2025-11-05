<script lang="ts">
	import { TriangleAlertIcon } from '@lucide/svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
</script>

<Alert.Root class="border-none bg-destructive text-white dark:bg-destructive/60">
	<TriangleAlertIcon />
	<Alert.Title>Couldn't save changes</Alert.Title>
	<Alert.Description class="text-white/80">Please try again or reload the page.</Alert.Description>
</Alert.Root>
