<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { Button } from '$lib/components/ui/button';
</script>

<Button
	variant="outline"
	onclick={() =>
		toast('Action completed successfully!', {
			action: {
				label: 'Undo',
				onClick: () => console.log('Undo')
			}
		})}
>
	Toast with action
</Button>
