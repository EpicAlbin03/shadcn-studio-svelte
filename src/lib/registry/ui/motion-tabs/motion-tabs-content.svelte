<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { motion } from 'motion-sv';
	import { cn } from '$lib/utils';
	import { motionTabsContext } from './motion-tabs.svelte';

	export type MotionTabsContentProps = HTMLAttributes<HTMLDivElement> & {
		value: string;
		children?: Snippet;
		class?: string;
	};
</script>

<script lang="ts">
	let { value, children, class: className, ...restProps }: MotionTabsContentProps = $props();

	const ctx = motionTabsContext.get();
	const isActive = $derived(ctx.activeValue === value);
</script>

<div class="w-full shrink-0 px-2" {...restProps}>
	<motion.div
		role="tabpanel"
		data-slot="tabs-content"
		data-value={value}
		class={cn('overflow-hidden', className)}
		initial={{ filter: 'blur(0px)' }}
		animate={{ filter: isActive ? 'blur(0px)' : 'blur(2px)' }}
		exit={{ filter: 'blur(0px)' }}
		transition={{ type: 'tween', duration: 0.2 }}
	>
		{@render children?.()}
	</motion.div>
</div>
