<script lang="ts" module>
	import { motion } from 'motion-sv';
	import { cn, type WithoutChildrenOrChild } from '$lib/utils';
	import { Checkbox as CheckboxPrimitive } from 'bits-ui';
	import { MinusIcon } from '@lucide/svelte';

	export type MotionCheckboxProps = WithoutChildrenOrChild<CheckboxPrimitive.RootProps>;
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		checked = $bindable(false),
		indeterminate = $bindable(false),
		class: className,
		...props
	}: MotionCheckboxProps = $props();
</script>

<CheckboxPrimitive.Root
	bind:ref
	data-slot="checkbox"
	class={cn(
		'peer flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary',
		className
	)}
	bind:checked
	bind:indeterminate
	{...props}
>
	{#snippet children({ checked, indeterminate })}
		{#if checked}
			<motion.div
				data-slot="checkbox-indicator"
				class="text-current transition-none"
				whilePress={{ scale: 0.95 }}
				whileHover={{ scale: 1.05 }}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="3.5"
					stroke="currentColor"
					class="size-3.5"
				>
					<motion.path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M4.5 12.75l6 6 9-13.5"
						initial={{ pathLength: 0, opacity: 0 }}
						animate={checked ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
						transition={{
							duration: 0.2,
							delay: checked ? 0.2 : 0
						}}
						style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }}
					/>
				</svg>
			</motion.div>
		{:else if indeterminate}
			<MinusIcon class="size-3.5" />
		{/if}
	{/snippet}
</CheckboxPrimitive.Root>
