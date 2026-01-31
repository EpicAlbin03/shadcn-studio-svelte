import { z } from 'zod/v4';
import { blocks } from '../../__registry__/blocks.js';

// export const RESIZE_MESSAGE = 'block-viewer:resize';
// export const REQUEST_RESIZE_MESSAGE = 'block-viewer:request-resize';

export type BlockName = (typeof blocks)[number];

export const FEATURED_BLOCKS: string[] = ['hero-01', 'dashboard-shell-01', 'product-list-01'];
export const NEW_BLOCKS: string[] = ['hero-41', 'hero-35', 'cta-10', 'cta-12', 'blog-15', 'blog-17', 'testimonials-18', 'faq-17', 'product-list-01'];
export const BLOCKS_QUERY_DELIMITER = '+';

export function isBlock(name: unknown): name is BlockName {
	return blocks.includes(name as BlockName);
}

export const blockSchema = z.object({
	// @ts-expect-error TODO: remove later in zod 4
	name: z.enum<BlockName, BlockName[]>(blocks),
	description: z.string(),
	container: z
		.object({
			height: z.string().optional(),
			className: z.string().nullish()
		})
		.optional()
});

export type Block = z.infer<typeof blockSchema>;
