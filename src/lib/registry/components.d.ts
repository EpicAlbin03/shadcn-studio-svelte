declare module './components.svelte' {
	import type { ComponentCategory } from './components.types';

	export type { ComponentCategory };
	export const categories: ComponentCategory[];
}
