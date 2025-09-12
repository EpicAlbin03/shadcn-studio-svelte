<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { Button } from '$lib/components/ui/button';
</script>

<Button
	variant="outline"
	onclick={() =>
		toast.warning('Warning: Please check the entered data.', {
			style:
				'--normal-bg: var(--background); --normal-text: light-dark(var(--color-amber-600), var(--color-amber-400)); --normal-border: light-dark(var(--color-amber-600), var(--color-amber-400));'
		})}
>
	Outline Warning Toast
</Button>
