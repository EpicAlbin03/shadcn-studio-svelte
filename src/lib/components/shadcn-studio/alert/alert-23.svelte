<script lang="ts">
	import { CheckCheckIcon } from '@lucide/svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
</script>

<Alert.Root
	class="border-none bg-green-600/10 text-green-600 dark:bg-green-400/10 dark:text-green-400"
>
	<CheckCheckIcon />
	<Alert.Title>File uploaded successfully</Alert.Title>
	<Alert.Description class="text-green-600/80 dark:text-green-400/80">
		Your document has been saved and is now available in your files.
	</Alert.Description>
</Alert.Root>
