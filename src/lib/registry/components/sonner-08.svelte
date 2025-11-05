<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="grid grid-cols-2 gap-2">
	<Button
		variant="outline"
		onclick={() =>
			toast('Action completed successfully!', {
				position: 'top-left'
			})}
	>
		Top Left
	</Button>
	<Button
		variant="outline"
		onclick={() =>
			toast('Action completed successfully!', {
				position: 'top-center'
			})}
	>
		Top Center
	</Button>
	<Button
		variant="outline"
		onclick={() =>
			toast('Action completed successfully!', {
				position: 'top-right'
			})}
	>
		Top Right
	</Button>
	<Button
		variant="outline"
		onclick={() =>
			toast('Action completed successfully!', {
				position: 'bottom-left'
			})}
	>
		Bottom Left
	</Button>
	<Button
		variant="outline"
		onclick={() =>
			toast('Action completed successfully!', {
				position: 'bottom-center'
			})}
	>
		Bottom Center
	</Button>
	<Button
		variant="outline"
		onclick={() =>
			toast('Action completed successfully!', {
				position: 'bottom-right'
			})}
	>
		Bottom Right
	</Button>
</div>
