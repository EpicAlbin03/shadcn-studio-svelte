<script lang="ts">
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
			<Button {...props} variant="outline">Alert Dialog</Button>
		{/snippet}
	</AlertDialogTrigger>
	<AlertDialogContent>
		<AlertDialogHeader>
			<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
			<AlertDialogDescription>
				This action cannot be undone. This will permanently delete your account and remove your data
				from our servers.
			</AlertDialogDescription>
		</AlertDialogHeader>
		<AlertDialogFooter>
			<AlertDialogCancel>Cancel</AlertDialogCancel>
			<AlertDialogAction>Continue</AlertDialogAction>
		</AlertDialogFooter>
	</AlertDialogContent>
</AlertDialog>
