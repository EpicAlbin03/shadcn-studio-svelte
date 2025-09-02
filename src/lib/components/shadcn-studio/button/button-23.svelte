<script lang="ts">
	import { SaveIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<Button
	class="bg-sky-600/10 text-sky-600 hover:bg-sky-600/20 focus-visible:ring-sky-600/20 dark:bg-sky-400/10 dark:text-sky-400 dark:hover:bg-sky-400/20 dark:focus-visible:ring-sky-400/40"
>
	<SaveIcon />
	Save
</Button>
