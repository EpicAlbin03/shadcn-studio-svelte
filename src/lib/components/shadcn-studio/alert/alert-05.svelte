<script lang="ts">
	import { FileWarningIcon } from '@lucide/svelte';
	import { Alert, AlertTitle } from '$lib/components/ui/alert';
</script>

<Alert class="flex items-stretch p-0">
	<div class="flex items-center rounded-s-[10px] border-r bg-destructive/10 p-2 text-destructive">
		<FileWarningIcon class="size-4" />
	</div>
	<AlertTitle class="p-3">This file contains virus!</AlertTitle>
</Alert>
