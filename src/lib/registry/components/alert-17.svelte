<script lang="ts">
	import { CircleAlertIcon } from '@lucide/svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
</script>

<Alert.Root>
	<CircleAlertIcon />
	<Alert.Title>Creating your account</Alert.Title>
	<Alert.Description>Fill in your details to get started.</Alert.Description>
</Alert.Root>
