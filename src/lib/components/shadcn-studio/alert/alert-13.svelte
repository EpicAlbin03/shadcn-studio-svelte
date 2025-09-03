<script lang="ts">
	import { CircleAlertIcon } from '@lucide/svelte';

	import { Alert, AlertTitle } from '$lib/components/ui/alert';
	import { Button } from '$lib/components/ui/button';
</script>

<Alert class="flex items-center justify-between [&>svg]:translate-y-0">
	<CircleAlertIcon />
	<AlertTitle class="flex-1">New message!</AlertTitle>
	<Button variant="outline" class="h-7 cursor-pointer rounded-md px-2">Open</Button>
</Alert>
