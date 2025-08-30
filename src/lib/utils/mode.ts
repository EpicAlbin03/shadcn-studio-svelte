import { UserConfig } from '$lib/config/user-config.svelte';
import { setMode as _setMode, mode } from 'mode-watcher';
import { applyThemeStyles, getPresetThemeStyles } from './theme';

export function setMode(userConfig: UserConfig, mode: 'light' | 'dark' | 'system') {
	const theme = userConfig.current.activeTheme;
	_setMode(mode);
	applyThemeStyles(getPresetThemeStyles(theme));
}

export function toggleMode(userConfig: UserConfig) {
	setMode(userConfig, mode.current === 'light' ? 'dark' : 'light');
}
