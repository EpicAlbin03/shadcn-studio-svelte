<script lang="ts">
	import { HeartIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';

	let isLiked = $state(true);
</script>

<div class="inline-flex w-fit -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
	<Button
		variant="outline"
		class="rounded-none rounded-s-md shadow-none focus-visible:z-10"
		onclick={() => (isLiked = !isLiked)}
	>
		<HeartIcon class={cn({ 'fill-destructive stroke-destructive': isLiked })} />
		Like
	</Button>
	<span
		class="flex items-center rounded-e-md border bg-background px-3 text-sm font-medium dark:border-input dark:bg-input/30"
	>
		{isLiked ? 46 : 45}
	</span>
</div>
