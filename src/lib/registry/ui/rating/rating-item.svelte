<script lang="ts">
	import { cn, type WithElementRef } from '$lib/utils';
	import { type Icon as IconType } from '@lucide/svelte';
	import type { HTMLLabelAttributes, MouseEventHandler } from 'svelte/elements';
	import { ratingVariants, type RatingVariant } from './rating.svelte';

	type RatingItemProps = WithElementRef<HTMLLabelAttributes> & {
		variant?: RatingVariant;
		size: number;
		value: number;
		hoveredValue: number | null;
		point: number;
		name: string;
		readOnly?: boolean;
		disabled?: boolean;
		precision: number;
		Icon: typeof IconType;
		onMouseLeave: MouseEventHandler<HTMLLabelElement>;
	};

	let {
		ref = $bindable(null),
		size,
		variant = 'default',
		value = $bindable(0),
		point,
		hoveredValue = $bindable(0),
		name,
		readOnly = false,
		disabled = false,
		precision,
		Icon,
		onMouseLeave,
		class: className,
		...props
	}: RatingItemProps = $props();

	const Comp = readOnly ? 'span' : 'label';
	const id = $props.id();
	const ratingIconId = `rating-icon-${id}`;
	const isInteractive = !readOnly && !disabled;
	const partialPoint = point % 1;
	const isPartialPoint = partialPoint !== 0;
	const shouldShowFilled = (hoveredValue || value) >= point;
	const partialPointWidth =
		isPartialPoint && shouldShowFilled ? `${partialPoint * 100}%` : undefined;

	const iconClasses = $derived.by(() => {
		const emptyIconClass = cn(
			'fill-muted-foreground/20 stroke-muted-foreground/10',
			variant === 'yellow' &&
				'fill-amber-600/30 stroke-amber-600/10 dark:fill-amber-400/30 dark:stroke-amber-400/10'
		);

		const fullIconClass = cn(ratingVariants({ variant }));

		return {
			emptyIconClass,
			fullIconClass
		};
	});

	const getRatingPoint = (event: MouseEvent & { currentTarget: HTMLLabelElement }) => {
		const { left, width } = event.currentTarget.getBoundingClientRect();

		if (width === 0 || precision <= 0 || precision > 1) return 0;
		const x = event.clientX - left;
		const fillRatio = x / width;
		const base = Math.ceil(point) - 1;

		return base + Math.ceil(fillRatio / precision) * precision;
	};

	const handleMouseMove = (event: MouseEvent & { currentTarget: HTMLLabelElement }) => {
		if (!isInteractive) return;
		hoveredValue = getRatingPoint(event);
	};

	const handleClick = (event: MouseEvent & { currentTarget: HTMLLabelElement }) => {
		if (!isInteractive) return;
		const newPoint = getRatingPoint(event);

		hoveredValue = 0;
		value = newPoint === value ? 0 : newPoint;

		// Prevent focus on click by blurring the element
		event.currentTarget.blur();
	};
</script>

<svelte:element
	this={Comp}
	bind:this={ref}
	data-slot="rating-item"
	for={readOnly ? undefined : `${ratingIconId}-${point}`}
	aria-label={`${point} Stars`}
	onclick={!readOnly ? handleClick : undefined}
	onmousemove={!readOnly ? handleMouseMove : undefined}
	onmouseleave={!readOnly ? onMouseLeave : undefined}
	data-disabled={disabled}
	data-readonly={readOnly}
	data-filled={shouldShowFilled}
	class={cn(
		'[&_svg]:pointer-events-none',
		isPartialPoint && 'pointer-events-none absolute top-0 left-0 overflow-hidden',
		isInteractive && 'cursor-pointer hover:scale-105',
		disabled && 'cursor-not-allowed opacity-50',
		className
	)}
	style:width={partialPointWidth}
	{...props}
>
	{#if !isPartialPoint && !shouldShowFilled}
		<Icon {size} class={iconClasses.emptyIconClass} aria-hidden="true" />
	{/if}
	{#if shouldShowFilled}
		<Icon {size} class={iconClasses.fullIconClass} aria-hidden="true" />
	{/if}
</svelte:element>

{#if !readOnly}
	<input
		type="radio"
		id={`${ratingIconId}-${point}`}
		{name}
		value={point}
		class="sr-only"
		tabIndex={-1}
		data-slot="rating-input"
	/>
{/if}
