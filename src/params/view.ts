import type { ParamMatcher } from '@sveltejs/kit';
import { isBlock, type BlockName } from '$lib/utils/blocks.js';

export const match: ParamMatcher = (param: string): param is BlockName => {
	return isBlock(param);
};
