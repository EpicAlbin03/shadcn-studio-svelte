import { type BlockName } from '$lib/utils/blocks.js';

type BlockMeta = {
	iframeHeight?: string;
	className?: string;
	description: string;
	mobile?: 'component';
};

export const blockMeta = {
	'hero-01': {
		description: 'Hero 1'
	},
	'features-01': {
		description: 'Features 1'
	},
	'pricing-01': {
		description: 'Pricing 1'
	},
	'testimonials-01': {
		description: 'Testimonials 1'
	}
} as Record<BlockName, BlockMeta>;
