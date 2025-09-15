<script lang="ts">
	import { TriangleAlertIcon } from '@lucide/svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
</script>

<Alert.Root variant="destructive">
	<TriangleAlertIcon />
	<Alert.Title>Something went wrong!</Alert.Title>
</Alert.Root>
