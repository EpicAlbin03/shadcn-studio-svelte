import type { ComponentProps } from '$lib/types/components';
import { components } from '$lib/assets/data/components';

export const getComponentsByNames = (names: string[]): ComponentProps[] => {
	const componentsMap = new Map(components.map((comp) => [comp.name, comp]));

	return names
		.map((name) => componentsMap.get(name))
		.filter((comp): comp is ComponentProps => comp !== undefined);
};
