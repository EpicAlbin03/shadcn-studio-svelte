<script lang="ts">
	import { TriangleAlertIcon } from '@lucide/svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
</script>

<Alert.Root class="border-none bg-destructive/10 text-destructive">
	<TriangleAlertIcon />
	<Alert.Title>Upload failed</Alert.Title>
	<Alert.Description class="text-destructive/80">
		Something went wrong. Please try again or use a different file format.
	</Alert.Description>
</Alert.Root>
