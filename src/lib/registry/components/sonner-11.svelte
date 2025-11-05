<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { Button } from '$lib/components/ui/button';
</script>

<Button
	variant="outline"
	onclick={() =>
		toast.warning('Warning: Please check the entered data.', {
			style:
				'--normal-bg: color-mix(in oklab, light-dark(var(--color-amber-600), var(--color-amber-400)) 10%, var(--background)); --normal-text: light-dark(var(--color-amber-600), var(--color-amber-400)); --normal-border: light-dark(var(--color-amber-600), var(--color-amber-400));'
		})}
>
	Soft Warning Toast
</Button>
