<!-- <script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Sheet from "$lib/components/ui/sheet/index.js";
</script>

<Sheet modal={false}>
	<Sheet.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">No Overlay</Button>
		{/snippet}
	</Sheet.Trigger>
	<Sheet.Content>
		<Sheet.Header>
			<Sheet.Title>Edit profile</Sheet.Title>
			<Sheet.Description
				>Make changes to your profile here. Click save when you're done.</Sheet.Description
			>
		</Sheet.Header>
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
		<Sheet.Footer>
			<Button type="submit">Save changes</Button>
			<Sheet.Close>
				{#snippet child({ props })}
					<Button {...props} variant="outline">Close</Button>
				{/snippet}
			</Sheet.Close>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root> -->
