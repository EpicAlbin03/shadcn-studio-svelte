<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { Button } from '$lib/components/ui/button';
</script>

<Button
	variant="outline"
	onclick={() =>
		toast.error('Oops, there was an error processing your request.', {
			style:
				'--normal-bg: light-dark(var(--destructive), color-mix(in oklab, var(--destructive) 60%, var(--background))); --normal-text: var(--color-white); --normal-border: transparent;'
		})}
>
	Solid Destructive Toast
</Button>
