<script lang="ts">
	import { UploadIcon } from '@lucide/svelte';
	import {
		AlertDialog,
		AlertDialogAction,
		AlertDialogCancel,
		AlertDialogContent,
		AlertDialogDescription,
		AlertDialogFooter,
		AlertDialogHeader,
		AlertDialogTitle,
		AlertDialogTrigger
	} from '$lib/components/ui/alert-dialog';
	import { Button } from '$lib/components/ui/button';
</script>

<AlertDialog>
	<AlertDialogTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Alert Dialog (With Icon)</Button>
		{/snippet}
	</AlertDialogTrigger>
	<AlertDialogContent>
		<AlertDialogHeader>
			<div
				class="mb-4 flex size-9 items-center justify-center rounded-full bg-sky-600/10 sm:mx-0 dark:bg-sky-400/10"
			>
				<UploadIcon class="size-4.5 text-sky-600 dark:text-sky-400" />
			</div>
			<AlertDialogTitle>New Update is Available</AlertDialogTitle>
			<AlertDialogDescription>
				New update is available for your application. Please update to the latest version to enjoy
				new features.
			</AlertDialogDescription>
			<ol class="mt-4 flex list-decimal flex-col gap-2 pl-6 text-sm text-muted-foreground">
				<li>New analytics widgets for daily/weekly metrics</li>
				<li>Simplified navigation menu</li>
				<li>Dark mode support</li>
				<li>Timeline: 6 weeks</li>
				<li>Follow-up meeting scheduled for next Tuesday</li>
			</ol>
		</AlertDialogHeader>
		<AlertDialogFooter>
			<AlertDialogCancel>Cancel</AlertDialogCancel>
			<AlertDialogAction
				class="bg-sky-600 text-white hover:bg-sky-600 focus-visible:ring-sky-600 dark:bg-sky-400 dark:hover:bg-sky-400 dark:focus-visible:ring-sky-400"
			>
				Update Now
			</AlertDialogAction>
		</AlertDialogFooter>
	</AlertDialogContent>
</AlertDialog>
