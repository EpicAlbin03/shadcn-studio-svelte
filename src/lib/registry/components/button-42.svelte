<script lang="ts">
	import { motion } from 'motion-sv';
	import { buttonVariants } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
</script>

<motion.button
	whilePress={{ scale: 0.85 }}
	class={cn(buttonVariants({ variant: 'default', size: 'default' }), 'transition-none')}
>
	Tap Animation
</motion.button>
