import { Context } from 'runed';
import { z } from 'zod/v4';

export const USER_CONFIG_COOKIE_NAME = 'scns_user_config';

const colorFormatSchema = z.enum(['class', 'hex', 'rgb', 'hsl', 'oklch', 'var']).default('oklch');
const activeTheme = z
	.enum([
		'default',
		'art-deco',
		'marshmallow',
		'caffeine',
		'claude',
		'clean-slate',
		'corporate',
		'elegant-luxury',
		'ghibli-studio',
		'marvel',
		'material-design',
		'midnight-bloom',
		'modern-minimal',
		'nature',
		'neo-brutalism',
		'pastel-dreams',
		'perplexity',
		'slack',
		'spotify',
		'summer',
		'sunset-horizon',
		'valorant',
		'vs-code'
	])
	.default('default');

export type ColorFormat = z.infer<typeof colorFormatSchema>;
export type ActiveTheme = z.infer<typeof activeTheme>;

export const userConfigSchema = z
	.object({
		colorFormat: colorFormatSchema,
		activeTheme: activeTheme
	})
	.default({
		colorFormat: 'oklch',
		activeTheme: 'default'
	});

export type UserConfigType = z.infer<typeof userConfigSchema>;

function parseCookie(cookie: string): Record<string, string> {
	const cookies = cookie.split(';');
	const cookieMap: Record<string, string> = {};
	for (const cookie of cookies) {
		const [key, value] = cookie.split('=');
		cookieMap[key] = value;
	}
	return cookieMap;
}

export function parseUserConfig(cookie: string): UserConfigType {
	const cookieMap = parseCookie(cookie);
	const userConfig = cookieMap[USER_CONFIG_COOKIE_NAME];
	if (!userConfig) return userConfigSchema.parse({});
	return userConfigSchema.parse(JSON.parse(userConfig));
}

export class UserConfig {
	#config: UserConfigType;

	constructor(config: UserConfigType) {
		this.#config = $state.raw(config);
	}

	get current(): UserConfigType {
		return this.#config;
	}

	setConfig(config: Partial<UserConfigType>): void {
		this.#config = { ...this.#config, ...config };
		document.cookie = `${USER_CONFIG_COOKIE_NAME}=${JSON.stringify(this.#config)}; path=/; max-age=31536000; SameSite=Lax;`;
	}
}

export const UserConfigContext = new Context<UserConfig>('UserConfigContext');
