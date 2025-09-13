<script lang="ts">
	import { TriangleAlertIcon } from '@lucide/svelte';
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
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Label } from '$lib/components/ui/label';
</script>

<AlertDialog>
	<AlertDialogTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Alert Dialog Destructive</Button>
		{/snippet}
	</AlertDialogTrigger>
	<AlertDialogContent>
		<AlertDialogHeader class="items-center">
			<div
				class="mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-destructive/10"
			>
				<TriangleAlertIcon class="size-6 text-destructive" />
			</div>
			<AlertDialogTitle>Are you absolutely sure you want to delete?</AlertDialogTitle>
			<AlertDialogDescription class="text-center">
				This action cannot be undone. This will permanently delete your account and remove your data
				from our servers.
				<span class="mt-4 flex items-center justify-center gap-3">
					<Checkbox id="terms" />
					<Label for="terms">Don't ask next again</Label>
				</span>
			</AlertDialogDescription>
		</AlertDialogHeader>
		<AlertDialogFooter>
			<AlertDialogCancel>Cancel</AlertDialogCancel>
			<AlertDialogAction
				class="bg-destructive text-white hover:bg-destructive focus-visible:ring-destructive dark:bg-destructive/60"
			>
				Delete
			</AlertDialogAction>
		</AlertDialogFooter>
	</AlertDialogContent>
</AlertDialog>
