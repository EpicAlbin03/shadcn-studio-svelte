<script lang="ts">
	import { FileWarningIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Popover from '$lib/components/ui/popover/index.js';
</script>

<Popover.Root>
	<Popover.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="icon">
				<FileWarningIcon />
				<span class="sr-only">Delete File</span>
			</Button>
		{/snippet}
	</Popover.Trigger>
	<Popover.Content class="w-80">
		<div class="flex flex-col items-center gap-4">
			<div
				class="flex aspect-square size-12 items-center justify-center rounded-full bg-red-500/10"
			>
				<FileWarningIcon class="size-6 text-destructive" />
			</div>
			<div class="space-y-2 text-center">
				<div class="font-semibold text-balance">Are you sure you want to delete this file?</div>
				<p class="text-sm text-muted-foreground">
					Deleting this file can affect your project and other files connection so keep in mind
					before making decision
				</p>
			</div>
			<div class="grid w-full grid-cols-2 gap-2">
				<Button variant="secondary" size="sm">Cancel</Button>
				<Button variant="destructive" size="sm">Delete File</Button>
			</div>
		</div>
	</Popover.Content>
</Popover.Root>
