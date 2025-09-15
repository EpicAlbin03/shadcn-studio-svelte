<script lang="ts">
	import { CircleAlertIcon } from '@lucide/svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
</script>

<Alert.Root class="border-none bg-sky-600/10 text-sky-600 dark:bg-sky-400/10 dark:text-sky-400">
	<CircleAlertIcon />
	<Alert.Title>Only certain file types are allowed</Alert.Title>
	<Alert.Description class="text-sky-600/80 dark:text-sky-400/80">
		You can upload PDF, DOCX, JPG, or PNG files up to 20MB.
	</Alert.Description>
</Alert.Root>
