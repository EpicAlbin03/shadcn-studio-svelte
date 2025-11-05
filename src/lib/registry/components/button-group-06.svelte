<script lang="ts">
	import { ZoomInIcon, ZoomOutIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';

	let zoom = $state(95);

	function handleZoomIn() {
		if (zoom < 100) {
			zoom += 5;
		}
	}

	function handleZoomOut() {
		if (zoom > 0) {
			zoom -= 5;
		}
	}
</script>

<div class="inline-flex w-fit -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
	<Button
		variant="outline"
		size="icon"
		class="rounded-none rounded-s-md shadow-none focus-visible:z-10"
		onclick={handleZoomOut}
		disabled={zoom === 0}
	>
		<ZoomOutIcon />
		<span class="sr-only">Zoom out</span>
	</Button>
	<span
		class="flex items-center border bg-background px-3 text-sm font-medium dark:border-input dark:bg-input/30"
	>
		{zoom}%
	</span>
	<Button
		variant="outline"
		size="icon"
		class="rounded-none rounded-e-md shadow-none focus-visible:z-10"
		onclick={handleZoomIn}
		disabled={zoom === 100}
	>
		<ZoomInIcon />
		<span class="sr-only">Zoom in</span>
	</Button>
</div>
