import { USER_CONFIG_COOKIE_NAME, userConfigSchema } from '$lib/config/user-config.svelte.js';
import type { LayoutServerLoad } from './$types.js';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const userConfigCookie = cookies.get(USER_CONFIG_COOKIE_NAME);
	const parsedUserConfig = userConfigCookie ? JSON.parse(userConfigCookie) : {};
	const userConfig = userConfigSchema.parse(parsedUserConfig);

	return { userConfig };
};
