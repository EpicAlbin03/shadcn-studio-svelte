<script lang="ts">
	import { FileWarningIcon } from '@lucide/svelte';
	import { Alert, AlertTitle } from '$lib/components/ui/alert';
	import { Avatar, AvatarFallback } from '$lib/components/ui/avatar';
</script>

<Alert class="flex items-center gap-3">
	<Avatar class="rounded-md">
		<AvatarFallback class="rounded-md bg-destructive text-white dark:bg-destructive/60">
			<FileWarningIcon class="size-4" />
		</AvatarFallback>
	</Avatar>
	<AlertTitle>This file contains virus!</AlertTitle>
</Alert>
