<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { Button } from '$lib/components/ui/button';
</script>

<Button
	variant="outline"
	onclick={() =>
		toast.success('Action completed successfully!', {
			style:
				'--normal-bg: color-mix(in oklab, light-dark(var(--color-green-600), var(--color-green-400)) 10%, var(--background)); --normal-text: light-dark(var(--color-green-600), var(--color-green-400)); --normal-border: light-dark(var(--color-green-600), var(--color-green-400));'
		})}
>
	Soft Success Toast
</Button>
