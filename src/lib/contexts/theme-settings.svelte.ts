import type { ThemePreset } from '$lib/types/theme';
import { defaultThemeState } from '$lib/config/theme';
import { getLocalStorage, setLocalStorage } from '$lib/utils/local-storage';
import { getPresetThemeStyles } from '$lib/utils/theme-presets';

export type ThemeType = {
	preset?: string | null;
	styles?: ThemePreset;
};

export type ThemeSettings = {
	theme: ThemeType;
	savedThemes?: Array<{
		name: string;
		styles: ThemePreset;
	}>;
};

const initialThemeSettings: ThemeSettings = {
	theme: {
		preset: null,
		styles: defaultThemeState
	}
};

class ThemeSettingsState {
	#key = 'shadcn-studio-theme';
	#theme = $state<ThemeSettings>(initialThemeSettings);
	#first = true;

	constructor() {
		this.#loadFromStorage();
	}

	#loadFromStorage() {
		if (this.#first) {
			const theme = getLocalStorage<ThemeSettings>(this.#key);
			if (theme) {
				this.#theme = theme;
			}
			this.#first = false;
		}
	}

	get theme() {
		this.#loadFromStorage();
		return this.#theme;
	}

	set theme(newTheme: ThemeSettings) {
		this.#theme = newTheme;
		setLocalStorage(this.#key, newTheme);
	}

	updateSettings = (newSettings: Partial<ThemeSettings>) => {
		if ('theme' in newSettings || 'savedThemes' in newSettings) {
			this.theme = {
				...this.theme,
				...(newSettings.theme && { theme: newSettings.theme }),
				...(newSettings.savedThemes && { savedThemes: newSettings.savedThemes })
			};
		}
	};

	applyThemePreset = (preset: string) => {
		this.theme = {
			...this.theme,
			theme: {
				...this.theme.theme,
				preset,
				styles: getPresetThemeStyles(preset)
			}
		};
	};

	resetToDefault = () => {
		this.theme = {
			...initialThemeSettings,
			savedThemes: this.theme.savedThemes
		};
	};

	hasStateChanged = () => {
		return (
			JSON.stringify(this.theme.theme.styles) !== JSON.stringify(initialThemeSettings.theme.styles)
		);
	};
}

export const themeSettings = new ThemeSettingsState();
