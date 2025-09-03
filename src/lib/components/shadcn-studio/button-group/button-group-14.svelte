<script lang="ts">
	import { ThumbsDownIcon, ThumbsUpIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="inline-flex w-fit -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
	<Button
		variant="outline"
		class="group w-20 justify-start gap-3 overflow-hidden rounded-none rounded-s-md shadow-none transition-all duration-200 not-hover:w-10 hover:bg-sky-500/10 hover:text-sky-500 focus-visible:z-10 dark:hover:bg-sky-400/10 dark:hover:text-sky-400"
	>
		<ThumbsUpIcon />
		Like
	</Button>
	<Button
		variant="outline"
		class="group w-24.5 justify-end gap-3 overflow-hidden rounded-none rounded-e-md shadow-none transition-all duration-200 not-hover:w-10 hover:bg-destructive/10! hover:text-destructive focus-visible:z-10"
	>
		Dislike
		<ThumbsDownIcon />
	</Button>
</div>
