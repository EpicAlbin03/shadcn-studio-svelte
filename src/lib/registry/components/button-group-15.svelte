<script lang="ts">
	import { motion } from 'motion-sv';
	import { ChevronLeftIcon, ChevronRightIcon } from '@lucide/svelte';
	import { buttonVariants } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
</script>

<div class="inline-flex w-fit divide-x divide-primary-foreground/30 rounded-md shadow-xs">
	<motion.button
		whilePress={{ scale: 0.9 }}
		class={cn(
			buttonVariants({ variant: 'default', size: 'default' }),
			'rounded-none rounded-s-md shadow-none transition-none focus-visible:z-10'
		)}
	>
		<ChevronLeftIcon />
		Previous
	</motion.button>
	<motion.button
		whilePress={{ scale: 0.9 }}
		class={cn(
			buttonVariants({ variant: 'default', size: 'default' }),
			'rounded-none rounded-e-md shadow-none transition-none focus-visible:z-10'
		)}
	>
		Next
		<ChevronRightIcon />
	</motion.button>
</div>
