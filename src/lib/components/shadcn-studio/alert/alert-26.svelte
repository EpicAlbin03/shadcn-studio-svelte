<script lang="ts">
	import { CircleAlertIcon } from '@lucide/svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
</script>

<Alert.Root class="border-none bg-primary text-primary-foreground">
	<CircleAlertIcon />
	<Alert.Title>Editing your profile</Alert.Title>
	<Alert.Description class="text-primary-foreground/80">
		Changes won't be saved until you click “Update.”
	</Alert.Description>
</Alert.Root>
