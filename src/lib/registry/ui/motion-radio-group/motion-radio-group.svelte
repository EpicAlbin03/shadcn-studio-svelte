<script lang="ts" module>
	import { RadioGroup as RadioGroupPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';

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
	class={cn('grid w-full gap-3', className)}
	{...props}
/>
