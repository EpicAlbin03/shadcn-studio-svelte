<script lang="ts">
	import { CircleAlertIcon } from '@lucide/svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
</script>

<Alert.Root class="flex items-center justify-between">
	<Avatar.Root class="rounded-sm">
		<Avatar.Image src="/avatars/05.webp" alt="Hallie Richards" class="rounded-sm" />
		<Avatar.Fallback class="text-xs">HR</Avatar.Fallback>
	</Avatar.Root>
	<div class="flex-1 flex-col justify-center gap-1">
		<Alert.Title class="flex-1">Sara has replied on the uploaded image.</Alert.Title>
		<Alert.Description>12 unread messages. Tap to see.</Alert.Description>
	</div>
	<CircleAlertIcon />
</Alert.Root>
