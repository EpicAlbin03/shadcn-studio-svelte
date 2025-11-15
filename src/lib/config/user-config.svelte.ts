import { defaultTheme } from '$lib/assets/data/preset-themes';
import { themeSchema, type Theme } from '$lib/types/theme';
import { deepEqual } from '$lib/utils/deep-equal';
import { applyThemeStyles } from '$lib/utils/theme';
import { Context, PersistedState } from 'runed';
import { z } from 'zod/v4';

export const USER_SETTINGS_COOKIE_NAME = 'scnstudio_user_config';
export const MODE_STORAGE_KEY = 'mode-watcher-mode';

const packageManagerSchema = z.enum(['npm', 'yarn', 'pnpm', 'bun']).default('pnpm');
const colorFormatSchema = z.enum(['hex', 'rgb', 'hsl', 'oklch']).default('oklch');
const themeCustomizerTourCompletedSchema = z.boolean().default(false);

export type PackageManager = z.infer<typeof packageManagerSchema>;
export type ColorFormat = z.infer<typeof colorFormatSchema>;
export type ThemeCustomizerTourCompleted = z.infer<typeof themeCustomizerTourCompletedSchema>;

export const userSettingsSchema = z
	.object({
		packageManager: packageManagerSchema,
		colorFormat: colorFormatSchema,
		activeTheme: themeSchema,
		themeCustomizerTourCompleted: themeCustomizerTourCompletedSchema
	})
	.default({
		packageManager: 'pnpm',
		colorFormat: 'oklch',
		activeTheme: defaultTheme,
		themeCustomizerTourCompleted: false
	});

export type UserSettingsType = z.infer<typeof userSettingsSchema>;
export type UserConfigType = { settings: UserSettingsType; savedThemes: Theme[] };

function parseCookie(cookie: string): Record<string, string> {
	const cookies = cookie.split(';');
	const cookieMap: Record<string, string> = {};
	for (const cookie of cookies) {
		const [key, value] = cookie.split('=');
		if (key && value) {
			cookieMap[key.trim()] = value;
		}
	}
	return cookieMap;
}

export function parseUserSettings(cookie: string): UserSettingsType {
	const cookieMap = parseCookie(cookie);
	const userSettings = cookieMap[USER_SETTINGS_COOKIE_NAME];
	if (!userSettings) return userSettingsSchema.parse(undefined);
	return userSettingsSchema.parse(JSON.parse(userSettings));
}

export class UserConfig {
	#settings: UserSettingsType;
	#savedThemes: PersistedState<Theme[]>;

	constructor(settings: UserSettingsType) {
		this.#settings = $state.raw(settings);
		this.#savedThemes = new PersistedState<Theme[]>('saved-themes', []);
	}

	get current(): UserConfigType {
		return {
			settings: this.settings,
			savedThemes: this.savedThemes
		};
	}

	get settings(): UserSettingsType {
		return this.#settings;
	}

	get savedThemes(): Theme[] {
		return this.#savedThemes.current;
	}

	setSettings(settings: Partial<UserSettingsType>): void {
		this.#settings = { ...this.#settings, ...settings };
		document.cookie = `${USER_SETTINGS_COOKIE_NAME}=${JSON.stringify(this.#settings)}; path=/; max-age=31536000; SameSite=Lax;`;

		if (settings.activeTheme) {
			applyThemeStyles(settings.activeTheme.cssVars);
		}
	}

	resetActiveTheme(): void {
		this.setSettings({ activeTheme: defaultTheme });
	}

	hasThemeChanged(): boolean {
		return !deepEqual(this.#settings.activeTheme.cssVars, defaultTheme.cssVars);
	}

	addSavedTheme(theme: Theme): void {
		this.#savedThemes.current.push(theme);
	}

	removeSavedTheme(name: string): void {
		this.#savedThemes.current = this.#savedThemes.current.filter((theme) => theme.name !== name);
	}
}

export const UserConfigContext = new Context<UserConfig>('UserConfigContext');
