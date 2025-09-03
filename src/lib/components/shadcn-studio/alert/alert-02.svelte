<script lang="ts">
	import { CircleAlertIcon } from '@lucide/svelte';
	import { Alert, AlertTitle, AlertDescription } from '$lib/components/ui/alert';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
</script>

<Alert class="flex items-center justify-between">
	<Avatar class="rounded-sm">
		<AvatarImage src="/avatars/05.webp" alt="Hallie Richards" class="rounded-sm" />
		<AvatarFallback class="text-xs">HR</AvatarFallback>
	</Avatar>
	<div class="flex-1 flex-col justify-center gap-1">
		<AlertTitle class="flex-1">Sara has replied on the uploaded image.</AlertTitle>
		<AlertDescription>12 unread messages. Tap to see.</AlertDescription>
	</div>
	<CircleAlertIcon />
</Alert>
