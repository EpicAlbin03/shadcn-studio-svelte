import { USER_SETTINGS_COOKIE_NAME, userSettingsSchema } from '$lib/config/user-config.svelte.js';
import type { LayoutServerLoad } from './$types.js';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const userSettingsCookie = cookies.get(USER_SETTINGS_COOKIE_NAME);
	const parsedUserSettings = userSettingsCookie ? JSON.parse(userSettingsCookie) : undefined;
	const userSettings = userSettingsSchema.parse(parsedUserSettings);

	return { userSettings };
};

export const prerender = true;
