import type { HighlightedBlock } from '../../routes/api/block/[block]/+server';

export type FileTree = {
	name: string;
	path?: string;
	children?: FileTree[];
};

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
} & Partial<HighlightedBlock>;
