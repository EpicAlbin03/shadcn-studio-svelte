import type { ThemeStyleProps, ThemePreset } from '$lib/types/theme';
import { themeSettings } from './theme-settings.svelte';
import { colorFormatter } from '$lib/utils/color-converter';
import { setShadowVariables } from '$lib/utils/shadows';
import { COMMON_STYLES } from '$lib/config/theme';
import { browser } from '$app/environment';

const COMMON_NON_COLOR_KEYS = COMMON_STYLES;

const applyCommonStyles = (root: HTMLElement, themeStyles: ThemePreset) => {
	if (!themeStyles.light) return;

	Object.entries(themeStyles.light)
		.filter(([key]) =>
			COMMON_NON_COLOR_KEYS.includes(key as (typeof COMMON_NON_COLOR_KEYS)[number])
		)
		.forEach(([key, value]) => {
			if (typeof value === 'string') {
				root.style.setProperty(`--${key}`, value);
			}
		});
};

const applyThemeColors = (root: HTMLElement, themeStyles: ThemePreset) => {
	if (!themeStyles.light) return;

	// Apply light theme colors
	Object.entries(themeStyles.light).forEach(([key, value]) => {
		if (
			typeof value === 'string' &&
			!COMMON_NON_COLOR_KEYS.includes(key as (typeof COMMON_NON_COLOR_KEYS)[number])
		) {
			const hslValue = colorFormatter(value, 'oklch');
			root.style.setProperty(`--${key}`, hslValue);
		}
	});
};

class ThemeProvider {
	constructor() {
		if (browser) {
			this.#initializeTheme();
			this.#watchThemeChanges();
		}
	}

	#initializeTheme() {
		const root = window.document.documentElement;
		const themeStyles = themeSettings.theme.theme.styles;

		if (!themeStyles) {
			root.removeAttribute('style');
			return;
		}

		this.#applyThemeStyles(themeStyles);
	}

	#watchThemeChanges() {
		$effect(() => {
			const themeStyles = themeSettings.theme.theme.styles;

			if (themeStyles) {
				this.#applyThemeStyles(themeStyles);
			}
		});
	}

	#applyThemeStyles(themeStyles: ThemePreset) {
		const root = window.document.documentElement;

		// Apply common styles (fonts, radius, etc.)
		applyCommonStyles(root, themeStyles);

		// Apply theme colors
		applyThemeColors(root, themeStyles);

		// Apply shadow variables if they exist in the light theme styles
		if (themeStyles.light) {
			setShadowVariables(themeStyles.light as ThemeStyleProps);
		}
	}

	applyThemePreset = (preset: string) => {
		themeSettings.applyThemePreset(preset);
	};

	resetToDefault = () => {
		themeSettings.resetToDefault();
	};

	hasStateChanged = () => {
		return themeSettings.hasStateChanged();
	};
}

export const themeProvider = new ThemeProvider();
