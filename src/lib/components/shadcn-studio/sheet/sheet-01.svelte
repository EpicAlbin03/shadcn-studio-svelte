<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import {
		Sheet,
		SheetClose,
		SheetContent,
		SheetDescription,
		SheetFooter,
		SheetHeader,
		SheetTitle,
		SheetTrigger
	} from '$lib/components/ui/sheet';
</script>

<Sheet>
	<SheetTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Default</Button>
		{/snippet}
	</SheetTrigger>
	<SheetContent>
		<SheetHeader>
			<SheetTitle>Edit profile</SheetTitle>
			<SheetDescription
				>Make changes to your profile here. Click save when you're done.</SheetDescription
			>
		</SheetHeader>
		<div class="grid flex-1 auto-rows-min gap-6 px-4">
			<div class="grid gap-3">
				<Label for="sheet-demo-name">Name</Label>
				<Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
			</div>
			<div class="grid gap-3">
				<Label for="sheet-demo-username">Username</Label>
				<Input id="sheet-demo-username" defaultValue="@peduarte" />
			</div>
		</div>
		<SheetFooter>
			<Button type="submit">Save changes</Button>
			<SheetClose>
				{#snippet child({ props })}
					<Button {...props} variant="outline">Close</Button>
				{/snippet}
			</SheetClose>
		</SheetFooter>
	</SheetContent>
</Sheet>
