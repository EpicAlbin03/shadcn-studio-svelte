import { type BlockName } from '$lib/utils/blocks.js';

type BlockMeta = {
	iframeHeight?: string;
	className?: string;
	description: string;
	mobile?: 'component';
};

export const blockMeta = {
	'hero-section-01': {
		description:
			'A striking hero section with a navigation header, showcasing effortless summer recipes for parties with an AI-powered badge and a call-to-action button, complemented by a vibrant display of dish images below.'
	}
} as Record<BlockName, BlockMeta>;
