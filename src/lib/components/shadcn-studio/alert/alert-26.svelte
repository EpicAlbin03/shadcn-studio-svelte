<script lang="ts">
	import { CircleAlertIcon } from '@lucide/svelte';
	import { Alert, AlertTitle, AlertDescription } from '$lib/components/ui/alert';
</script>

<Alert class="border-none bg-primary text-primary-foreground">
	<CircleAlertIcon />
	<AlertTitle>Editing your profile</AlertTitle>
	<AlertDescription class="text-primary-foreground/80">
		Changes won&apos;t be saved until you click “Update.”
	</AlertDescription>
</Alert>
