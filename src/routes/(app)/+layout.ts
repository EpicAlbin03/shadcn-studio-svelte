import { browser } from '$app/environment';
import { parseUserSettings } from '$lib/config/user-config.svelte.js';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ data }) => {
	if (!browser) return data;

	return { ...data, userSettings: parseUserSettings(document.cookie) };
};
