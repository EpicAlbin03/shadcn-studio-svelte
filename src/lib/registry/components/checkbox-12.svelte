<script lang="ts">
	import { CircleCheckIcon, MinusIcon } from '@lucide/svelte';
	import { Checkbox as CheckboxPrimitive } from 'bits-ui';
</script>

<div class="flex items-center gap-2">
	<CheckboxPrimitive.Root
		data-slot="checkbox"
		checked
		class="peer size-7 shrink-0 rounded-full bg-destructive shadow-xs transition-shadow outline-none focus-visible:ring-[3px] focus-visible:ring-destructive/20 data-[state=checked]:text-destructive dark:focus-visible:ring-destructive/40"
		aria-label="Color destructive"
	>
		{#snippet children({ checked, indeterminate })}
			<div
				data-slot="checkbox-indicator"
				class="flex items-center justify-center text-current transition-none"
			>
				{#if checked}
					<CircleCheckIcon class="size-5.5 fill-white stroke-current" />
				{:else if indeterminate}
					<MinusIcon class="size-5.5 fill-white stroke-current" />
				{/if}
			</div>
		{/snippet}
	</CheckboxPrimitive.Root>
	<CheckboxPrimitive.Root
		data-slot="checkbox"
		checked
		class="peer size-7 shrink-0 rounded-full bg-sky-600 shadow-xs transition-shadow outline-none focus-visible:ring-[3px] focus-visible:ring-sky-600/20 data-[state=checked]:text-sky-600 dark:bg-sky-400 dark:focus-visible:ring-sky-400/40 dark:data-[state=checked]:text-sky-400"
		aria-label="Color info"
	>
		{#snippet children({ checked, indeterminate })}
			<div
				data-slot="checkbox-indicator"
				class="flex items-center justify-center text-current transition-none"
			>
				{#if checked}
					<CircleCheckIcon class="size-5.5 fill-white stroke-current" />
				{:else if indeterminate}
					<MinusIcon class="size-5.5 fill-white stroke-current" />
				{/if}
			</div>
		{/snippet}
	</CheckboxPrimitive.Root>
	<CheckboxPrimitive.Root
		data-slot="checkbox"
		checked
		class="peer size-7 shrink-0 rounded-full bg-green-600 shadow-xs transition-shadow outline-none focus-visible:ring-[3px] focus-visible:ring-green-600/20 data-[state=checked]:text-green-600 dark:bg-green-400 dark:focus-visible:ring-green-400/40 dark:data-[state=checked]:text-green-400"
		aria-label="Color success"
	>
		{#snippet children({ checked, indeterminate })}
			<div
				data-slot="checkbox-indicator"
				class="flex items-center justify-center text-current transition-none"
			>
				{#if checked}
					<CircleCheckIcon class="size-5.5 fill-white stroke-current" />
				{:else if indeterminate}
					<MinusIcon class="size-5.5 fill-white stroke-current" />
				{/if}
			</div>
		{/snippet}
	</CheckboxPrimitive.Root>
</div>
