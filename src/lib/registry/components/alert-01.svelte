<script lang="ts">
	import { CircleAlertIcon } from '@lucide/svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
</script>

<Alert.Root>
	<CircleAlertIcon />
	<Alert.Title>New message!</Alert.Title>
</Alert.Root>
