<script lang="ts">
	import { TriangleAlertIcon } from '@lucide/svelte';
	import * as AlertDialog from '$lib/components/ui/alert-dialog/index.js';
	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Label } from '$lib/components/ui/label';
</script>

<AlertDialog.Root>
	<AlertDialog.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Alert Dialog Destructive</Button>
		{/snippet}
	</AlertDialog.Trigger>
	<AlertDialog.Content>
		<AlertDialog.Header class="items-center">
			<div
				class="mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-destructive/10"
			>
				<TriangleAlertIcon class="size-6 text-destructive" />
			</div>
			<AlertDialog.Title>Are you absolutely sure you want to delete?</AlertDialog.Title>
			<AlertDialog.Description class="text-center">
				This action cannot be undone. This will permanently delete your account and remove your data
				from our servers.
				<span class="mt-4 flex items-center justify-center gap-3">
					<Checkbox id="terms" />
					<Label for="terms">Don't ask again</Label>
				</span>
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
			<AlertDialog.Action
				class="bg-destructive text-white hover:bg-destructive focus-visible:ring-destructive dark:bg-destructive/60"
			>
				Delete
			</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
