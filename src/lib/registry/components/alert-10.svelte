<script lang="ts">
	import { CircleAlertIcon, XIcon } from '@lucide/svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';

	let isActive = $state(true);
</script>

{#if isActive}
	<Alert.Root
		class="flex justify-between border-accent-foreground/20 bg-gradient-to-b from-accent to-transparent to-60% text-accent-foreground"
	>
		<CircleAlertIcon />
		<div class="flex flex-1 flex-col gap-1">
			<Alert.Title>Verify your email to activate your account</Alert.Title>
			<Alert.Description class="text-accent-foreground/60">
				We've sent a confirmation link to your inbox. Check your email to complete the sign-up.
			</Alert.Description>
		</div>
		<button class="cursor-pointer" onclick={() => (isActive = false)}>
			<XIcon class="size-5" />
			<span class="sr-only">Close</span>
		</button>
	</Alert.Root>
{/if}
