<script lang="ts">
	import { CheckCheckIcon } from '@lucide/svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
</script>

<Alert.Root class="border-none bg-green-600 text-white dark:bg-green-400">
	<CheckCheckIcon />
	<Alert.Title>Profile updated</Alert.Title>
	<Alert.Description class="text-white/80">
		Your changes have been saved successfully.
	</Alert.Description>
</Alert.Root>
