<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import {
		Dialog,
		DialogClose,
		DialogContent,
		DialogDescription,
		DialogFooter,
		DialogHeader,
		DialogTitle,
		DialogTrigger
	} from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
</script>

<Dialog>
	<form>
		<DialogTrigger>
			{#snippet child({ props })}
				<Button {...props} variant="outline">Middle left align</Button>
			{/snippet}
		</DialogTrigger>
		<DialogContent class="sm:left-0 sm:ms-6 sm:max-w-[425px] sm:translate-x-0">
			<DialogHeader>
				<DialogTitle>Edit profile</DialogTitle>
				<DialogDescription
					>Make changes to your profile here. Click save when you're done.</DialogDescription
				>
			</DialogHeader>
			<div class="grid gap-4">
				<div class="grid gap-3">
					<Label for="name-1">Name</Label>
					<Input id="name-1" name="name" defaultValue="Pedro Duarte" />
				</div>
				<div class="grid gap-3">
					<Label for="username-1">Username</Label>
					<Input id="username-1" name="username" defaultValue="@peduarte" />
				</div>
			</div>
			<DialogFooter>
				<DialogClose>
					{#snippet child({ props })}
						<Button {...props} variant="outline">Cancel</Button>
					{/snippet}
				</DialogClose>
				<Button type="submit">Save changes</Button>
			</DialogFooter>
		</DialogContent>
	</form>
</Dialog>
