<script lang="ts">
	import { Motion } from 'motion-start';
	import { buttonVariants } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
</script>

<Motion.button
	whileTap={{ scale: 0.85 }}
	class={cn(buttonVariants({ variant: 'default', size: 'default' }), 'transition-none')}
>
	Tap Animation
</Motion.button>
