import type { ComponentProps } from '$lib/types/components';
import { categories } from '$lib/config/components.svelte';

export const getComponentsByNames = (names: string[]): ComponentProps[] => {
	const componentMap = new Map<string, ComponentProps>();

	categories.forEach((category) => {
		if (category.components) {
			category.components.forEach((comp) => {
				componentMap.set(comp.name, comp);
			});
		}
	});

	return names
		.map((name) => componentMap.get(name))
		.filter((comp): comp is ComponentProps => comp !== undefined);
};
