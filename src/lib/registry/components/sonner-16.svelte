<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { Button } from '$lib/components/ui/button';
</script>

<Button
	variant="outline"
	onclick={() =>
		toast.error('Oops, there was an error processing your request.', {
			style:
				'--normal-bg: var(--background); --normal-text: var(--destructive); --normal-border: var(--destructive);'
		})}
>
	Outline Destructive Toast
</Button>
