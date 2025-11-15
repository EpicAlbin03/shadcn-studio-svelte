import { UserConfig } from '$lib/config/user-config.svelte';
import { setMode as _setMode, mode } from 'mode-watcher';
import { applyThemeStyles } from './theme';

export function setMode(userConfig: UserConfig, mode: 'light' | 'dark' | 'system') {
	_setMode(mode);
	applyThemeStyles(userConfig.settings.activeTheme.cssVars);
}

export function toggleMode(userConfig: UserConfig) {
	setMode(userConfig, mode.current === 'light' ? 'dark' : 'light');
}
