import type { ComponentProps } from '$lib/types/components';
import { categories, type ComponentCategory } from '$lib/config/components.svelte';
import { Context } from 'runed';

export const ComponentCategoryContext = new Context<ComponentCategory>('ComponentCategory');

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
