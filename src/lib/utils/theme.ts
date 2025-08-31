import type { ThemeStyleProps, ThemeStyles } from '$lib/types/theme';
import { mode } from 'mode-watcher';
import { colorFormatter } from './color-converter';
import { setShadowVariables } from './shadows';

export const COMMON_STYLES = [
	'font-sans',
	'font-serif',
	'font-mono',
	'radius',
	'shadow-opacity',
	'shadow-blur',
	'shadow-spread',
	'shadow-offset-x',
	'shadow-offset-y',
	'letter-spacing',
	'spacing'
];

export function applyThemeStyles(themeStyles: ThemeStyles) {
	const root = window.document.documentElement;

	// Remove any existing styles
	root.removeAttribute('style');

	// Apply common styles (fonts, radius, etc.)
	applyCommonStyles(root, themeStyles);

	// Apply theme colors
	applyThemeColors(root, themeStyles);

	// Apply shadow variables if they exist in the current mode's styles
	if (mode.current) {
		setShadowVariables(themeStyles[mode.current] as ThemeStyleProps);
	}
}

const applyCommonStyles = (root: HTMLElement, themeStyles: ThemeStyles) => {
	if (mode.current) {
		Object.entries(themeStyles[mode.current])
			.filter(([key]) => COMMON_STYLES.includes(key as (typeof COMMON_STYLES)[number]))
			.forEach(([key, value]) => {
				if (typeof value === 'string') {
					root.style.setProperty(`--${key}`, value);
				}
			});
	}
};

const applyThemeColors = (root: HTMLElement, themeStyles: ThemeStyles) => {
	if (mode.current) {
		Object.entries(themeStyles[mode.current]).forEach(([key, value]) => {
			if (
				typeof value === 'string' &&
				!COMMON_STYLES.includes(key as (typeof COMMON_STYLES)[number])
			) {
				const hslValue = colorFormatter(value, 'oklch');
				root.style.setProperty(`--${key}`, hslValue);
			}
		});
	}
};
