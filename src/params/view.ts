import { isBlock, type BlockName } from '$lib/utils/blocks.js';
import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (param: string): param is BlockName => {
	return isBlock(param);
};
