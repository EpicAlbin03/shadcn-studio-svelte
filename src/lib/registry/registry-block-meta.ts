import { type BlockName } from '$lib/utils/blocks.js';

type BlockMeta = {
	iframeHeight?: string;
	className?: string;
	description: string;
	mobile?: 'component';
};

export const blockMeta = {
	'hero-01': {
		description:
			'A striking hero section with a navigation header, showcasing effortless summer recipes for parties with an AI-powered badge and a call-to-action button, complemented by a vibrant display of dish images below.'
	},
	'features-01': {
		description:
			'A three-column grid with a header, description, "See all features" button, and feature cards containing avatar icons, titles, and descriptions.'
	},
	'pricing-01': {
		description:
			'Interactive pricing cards with a toggle switch for monthly/annual options and plan comparison features for an intuitive pricing display.'
	},
	'testimonials-01': {
		description:
			'A carousel with customer feedback, star ratings, and avatars, along with side content for a dynamic and engaging display of testimonials.'
	}
} as Record<BlockName, BlockMeta>;
