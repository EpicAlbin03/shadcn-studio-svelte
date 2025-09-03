<script lang="ts">
	import { CheckCheckIcon } from '@lucide/svelte';
	import { Alert, AlertTitle, AlertDescription } from '$lib/components/ui/alert';
</script>

<Alert class="border-none bg-green-600 text-white dark:bg-green-400">
	<CheckCheckIcon />
	<AlertTitle>Profile updated</AlertTitle>
	<AlertDescription class="text-white/80"
		>Your changes have been saved successfully.</AlertDescription
	>
</Alert>
