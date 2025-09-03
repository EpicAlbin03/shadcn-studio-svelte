<script lang="ts">
	import { CircleAlertIcon } from '@lucide/svelte';
	import { Alert, AlertTitle, AlertDescription } from '$lib/components/ui/alert';
</script>

<Alert class="border-none bg-amber-600 text-white dark:bg-amber-400">
	<CircleAlertIcon />
	<AlertTitle>Some details are missing</AlertTitle>
	<AlertDescription class="text-white/80"
		>Complete your profile to get the best experience.</AlertDescription
	>
</Alert>
