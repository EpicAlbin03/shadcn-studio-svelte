<script lang="ts">
	import { CircleAlertIcon } from '@lucide/svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
	import { Button } from '$lib/components/ui/button';
</script>

<Alert.Root class="flex items-center justify-between [&>svg]:translate-y-0">
	<CircleAlertIcon />
	<Alert.Title class="flex-1">New message!</Alert.Title>
	<Button variant="outline" class="h-7 cursor-pointer rounded-md px-2">Open</Button>
</Alert.Root>
