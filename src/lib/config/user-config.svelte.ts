import { defaultTheme } from '$lib/assets/data/preset-themes';
import type { Theme } from '$lib/types/theme';
import { deepEqual } from '$lib/utils/deep-equal';
import { applyThemeStyles } from '$lib/utils/theme';
import { Context, PersistedState } from 'runed';

export type ColorFormat = 'hex' | 'rgb' | 'hsl' | 'oklch';

export class UserConfig {
	#colorFormat: PersistedState<ColorFormat>;
	#activeTheme: PersistedState<Theme>;
	#savedThemes: PersistedState<Theme[]>;
	#themeCustomizerTourCompleted: PersistedState<boolean>;

	constructor() {
		this.#colorFormat = new PersistedState<ColorFormat>('color-format', 'oklch');
		this.#activeTheme = new PersistedState<Theme>('active-theme', defaultTheme);
		this.#savedThemes = new PersistedState<Theme[]>('saved-themes', []);
		this.#themeCustomizerTourCompleted = new PersistedState<boolean>(
			'theme-customizer-tour-completed',
			false
		);
	}

	get colorFormat(): ColorFormat {
		return this.#colorFormat.current;
	}

	setColorFormat(colorFormat: ColorFormat): void {
		this.#colorFormat.current = colorFormat;
	}

	get activeTheme(): Theme {
		return this.#activeTheme.current;
	}

	setActiveTheme(theme: Theme): void {
		this.#activeTheme.current = theme;
		applyThemeStyles(theme.cssVars);
	}

	resetActiveTheme(): void {
		this.setActiveTheme(defaultTheme);
	}

	hasThemeChanged(): boolean {
		return !deepEqual(this.#activeTheme.current.cssVars, defaultTheme.cssVars);
	}

	get savedThemes(): Theme[] {
		return this.#savedThemes.current;
	}

	addSavedTheme(theme: Theme): void {
		this.#savedThemes.current.push(theme);
	}

	removeSavedTheme(name: string): void {
		this.#savedThemes.current = this.#savedThemes.current.filter((theme) => theme.name !== name);
	}

	get themeCustomizerTourCompleted(): boolean {
		return this.#themeCustomizerTourCompleted.current;
	}

	setThemeCustomizerTourCompleted(completed: boolean): void {
		this.#themeCustomizerTourCompleted.current = completed;
	}
}

export const UserConfigContext = new Context<UserConfig>('UserConfigContext');
