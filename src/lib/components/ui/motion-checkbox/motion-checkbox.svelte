<script lang="ts" module>
	import { motion, type MotionProps } from 'motion-start';
	import type { Snippet } from 'svelte';
	import { cn, type WithoutChildrenOrChild } from '$lib/utils';
	import { Checkbox as CheckboxPrimitive } from 'bits-ui';
	import { CheckIcon, MinusIcon } from '@lucide/svelte';

	export type MotionCheckboxProps = Omit<MotionProps, 'style'> &
		WithoutChildrenOrChild<CheckboxPrimitive.RootProps>;
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		checked = $bindable(false),
		indeterminate = $bindable(false),
		class: className,
		...props
	}: WithoutChildrenOrChild<CheckboxPrimitive.RootProps> = $props();
</script>

<CheckboxPrimitive.Root>
	{#snippet child()}
		<motion.button
			data-slot="checkbox"
			class={cn(
				'peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-colors duration-500 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary',
				className
			)}
			whileTap={{ scale: 0.95 }}
			whileHover={{ scale: 1.05 }}
			{...props}
		>
			<div data-slot="checkbox-indicator" class="text-current transition-none">
				{#if checked}
					<CheckIcon class="size-3.5" />
				{:else if indeterminate}
					<MinusIcon class="size-3.5" />
				{/if}
			</div>
			<!-- <Motion.svg
				data-slot="checkbox-indicator"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth="3.5"
				stroke="currentColor"
				class="size-3.5"
				initial="unchecked"
				animate={checked ? 'checked' : 'unchecked'}
			>
				<Motion.path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M4.5 12.75l6 6 9-13.5"
					variants={{
						checked: {
							pathLength: 1,
							opacity: 1,
							transition: {
								duration: 0.2,
								delay: 0.2
							}
						},
						unchecked: {
							pathLength: 0,
							opacity: 0,
							transition: {
								duration: 0.2
							}
						}
					}}
				/>
			</Motion.svg> -->
		</motion.button>
	{/snippet}
</CheckboxPrimitive.Root>
