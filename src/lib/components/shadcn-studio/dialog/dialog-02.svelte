<script lang="ts">
	import { UploadIcon } from '@lucide/svelte';
	import * as AlertDialog from '$lib/components/ui/alert-dialog/index.js';
	import { Button } from '$lib/components/ui/button';
</script>

<AlertDialog.Root>
	<AlertDialog.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Alert Dialog (With Icon)</Button>
		{/snippet}
	</AlertDialog.Trigger>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<div
				class="mb-4 flex size-9 items-center justify-center rounded-full bg-sky-600/10 sm:mx-0 dark:bg-sky-400/10"
			>
				<UploadIcon class="size-4.5 text-sky-600 dark:text-sky-400" />
			</div>
			<AlertDialog.Title>New Update is Available</AlertDialog.Title>
			<AlertDialog.Description>
				New update is available for your application. Please update to the latest version to enjoy
				new features.
			</AlertDialog.Description>
			<ol class="mt-4 flex list-decimal flex-col gap-2 pl-6 text-sm text-muted-foreground">
				<li>New analytics widgets for daily/weekly metrics</li>
				<li>Simplified navigation menu</li>
				<li>Dark mode support</li>
				<li>Timeline: 6 weeks</li>
				<li>Follow-up meeting scheduled for next Tuesday</li>
			</ol>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
			<AlertDialog.Action
				class="bg-sky-600 text-white hover:bg-sky-600 focus-visible:ring-sky-600 dark:bg-sky-400 dark:hover:bg-sky-400 dark:focus-visible:ring-sky-400"
			>
				Update Now
			</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
