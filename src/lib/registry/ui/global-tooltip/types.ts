import type { Snippet } from 'svelte';
import type { Transition } from 'motion-sv';

export type Side = 'top' | 'bottom' | 'left' | 'right';

export type Align = 'start' | 'center' | 'end';

export type TooltipData = {
	content: Snippet | string;
	rect: DOMRect;
	side: Side;
	sideOffset: number;
	align: Align;
	alignOffset: number;
	id: string;
	arrow: boolean;
};

export type TooltipPosition = {
	x: number;
	y: number;
	transform: string;
	initial: { x?: number; y?: number };
};

export type GlobalTooltipContext = {
	showTooltip: (data: TooltipData) => void;
	hideTooltip: () => void;
	currentTooltip: TooltipData | null;
	transition: Transition;
	globalId: string;
};

export type TooltipContext = {
	content: Snippet | string | null;
	setContent: (content: Snippet | string | null) => void;
	arrow: boolean;
	setArrow: (arrow: boolean) => void;
	side: Side;
	sideOffset: number;
	align: Align;
	alignOffset: number;
	id: string;
};

/**
 * Calculate the position for the tooltip based on trigger rect and options
 */
export function getTooltipPosition({
	rect,
	side,
	sideOffset,
	align,
	alignOffset
}: {
	rect: DOMRect;
	side: Side;
	sideOffset: number;
	align: Align;
	alignOffset: number;
}): TooltipPosition {
	switch (side) {
		case 'top':
			if (align === 'start') {
				return {
					x: rect.left + alignOffset,
					y: rect.top - sideOffset,
					transform: 'translate(0, -100%)',
					initial: { y: 15 }
				};
			} else if (align === 'end') {
				return {
					x: rect.right + alignOffset,
					y: rect.top - sideOffset,
					transform: 'translate(-100%, -100%)',
					initial: { y: 15 }
				};
			} else {
				// center
				return {
					x: rect.left + rect.width / 2,
					y: rect.top - sideOffset,
					transform: 'translate(-50%, -100%)',
					initial: { y: 15 }
				};
			}

		case 'bottom':
			if (align === 'start') {
				return {
					x: rect.left + alignOffset,
					y: rect.bottom + sideOffset,
					transform: 'translate(0, 0)',
					initial: { y: -15 }
				};
			} else if (align === 'end') {
				return {
					x: rect.right + alignOffset,
					y: rect.bottom + sideOffset,
					transform: 'translate(-100%, 0)',
					initial: { y: -15 }
				};
			} else {
				// center
				return {
					x: rect.left + rect.width / 2,
					y: rect.bottom + sideOffset,
					transform: 'translate(-50%, 0)',
					initial: { y: -15 }
				};
			}

		case 'left':
			if (align === 'start') {
				return {
					x: rect.left - sideOffset,
					y: rect.top + alignOffset,
					transform: 'translate(-100%, 0)',
					initial: { x: 15 }
				};
			} else if (align === 'end') {
				return {
					x: rect.left - sideOffset,
					y: rect.bottom + alignOffset,
					transform: 'translate(-100%, -100%)',
					initial: { x: 15 }
				};
			} else {
				// center
				return {
					x: rect.left - sideOffset,
					y: rect.top + rect.height / 2,
					transform: 'translate(-100%, -50%)',
					initial: { x: 15 }
				};
			}

		case 'right':
			if (align === 'start') {
				return {
					x: rect.right + sideOffset,
					y: rect.top + alignOffset,
					transform: 'translate(0, 0)',
					initial: { x: -15 }
				};
			} else if (align === 'end') {
				return {
					x: rect.right + sideOffset,
					y: rect.bottom + alignOffset,
					transform: 'translate(0, -100%)',
					initial: { x: -15 }
				};
			} else {
				// center
				return {
					x: rect.right + sideOffset,
					y: rect.top + rect.height / 2,
					transform: 'translate(0, -50%)',
					initial: { x: -15 }
				};
			}
	}
}
