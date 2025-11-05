<script lang="ts">
	import * as AlertDialog from '$lib/components/ui/alert-dialog/index.js';
	import { Button } from '$lib/components/ui/button';
</script>

<AlertDialog.Root>
	<AlertDialog.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Alert Dialog</Button>
		{/snippet}
	</AlertDialog.Trigger>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
			<AlertDialog.Description>
				This action cannot be undone. This will permanently delete your account and remove your data
				from our servers.
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
			<AlertDialog.Action>Continue</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
