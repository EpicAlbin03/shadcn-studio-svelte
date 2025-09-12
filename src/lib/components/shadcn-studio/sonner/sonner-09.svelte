<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { Button } from '$lib/components/ui/button';
</script>

<Button
	variant="outline"
	onclick={() =>
		toast.info('This is for your information, please note.', {
			style:
				'--normal-bg: color-mix(in oklab, light-dark(var(--color-sky-600), var(--color-sky-400)) 10%, var(--background)); --normal-text: light-dark(var(--color-sky-600), var(--color-sky-400)); --normal-border: light-dark(var(--color-sky-600), var(--color-sky-400));'
		})}
>
	Soft Info Toast
</Button>
