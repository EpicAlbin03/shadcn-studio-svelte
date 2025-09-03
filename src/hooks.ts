import type { Transport } from '@sveltejs/kit';
import { categories } from '$lib/config/components.svelte';

export const transport: Transport = {
	ComponentCategory: {
		encode: (value) => {
			// Check if this is a ComponentCategory by checking for required properties
			if (
				value &&
				typeof value === 'object' &&
				'slug' in value &&
				'name' in value &&
				typeof value.slug === 'string'
			) {
				// Encode by storing just the slug - we'll reconstruct from categories array
				return { slug: value.slug };
			}
			return false;
		},
		decode: ({ slug }) => {
			// Decode by finding the category in the categories array
			const category = categories.find((cat) => cat.slug === slug);
			if (!category) {
				throw new Error(`Category with slug "${slug}" not found`);
			}
			return category;
		}
	}
};
