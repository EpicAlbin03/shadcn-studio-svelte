<script lang="ts">
	import { DownloadIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="inline-flex w-fit -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
	<Button variant="outline" class="rounded-none rounded-s-md shadow-none focus-visible:z-10">
		<DownloadIcon />
		Download
	</Button>
	<span
		class="flex items-center rounded-e-md border bg-background px-3 text-sm font-medium dark:border-input dark:bg-input/30"
	>
		15k
	</span>
</div>
