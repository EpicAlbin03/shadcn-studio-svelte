<script lang="ts" module>
	import { AnimatePresence, createLayoutMotion, motion, type Transition } from 'motion-sv';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';
	import { motionHighlightContext } from './motion-highlight.svelte';

	export type MotionHighlightItemProps = HTMLAttributes<HTMLDivElement> & {
		children: Snippet;
		id?: string;
		value?: string;
		class?: string;
		transition?: Transition;
		activeClassName?: string;
		disabled?: boolean;
		forceUpdateBounds?: boolean;
	};
</script>

<script lang="ts">
	let {
		children,
		id,
		value,
		class: className,
		transition,
		activeClassName,
		disabled,
		forceUpdateBounds,
		...restProps
	}: MotionHighlightItemProps = $props();

	let itemRef = $state<HTMLDivElement | null>(null);
	const itemId = $props.id();

	const ctx = motionHighlightContext.get();
	const layout = createLayoutMotion(motion);

	const childValue = $derived(id ?? value ?? itemId);
	const isActive = $derived(ctx.activeValue === childValue);
	const isDisabled = $derived(disabled ?? ctx.disabled);
	const itemTransition = $derived(transition ?? ctx.transition);
	const shouldUpdateBounds = $derived(
		forceUpdateBounds === true || (ctx.forceUpdateBounds && forceUpdateBounds !== false)
	);

	// Update bounds when active in parent mode
	$effect(() => {
		if (ctx.mode !== 'parent' || !itemRef) return;

		let rafId = 0;
		let previousBounds: DOMRect | null = null;

		const updateBounds = () => {
			if (!itemRef) return;

			const bounds = itemRef.getBoundingClientRect();

			if (shouldUpdateBounds) {
				if (
					previousBounds &&
					previousBounds.top === bounds.top &&
					previousBounds.left === bounds.left &&
					previousBounds.width === bounds.width &&
					previousBounds.height === bounds.height
				) {
					rafId = requestAnimationFrame(updateBounds);
					return;
				}

				previousBounds = bounds;
				rafId = requestAnimationFrame(updateBounds);
			}

			ctx.setBounds(bounds);
		};

		if (isActive) {
			updateBounds();
			ctx.setActiveClassName(activeClassName ?? '');
		} else if (!ctx.activeValue) {
			ctx.clearBounds();
		}

		if (!shouldUpdateBounds) return;

		return () => {
			cancelAnimationFrame(rafId);
		};
	});

	const setActiveWithLayout = (nextValue: string | null) => {
		layout.update.with(() => {
			ctx.setActiveValue(nextValue);
		})();
	};

	function handleMouseEnter() {
		if (ctx.hover) {
			setActiveWithLayout(childValue);
		}
	}

	function handleMouseLeave() {
		if (ctx.hover) {
			setActiveWithLayout(null);
		}
	}

	function handleClick() {
		if (!ctx.hover) {
			setActiveWithLayout(childValue);
		}
	}
</script>

{#if ctx.enabled}
	<div
		bind:this={itemRef}
		data-slot="motion-highlight-item-container"
		class={cn(ctx.mode === 'children' && 'relative', className)}
		data-active={isActive ? 'true' : 'false'}
		aria-selected={isActive}
		data-disabled={isDisabled}
		data-value={childValue}
		data-highlight={true}
		onmouseenter={handleMouseEnter}
		onmouseleave={handleMouseLeave}
		onclick={handleClick}
		{...restProps}
	>
		{#if ctx.mode === 'children'}
			<AnimatePresence initial={false}>
				{#if isActive && !isDisabled}
					<layout.div
						layoutId="transition-background-{ctx.id}"
						data-slot="motion-highlight"
						class={cn('absolute inset-0 z-0 bg-muted', ctx.className, ctx.activeClassName)}
						transition={itemTransition}
						initial={ctx.previousActiveValue ? false : { opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={ctx.activeValue
							? { transition: { duration: 0 } }
							: {
									opacity: 0,
									transition: {
										...itemTransition,
										delay: (itemTransition?.delay ?? 0) + (ctx.exitDelay ?? 0)
									}
								}}
						data-active={isActive ? 'true' : 'false'}
						data-value={childValue}
					/>
				{/if}
			</AnimatePresence>
		{/if}

		<div
			data-slot="motion-highlight-item"
			class={cn('relative z-1', className)}
			data-active={isActive ? 'true' : 'false'}
			data-value={childValue}
		>
			{@render children()}
		</div>
	</div>
{:else}
	{@render children()}
{/if}
