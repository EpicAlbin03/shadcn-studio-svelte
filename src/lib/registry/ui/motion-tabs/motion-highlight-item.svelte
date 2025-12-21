<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { motion, AnimatePresence, createLayoutMotion } from 'motion-sv';
	import { cn } from '$lib/utils';
	import { motionHighlightContext } from './motion-highlight.svelte';

	export type MotionHighlightItemProps = HTMLAttributes<HTMLDivElement> & {
		children: Snippet;
		id?: string;
		value?: string;
		class?: string;
	};
</script>

<script lang="ts">
	let { children, id, value, class: className, ...restProps }: MotionHighlightItemProps = $props();

	let itemRef = $state<HTMLDivElement | null>(null);
	const itemId = $props.id();

	const ctx = motionHighlightContext.get();
	const layout = createLayoutMotion(motion);

	const childValue = $derived(id ?? value ?? itemId);
	const isActive = $derived(ctx.activeValue === childValue);
	const isDisabled = $derived(ctx.disabled);
	const itemTransition = $derived(ctx.transition);

	// Update bounds when active in parent mode
	$effect(() => {
		if (ctx.mode !== 'parent' || !itemRef) return;

		if (isActive) {
			const bounds = itemRef.getBoundingClientRect();
			ctx.setBounds(bounds);
		} else if (!ctx.activeValue) {
			ctx.clearBounds();
		}
	});

	function handleMouseEnter() {
		if (ctx.hover) {
			ctx.setActiveValue(childValue);
		}
	}

	function handleMouseLeave() {
		if (ctx.hover) {
			ctx.setActiveValue(null);
		}
	}

	function handleClick() {
		if (!ctx.hover) {
			ctx.setActiveValue(childValue);
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
						layoutId={`transition-background-${ctx.id}`}
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
			class={cn('relative z-[1]', className)}
			data-active={isActive ? 'true' : 'false'}
			data-value={childValue}
		>
			{@render children()}
		</div>
	</div>
{:else}
	{@render children()}
{/if}
