<script lang="ts" module>
	import { cn, type WithElementRef } from '$lib/utils';
	import { StarIcon, type Icon as IconType } from '@lucide/svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { type VariantProps, tv } from 'tailwind-variants';
	import RatingItem from './rating-item.svelte';

	export const ratingVariants = tv({
		base: 'transition-colors',
		variants: {
			variant: {
				default: 'text-foreground fill-current',
				destructive: 'text-destructive fill-current',
				outline: 'text-muted-foreground fill-transparent stroke-current',
				secondary: 'text-secondary-foreground fill-current',
				yellow: 'fill-current text-amber-600 dark:text-amber-400'
			}
		},
		defaultVariants: {
			variant: 'default'
		}
	});

	export type RatingVariant = VariantProps<typeof ratingVariants>['variant'];

	const RATING_DEFAULTS = {
		precision: 1,
		maxStars: 5,
		size: 20,
		variant: 'default' as const,
		icon: StarIcon
	} as const;

	export type RatingProps = WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		value?: number;
		name?: string;
		max?: number;
		size?: number;
		icon?: typeof IconType;
		variant?: RatingVariant;
		readOnly?: boolean;
		disabled?: boolean;
		precision?: number;
		onValueChange?: (value: number) => void;
		onValueHover?: (value: number) => void;
	};
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		value = $bindable(0),
		name,
		max = RATING_DEFAULTS.maxStars,
		size = RATING_DEFAULTS.size,
		icon: Icon = RATING_DEFAULTS.icon,
		variant = RATING_DEFAULTS.variant,
		class: className,
		readOnly = false,
		disabled = false,
		precision = RATING_DEFAULTS.precision,
		onValueChange,
		onValueHover,
		...props
	}: RatingProps = $props();

	const id = $props.id();
	const ratingName = name ?? `rating-${id}`;
	const isInteractive = !readOnly && !disabled;
	let hoveredValue = $state(0);

	const stars = $derived.by(() => {
		if (precision <= 0 || precision > 1) {
			console.warn('Rating: precision must be greater than 0 and less than or equal to 1');
			return [];
		}

		return Array.from({ length: max }, (_, index) => ({
			key: index,
			points: Array.from(
				{ length: Math.floor(1 / precision) },
				(_, i) => index + precision * (i + 1)
			)
		}));
	});

	const handleKeyDown = (event: KeyboardEvent & { currentTarget: HTMLDivElement }) => {
		if (!isInteractive) return;

		switch (event.key) {
			case 'ArrowRight':
			case 'ArrowUp':
				event.preventDefault();
				if (value + precision > max) {
					value = 0;
				} else {
					value = value + precision;
				}
				break;
			case 'ArrowLeft':
			case 'ArrowDown':
				event.preventDefault();
				if (value - precision < 0) {
					value = max;
				} else {
					value = value - precision;
				}
				break;
			case ' ':
			case 'Enter':
				event.preventDefault();
				// If no rating is set, set to first step, otherwise clear rating
				if (value === 0) {
					value = precision;
				} else {
					value = 0;
				}
				break;
			case 'Home':
				event.preventDefault();
				value = precision;
				break;
			case 'End':
				event.preventDefault();
				value = max;
				break;
			default:
				break;
		}
	};

	const handleMouseDown = (event: MouseEvent & { currentTarget: HTMLDivElement }) => {
		// Prevent focus on mouse click
		event.preventDefault();
	};
</script>

<div
	bind:this={ref}
	data-slot="rating"
	role={!readOnly ? 'radiogroup' : 'img'}
	onkeydown={!readOnly ? handleKeyDown : undefined}
	onmousedown={!readOnly ? handleMouseDown : undefined}
	tabIndex={!readOnly && !disabled ? 0 : undefined}
	data-disabled={disabled}
	data-readonly={readOnly}
	class={cn(
		'flex gap-px focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:outline-none',
		disabled && 'opacity-50',
		className
	)}
	aria-label={readOnly ? `${value} stars` : 'Rating'}
	aria-valuemin={0}
	aria-valuemax={max}
	aria-valuenow={value}
	aria-valuetext={`${value} of ${max} stars`}
	{...props}
>
	{#each stars as { key, points } (key)}
		<span
			data-slot="rating-star"
			class={cn(
				'relative',
				isInteractive && 'transition-transform hover:scale-110',
				disabled && 'cursor-not-allowed'
			)}
			aria-disabled={disabled}
			aria-hidden={readOnly}
		>
			{#each points as point (point)}
				<RatingItem
					name={ratingName}
					{disabled}
					{hoveredValue}
					{point}
					{precision}
					{readOnly}
					{size}
					{value}
					{variant}
					{Icon}
					onMouseLeave={() => (hoveredValue = 0)}
				/>
			{/each}
		</span>
	{/each}
</div>
