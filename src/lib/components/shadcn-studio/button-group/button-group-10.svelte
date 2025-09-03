<script lang="ts">
	import { FlipHorizontalIcon, FlipVerticalIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="inline-flex w-fit divide-x divide-primary-foreground/30 rounded-md shadow-xs">
	<Button size="icon" class="rounded-none rounded-s-md shadow-none focus-visible:z-10">
		<FlipHorizontalIcon />
		<span class="sr-only">Flip Horizontal</span>
	</Button>
	<Button size="icon" class="rounded-none rounded-e-md shadow-none focus-visible:z-10">
		<FlipVerticalIcon />
		<span class="sr-only">Flip Vertical</span>
	</Button>
</div>
