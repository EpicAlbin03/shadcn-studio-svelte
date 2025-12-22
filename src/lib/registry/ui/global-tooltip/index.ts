import Provider, { type GlobalTooltipProviderProps } from './global-tooltip-provider.svelte';
import Root, { type GlobalTooltipProps } from './global-tooltip.svelte';
import Content, { type GlobalTooltipContentProps } from './global-tooltip-content.svelte';
import Trigger, { type GlobalTooltipTriggerProps } from './global-tooltip-trigger.svelte';
import Arrow, { type GlobalTooltipArrowProps } from './global-tooltip-arrow.svelte';

export {
	Provider,
	Root,
	Content,
	Trigger,
	Arrow,
	//
	Provider as GlobalTooltipProvider,
	Root as GlobalTooltip,
	Content as GlobalTooltipContent,
	Trigger as GlobalTooltipTrigger,
	Arrow as GlobalTooltipArrow,
	//
	type GlobalTooltipProviderProps,
	type GlobalTooltipProps,
	type GlobalTooltipContentProps,
	type GlobalTooltipTriggerProps,
	type GlobalTooltipArrowProps
};

// Re-export types
export type { Side, Align, TooltipData, TooltipPosition } from './types.js';
