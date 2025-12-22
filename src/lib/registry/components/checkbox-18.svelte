<script lang="ts">
	import { MotionCheckbox } from '$lib/registry/ui/motion-checkbox';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();

	let checked = $state(true);
</script>

<div class="flex items-center gap-2">
	<MotionCheckbox
		{id}
		bind:checked
		class="rounded-full focus-visible:border-blue-500 focus-visible:ring-blue-500/20 data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500! dark:text-white dark:focus-visible:ring-blue-500/40"
	/>
	<Label
		for={id}
		class="relative peer-data-[state=checked]:text-primary after:absolute after:start-0 after:top-1/2 after:h-px after:w-full after:origin-bottom after:scale-x-0 after:bg-primary after:transition-transform after:duration-500 after:ease-in-out peer-data-[state=checked]:after:origin-bottom peer-data-[state=checked]:after:scale-x-100"
	>
		Animated todo list item
	</Label>
</div>
