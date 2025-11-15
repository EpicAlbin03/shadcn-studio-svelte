<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { Button } from '$lib/components/ui/button';
</script>

<Button
	variant="outline"
	onclick={() =>
		toast.info('This is for your information, please note.', {
			style:
				'--normal-bg: light-dark(var(--color-sky-600), var(--color-sky-400)); --normal-text: var(--color-white); --normal-border: light-dark(var(--color-sky-600), var(--color-sky-400));'
		})}
>
	Solid Info Toast
</Button>
