import { browser } from '$app/environment';
import { parseUserConfig } from '$lib/config/user-config.svelte.js';
import type { LayoutLoad } from './$types.js';

export const load: LayoutLoad = ({ data }) => {
	if (!browser) return data;

	return { ...data, userConfig: parseUserConfig(document.cookie) };
};
