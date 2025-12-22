<script lang="ts" module>
	import { cn } from '$lib/utils';
	import { RadioGroup as RadioGroupPrimitive } from 'bits-ui';

	export type MotionRadioGroupProps = RadioGroupPrimitive.RootProps;
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		value = $bindable(''),
		class: className,
		...props
	}: MotionRadioGroupProps = $props();
</script>

<RadioGroupPrimitive.Root
	bind:ref
	bind:value
	data-slot="radio-group"
	class={cn('grid gap-3', className)}
	{...props}
/>
