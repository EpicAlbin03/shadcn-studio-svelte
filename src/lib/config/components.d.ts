declare module '$lib/config/components.svelte' {
	import type { ComponentCategory } from '$lib/config/components.types';

	export type { ComponentCategory };
	export const categories: ComponentCategory[];
	export function getCategory(slug: string): ComponentCategory | undefined;
}
