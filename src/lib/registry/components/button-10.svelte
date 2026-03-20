<script lang="ts">
	import TrashIcon from '@lucide/svelte/icons/trash';
	import { Button } from '$lib/components/ui/button';
</script>

<Button
	class="bg-transparent bg-linear-to-r from-destructive via-destructive/60 to-destructive bg-size-[200%_auto] text-white hover:bg-transparent hover:bg-position-[99%_center] focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40"
>
	<TrashIcon />
	Delete
</Button>
