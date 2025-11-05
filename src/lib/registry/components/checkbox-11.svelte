<script lang="ts">
	import { HeartIcon, CircleIcon, StarIcon } from '@lucide/svelte';
	import { Checkbox as CheckboxPrimitive } from 'bits-ui';
</script>

<div class="flex items-center gap-2">
	<CheckboxPrimitive.Root
		data-slot="checkbox"
		checked
		class="group rounded-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
		aria-label="Heart icon"
	>
		<span class="group-data-[state=checked]:hidden">
			<HeartIcon class="stroke-1" />
		</span>
		<span class="group-data-[state=unchecked]:hidden">
			<HeartIcon class="fill-destructive stroke-destructive stroke-1" />
		</span>
	</CheckboxPrimitive.Root>
	<CheckboxPrimitive.Root
		data-slot="checkbox"
		checked
		class="group rounded-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
		aria-label="Star icon"
	>
		<span class="group-data-[state=checked]:hidden">
			<StarIcon class="stroke-1" />
		</span>
		<span class="group-data-[state=unchecked]:hidden">
			<StarIcon
				class="fill-amber-500 stroke-amber-500 stroke-1 dark:fill-amber-400 dark:stroke-amber-400"
			/>
		</span>
	</CheckboxPrimitive.Root>
	<CheckboxPrimitive.Root
		data-slot="checkbox"
		checked
		class="group rounded-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
		aria-label="Circle icon"
	>
		<span class="group-data-[state=checked]:hidden">
			<CircleIcon class="stroke-1" />
		</span>
		<span class="group-data-[state=unchecked]:hidden">
			<CircleIcon
				class="fill-green-600 stroke-green-600 stroke-1 dark:fill-green-400 dark:stroke-green-400"
			/>
		</span>
	</CheckboxPrimitive.Root>
</div>
