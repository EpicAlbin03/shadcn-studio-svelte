<script lang="ts">
	import { CircleAlertIcon, XIcon } from '@lucide/svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';

	let isActive = $state(true);
</script>

{#if isActive}
	<Alert.Root class="flex justify-between">
		<CircleAlertIcon />
		<div class="flex-1 flex-col justify-center gap-1">
			<Alert.Title>New message!</Alert.Title>
			<Alert.Description>12 unread messages. Tap to see.</Alert.Description>
		</div>
		<button class="cursor-pointer" onclick={() => (isActive = false)}>
			<XIcon class="size-5" />
			<span class="sr-only">Close</span>
		</button>
	</Alert.Root>
{/if}
