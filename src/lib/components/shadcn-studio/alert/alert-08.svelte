<script lang="ts">
	import { CircleAlertIcon, XIcon } from '@lucide/svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
	import { Button } from '$lib/components/ui/button';

	let isActive = $state(true);
</script>

{#if isActive}
	<Alert.Root class="flex justify-between border-none bg-primary text-primary-foreground">
		<CircleAlertIcon />
		<div class="flex flex-1 flex-col gap-4">
			<div class="flex-1 flex-col justify-center gap-1">
				<Alert.Title>A new update is available</Alert.Title>
				<Alert.Description class="text-primary-foreground/80">
					Includes the at new dashboard View. Pages end exports will now load taster
				</Alert.Description>
			</div>
			<div class="flex items-center gap-4">
				<Button
					class="h-7 cursor-pointer rounded-md bg-secondary/10 px-2 hover:bg-secondary/20 focus-visible:bg-secondary/20"
				>
					Skip this update
				</Button>
				<Button variant="secondary" class="h-7 cursor-pointer rounded-md px-2">Install now</Button>
			</div>
		</div>
		<button class="size-5 cursor-pointer" onclick={() => (isActive = false)}>
			<XIcon class="size-5" />
			<span class="sr-only">Close</span>
		</button>
	</Alert.Root>
{/if}
