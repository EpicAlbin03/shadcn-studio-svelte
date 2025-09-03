<script lang="ts">
	import { CircleAlertIcon, XIcon } from '@lucide/svelte';
	import { Alert, AlertDescription, AlertTitle } from '$lib/components/ui/alert';

	let isActive = $state(true);
</script>

{#if isActive}
	<Alert class="flex justify-between">
		<CircleAlertIcon />
		<div class="flex-1 flex-col justify-center gap-1">
			<AlertTitle>New message!</AlertTitle>
			<AlertDescription>12 unread messages. Tap to see.</AlertDescription>
		</div>
		<button class="cursor-pointer" onclick={() => (isActive = false)}>
			<XIcon class="size-5" />
			<span class="sr-only">Close</span>
		</button>
	</Alert>
{/if}
