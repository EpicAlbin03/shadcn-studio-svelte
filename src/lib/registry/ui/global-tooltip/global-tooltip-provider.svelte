<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { Transition } from 'motion-sv';
	import { Context } from 'runed';
	import type { GlobalTooltipContext, TooltipData } from './types.js';
	import { LayoutGroup } from 'motion-sv';
	import { onMount } from 'svelte';
	import GlobalTooltipOverlay from './global-tooltip-overlay.svelte';

	export type GlobalTooltipProviderProps = {
		children: Snippet;
		openDelay?: number;
		closeDelay?: number;
		transition?: Transition;
	};

	export const globalTooltipContext = new Context<GlobalTooltipContext>('GlobalTooltip');
</script>

<script lang="ts">
	let {
		children,
		openDelay = 150,
		closeDelay = 100,
		transition = { type: 'spring', stiffness: 300, damping: 25 }
	}: GlobalTooltipProviderProps = $props();

	const globalId = crypto.randomUUID();
	let currentTooltip = $state<TooltipData | null>(null);
	let timeoutId: ReturnType<typeof setTimeout> | null = null;
	let lastCloseTime = 0;

	function showTooltip(data: TooltipData) {
		if (timeoutId) clearTimeout(timeoutId);

		if (currentTooltip !== null) {
			currentTooltip = data;
			return;
		}

		const now = Date.now();
		const delay = now - lastCloseTime < closeDelay ? 0 : openDelay;

		timeoutId = setTimeout(() => {
			currentTooltip = data;
		}, delay);
	}

	function hideTooltip() {
		if (timeoutId) clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			currentTooltip = null;
			lastCloseTime = Date.now();
		}, closeDelay);
	}

	function hideImmediate() {
		if (timeoutId) clearTimeout(timeoutId);
		currentTooltip = null;
		lastCloseTime = Date.now();
	}

	onMount(() => {
		window.addEventListener('scroll', hideImmediate, true);
		return () => window.removeEventListener('scroll', hideImmediate, true);
	});

	globalTooltipContext.set({
		get currentTooltip() {
			return currentTooltip;
		},
		showTooltip,
		hideTooltip,
		transition,
		globalId
	});
</script>

<LayoutGroup>
	{@render children()}
</LayoutGroup>
<GlobalTooltipOverlay />
