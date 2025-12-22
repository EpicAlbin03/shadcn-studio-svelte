<script lang="ts" module>
	import { motion } from 'motion-sv';
	import { cn, type WithoutChildrenOrChild } from '$lib/utils';
	import { Switch as SwitchPrimitive } from 'bits-ui';
	import { useDebounce } from 'runed';

	const SIZES = {
		sm: { TRACK_WIDTH: 26, THUMB_SIZE: 14, THUMB_STRETCH: 18 },
		md: { TRACK_WIDTH: 32, THUMB_SIZE: 16, THUMB_STRETCH: 25 },
		lg: { TRACK_WIDTH: 48, THUMB_SIZE: 24, THUMB_STRETCH: 40 }
	};

	const STRETCH_DURATION = 120; // ms

	type Size = keyof typeof SIZES;

	export type MotionSwitchProps = Omit<
		WithoutChildrenOrChild<SwitchPrimitive.RootProps>,
		'style'
	> & {
		size?: Size;
	};
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		class: className,
		checked = $bindable(false),
		size = 'md',
		...props
	}: MotionSwitchProps = $props();

	const { TRACK_WIDTH, THUMB_SIZE, THUMB_STRETCH } = SIZES[size];

	let isStretching = $state(false);
	const resetStretching = useDebounce(() => (isStretching = false), STRETCH_DURATION);

	const handleCheckedChange = (checked: boolean) => {
		isStretching = true;
		resetStretching();
	};

	const thumbWidth = $derived(isStretching ? THUMB_STRETCH : THUMB_SIZE);
	const offsetUnchecked = 0;
	const offsetChecked = $derived(TRACK_WIDTH - thumbWidth - 2);
	const thumbLeft = $derived(checked ? offsetChecked : offsetUnchecked);
</script>

<SwitchPrimitive.Root
	bind:ref
	bind:checked
	onCheckedChange={handleCheckedChange}
	data-slot="switch"
	class={cn(
		'peer relative inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80',
		size === 'sm' ? 'h-4 w-6.5' : size === 'lg' ? 'h-7 w-12' : 'h-[1.15rem] w-8',
		className
	)}
	{...props}
>
	<motion.span
		data-slot="switch-thumb"
		data-state={checked ? 'checked' : 'unchecked'}
		class="pointer-events-none absolute block rounded-full bg-background ring-0 dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground"
		animate={{
			width: thumbWidth,
			left: thumbLeft,
			transition: { duration: STRETCH_DURATION / 1000 }
		}}
		style={{
			height: THUMB_SIZE,
			minWidth: THUMB_SIZE,
			maxWidth: THUMB_STRETCH
		}}
	/>
</SwitchPrimitive.Root>
