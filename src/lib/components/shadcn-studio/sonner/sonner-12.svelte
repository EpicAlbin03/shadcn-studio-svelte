<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { Button } from '$lib/components/ui/button';
</script>

<Button
	variant="outline"
	onclick={() =>
		toast.error('Oops, there was an error processing your request.', {
			style:
				'--normal-bg: color-mix(in oklab, var(--destructive) 10%, var(--background)); --normal-text: var(--destructive); --normal-border: var(--destructive);'
		})}
>
	Soft Destructive Toast
</Button>
