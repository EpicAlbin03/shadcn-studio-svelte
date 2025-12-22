<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Transition } from 'motion-sv';
	import { Context } from 'runed';
	import { motion, AnimatePresence, LayoutGroup } from 'motion-sv';
	import { cn } from '$lib/utils';

	export type MotionHighlightMode = 'children' | 'parent';

	export type Bounds = {
		top: number;
		left: number;
		width: number;
		height: number;
	};

	export type MotionHighlightContext = {
		mode: MotionHighlightMode;
		activeValue: string | null;
		setActiveValue: (value: string | null) => void;
		setBounds: (bounds: DOMRect) => void;
		clearBounds: () => void;
		id: string;
		hover: boolean;
		previousActiveValue: string | null;
		className?: string;
		activeClassName?: string;
		setActiveClassName: (className: string) => void;
		transition?: Transition;
		disabled?: boolean;
		enabled?: boolean;
		exitDelay?: number;
		forceUpdateBounds?: boolean;
	};

	export type MotionHighlightProps = HTMLAttributes<HTMLDivElement> & {
		mode?: MotionHighlightMode;
		value?: string | null;
		onValueChange?: (value: string | null) => void;
		class?: string;
		transition?: Transition;
		hover?: boolean;
		disabled?: boolean;
		enabled?: boolean;
		exitDelay?: number;
		controlledItems?: boolean;
		boundsOffset?: Partial<Bounds>;
		containerClassName?: string;
		forceUpdateBounds?: boolean;
		children?: Snippet;
	};

	export const motionHighlightContext = new Context<MotionHighlightContext>('MotionHighlight');
</script>

<script lang="ts">
	let {
		mode = 'children',
		value = $bindable<string | null>(null),
		onValueChange,
		class: className,
		transition = { type: 'spring', stiffness: 350, damping: 35 },
		hover = false,
		disabled = false,
		enabled = true,
		exitDelay = 0.2,
		controlledItems = false,
		boundsOffset = { top: 0, left: 0, width: 0, height: 0 },
		containerClassName,
		forceUpdateBounds = false,
		children,
		...restProps
	}: MotionHighlightProps = $props();

	let containerRef = $state<HTMLDivElement | null>(null);
	let boundsState = $state<Bounds | null>(null);
	let activeClassNameState = $state('');
	let previousValue = $state<string | null>(null);
	let internalValue = $state(value);

	const id = $props.id();

	$effect(() => {
		if (value !== internalValue) {
			previousValue = internalValue;
			internalValue = value;
		}
	});

	function setActiveValue(newValue: string | null) {
		if (value !== newValue) {
			previousValue = value;
			value = newValue;
			onValueChange?.(newValue);
		}
	}

	function setBounds(bounds: DOMRect) {
		if (!containerRef) return;

		const containerRect = containerRef.getBoundingClientRect();

		const newBounds: Bounds = {
			top: bounds.top - containerRect.top + (boundsOffset?.top ?? 0),
			left: bounds.left - containerRect.left + (boundsOffset?.left ?? 0),
			width: bounds.width + (boundsOffset?.width ?? 0),
			height: bounds.height + (boundsOffset?.height ?? 0)
		};

		if (
			boundsState &&
			boundsState.top === newBounds.top &&
			boundsState.left === newBounds.left &&
			boundsState.width === newBounds.width &&
			boundsState.height === newBounds.height
		) {
			return;
		}

		boundsState = newBounds;
	}

	function clearBounds() {
		boundsState = null;
	}

	function setActiveClassName(cls: string) {
		activeClassNameState = cls;
	}

	// Handle scroll in parent mode
	$effect(() => {
		if (mode !== 'parent' || !containerRef) return;

		const container = containerRef;

		const onScroll = () => {
			if (!value) return;
			const activeEl = container.querySelector<HTMLElement>(
				`[data-value="${value}"][data-highlight="true"]`
			);
			if (activeEl) setBounds(activeEl.getBoundingClientRect());
		};

		container.addEventListener('scroll', onScroll, { passive: true });
		return () => container.removeEventListener('scroll', onScroll);
	});

	motionHighlightContext.set({
		get mode() {
			return mode;
		},
		get activeValue() {
			return internalValue;
		},
		setActiveValue,
		setBounds,
		clearBounds,
		id,
		get hover() {
			return hover;
		},
		get previousActiveValue() {
			return previousValue;
		},
		get className() {
			return className;
		},
		get activeClassName() {
			return activeClassNameState;
		},
		setActiveClassName,
		get transition() {
			return transition;
		},
		get disabled() {
			return disabled;
		},
		get enabled() {
			return enabled;
		},
		get exitDelay() {
			return exitDelay;
		},
		get forceUpdateBounds() {
			return forceUpdateBounds;
		}
	});
</script>

{#if enabled}
	{#if mode === 'parent'}
		<div
			bind:this={containerRef}
			data-slot="motion-highlight-container"
			class={cn('relative', containerClassName)}
			{...restProps}
		>
			<AnimatePresence initial={false}>
				{#if boundsState}
					<motion.div
						data-slot="motion-highlight"
						animate={{
							top: boundsState.top,
							left: boundsState.left,
							width: boundsState.width,
							height: boundsState.height,
							opacity: 1
						}}
						initial={{
							top: boundsState.top,
							left: boundsState.left,
							width: boundsState.width,
							height: boundsState.height,
							opacity: 0
						}}
						exit={{
							opacity: 0,
							transition: {
								...transition,
								delay: (transition?.delay ?? 0) + (exitDelay ?? 0)
							}
						}}
						{transition}
						class={cn('absolute z-0 bg-muted', className, activeClassNameState)}
					/>
				{/if}
			</AnimatePresence>
			{@render children?.()}
		</div>
	{:else}
		<LayoutGroup>
			{@render children?.()}
		</LayoutGroup>
	{/if}
{:else}
	{@render children?.()}
{/if}
