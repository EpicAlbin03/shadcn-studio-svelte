import type { HighlightedCodeBlock } from '$lib/server/registry/highlighted-code-blocks';

export type ComponentProps = {
	name: string;
	title?: string;
	description?: string;
	cssVars?: {
		theme?: Record<string, string>;
		light?: Record<string, string>;
		dark?: Record<string, string>;
	};
	css?: Record<string, string | Record<string, string | Record<string, string>>>;
	isAnimated?: boolean;
	badge?: 'New' | 'Updated';
	className?: string;
	underConstruction?: boolean;
} & Partial<HighlightedCodeBlock>;
