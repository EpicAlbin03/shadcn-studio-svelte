<script lang="ts">
	import { FileWarningIcon } from '@lucide/svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
</script>

<Alert.Root class="flex items-stretch p-0">
	<div class="flex items-center rounded-s-[10px] border-r bg-destructive/10 p-2 text-destructive">
		<FileWarningIcon class="size-4" />
	</div>
	<Alert.Title class="p-3">This file contains virus!</Alert.Title>
</Alert.Root>
