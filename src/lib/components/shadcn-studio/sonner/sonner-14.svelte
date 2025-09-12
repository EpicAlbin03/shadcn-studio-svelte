<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { Button } from '$lib/components/ui/button';
</script>

<Button
	variant="outline"
	onclick={() =>
		toast.success('Action completed successfully!', {
			style:
				'--normal-bg: var(--background); --normal-text: light-dark(var(--color-green-600), var(--color-green-400)); --normal-border: light-dark(var(--color-green-600), var(--color-green-400));'
		})}
>
	Outline Success Toast
</Button>
