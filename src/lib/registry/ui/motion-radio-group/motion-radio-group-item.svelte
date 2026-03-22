<script lang="ts" module>
	import CircleIcon from '@lucide/svelte/icons/circle';
	import { RadioGroup as RadioGroupPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import { AnimatePresence, motion, type Transition } from 'motion-sv';
	import { cn } from '$lib/utils';

	export type MotionRadioGroupItemProps = WithoutChildrenOrChild<RadioGroupPrimitive.ItemProps> & {
		transition?: Transition;
	};
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		transition = { type: 'spring', stiffness: 200, damping: 16 },
		class: className,
		...props
	}: MotionRadioGroupItemProps = $props();
</script>

<RadioGroupPrimitive.Item
	bind:ref
	data-slot="radio-group-item"
	class={cn(
		'group/radio-group-item peer relative flex aspect-square size-4 shrink-0 rounded-full border border-input outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary',
		className
	)}
	{...props}
>
	{#snippet children({ checked })}
		<motion.div
			data-slot="radio-group-indicator"
			whileHover={{ scale: 1.05 }}
			whilePress={{ scale: 0.95 }}
			class="flex size-4 items-center justify-center"
		>
			<AnimatePresence>
				{#if checked}
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0 }}
						class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
						{transition}
					>
						<CircleIcon class="size-2 rounded-full bg-primary-foreground" />
					</motion.div>
				{/if}
			</AnimatePresence>
		</motion.div>
	{/snippet}
</RadioGroupPrimitive.Item>
