<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogFooter,
		DialogHeader,
		DialogTitle
	} from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { toast } from 'svelte-sonner';

	type Props = {
		isOpen: boolean;
		onClose: () => void;
		onSave: (name: string) => boolean;
	};

	let { isOpen = $bindable(), onClose, onSave }: Props = $props();

	let name = $state('');

	const handleSave = () => {
		if (!name.trim()) {
			toast.error('Please enter a theme name');
			return;
		}

		const saveSuccessful = onSave(name.trim());

		// Only close the dialog and reset the name if save was successful
		if (saveSuccessful) {
			name = '';
			onClose();
		}
	};
</script>

<Dialog bind:open={isOpen} onOpenChange={onClose}>
	<DialogContent>
		<DialogHeader>
			<DialogTitle>Save Theme</DialogTitle>
			<DialogDescription>Give your theme a name to save it for later use.</DialogDescription>
		</DialogHeader>
		<Input
			bind:value={name}
			placeholder="Enter theme name"
			class="mt-4"
			onkeydown={(e: KeyboardEvent) => {
				if (e.key === 'Enter') {
					handleSave();
				}
			}}
		/>
		<DialogFooter class="mt-6">
			<Button variant="outline" onclick={onClose}>Cancel</Button>
			<Button onclick={handleSave}>Save Theme</Button>
		</DialogFooter>
	</DialogContent>
</Dialog>
