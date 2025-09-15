<script lang="ts">
	import { CircleAlertIcon } from '@lucide/svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
</script>

<Alert.Root class="border-none bg-amber-600 text-white dark:bg-amber-400">
	<CircleAlertIcon />
	<Alert.Title>Some details are missing</Alert.Title>
	<Alert.Description class="text-white/80">
		Complete your profile to get the best experience.
	</Alert.Description>
</Alert.Root>
