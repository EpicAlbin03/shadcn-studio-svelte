<script lang="ts">
	import { TriangleAlertIcon } from '@lucide/svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
</script>

<Alert.Root variant="destructive" class="border-destructive">
	<TriangleAlertIcon />
	<Alert.Title>Unable to process your payment.</Alert.Title>
</Alert.Root>
