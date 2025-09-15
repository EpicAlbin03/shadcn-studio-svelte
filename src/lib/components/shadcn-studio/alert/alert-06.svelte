<script lang="ts">
	import { FileWarningIcon } from '@lucide/svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
</script>

<Alert.Root class="flex items-center gap-3">
	<Avatar.Root class="rounded-md">
		<Avatar.Fallback class="rounded-md bg-destructive text-white dark:bg-destructive/60">
			<FileWarningIcon class="size-4" />
		</Avatar.Fallback>
	</Avatar.Root>
	<Alert.Title>This file contains virus!</Alert.Title>
</Alert.Root>
