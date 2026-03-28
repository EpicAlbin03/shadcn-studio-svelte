import FileIcon from '@lucide/svelte/icons/file';
import { CSSSVG, JSONSVG, SVELTESVG, TypeScriptSVG } from '$lib/assets/svg';

export function getIconForLanguageExtension(language: string) {
	switch (language) {
		case 'svelte':
			return SVELTESVG;
		case 'json':
			return JSONSVG;
		case 'css':
			return CSSSVG;
		case 'ts':
		case 'js':
		case 'typescript':
			return TypeScriptSVG;
		default:
			return FileIcon;
	}
}
