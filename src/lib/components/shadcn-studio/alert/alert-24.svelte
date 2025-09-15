<script lang="ts">
	import { CircleAlertIcon } from '@lucide/svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
</script>

<Alert.Root
	class="border-none bg-amber-600/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400"
>
	<CircleAlertIcon />
	<Alert.Title>This file might be too large</Alert.Title>
	<Alert.Description class="text-amber-600/80 dark:text-amber-400/80">
		Uploading large files may take longer or fail. Consider compressing it first.
	</Alert.Description>
</Alert.Root>
