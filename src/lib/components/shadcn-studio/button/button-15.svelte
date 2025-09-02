<script lang="ts">
	import { Trash2Icon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<Button
	variant="outline"
	class="border-destructive! text-destructive! hover:bg-destructive/10! focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40"
>
	<Trash2Icon />
	Discard
</Button>
