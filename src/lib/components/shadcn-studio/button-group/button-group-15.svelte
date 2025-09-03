<script lang="ts">
	import { Motion } from 'motion-start';
	import { ChevronLeftIcon, ChevronRightIcon } from '@lucide/svelte';
	import { buttonVariants } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
</script>

<div class="inline-flex w-fit divide-x divide-primary-foreground/30 rounded-md shadow-xs">
	<Motion.button
		whileTap={{ scale: 0.9 }}
		class={cn(
			buttonVariants({ variant: 'default', size: 'default' }),
			'rounded-none rounded-s-md shadow-none transition-none focus-visible:z-10'
		)}
	>
		<ChevronLeftIcon />
		Previous
	</Motion.button>
	<Motion.button
		whileTap={{ scale: 0.9 }}
		class={cn(
			buttonVariants({ variant: 'default', size: 'default' }),
			'rounded-none rounded-e-md shadow-none transition-none focus-visible:z-10'
		)}
	>
		Next
		<ChevronRightIcon />
	</Motion.button>
</div>
