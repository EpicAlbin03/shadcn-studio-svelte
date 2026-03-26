import type { CssVars } from '@shadcn-svelte/registry';
import type { Component, Snippet } from 'svelte';
import type { SVGAttributes } from 'svelte/elements';

type CssSchema = {
	[x: string]: string | CssSchema;
};

/**
 * Theme and CSS definitions for the registry item.
 */
export type ComponentCSS = {
	/** The css variables for the registry item. This will be merged with the project's css variables. */
	cssVars?: CssVars;
	/** CSS definitions to be added to the project's CSS file. Supports at-rules, selectors, nested rules, utilities, layers, and more. */
	css?: CssSchema;
};

/**
 * Describes a single showcaseable component in the registry.
 */
export type ComponentProps = {
	/** Stable identifier used in URLs and filtering. E.g. 'button-01'. */
	slug: string;
	/** Optional display name for UI labels. E.g. 'Button 1'. */
	name?: string;
	/** Optional short summary shown in component listings. */
	description?: string;
	/** Optional utility classes applied to the component wrapper. */
	class?: string;
	/** Small string displayed beside the component name. E.g. 'New' | 'Updated. */
	badge?: string;
	/** Marks the component's development status. Defaults to 'ready'. */
	status?: 'ready' | 'beta' | 'coming-soon' | 'deprecated';
} & ComponentCSS;

/**
 * Group of related components. E.g. 'Animated' | 'Form Controls'.
 */
export type ComponentSection = {
	/** Optional section identifier used in URLs and filtering. E.g. 'animated'.
	 *
	 * Note: Leave empty to use category slug (for default or single-section categories).
	 */
	slug?: string;
	/** Section-level description shown above the component grid. */
	description?: string;
	/** Optional references to docs, source, or external resources. */
	links?: readonly { label: string; href: string }[];
	/** Components displayed in this section. */
	components: readonly ComponentProps[];
	/** Responsive column counts for grid layout. */
	breakpoints?: {
		xs?: number;
		sm?: number;
		md?: number;
		lg?: number;
		xl?: number;
	};
	/** Optional section-level badge. E.g. 'New' | 'Updated. */
	badge?: string;
	/** Optional note snippet rendered with section content. */
	note?: Snippet;
};

/**
 * Top-level category for organizing components.
 */
export type ComponentCategory = {
	/** Stable category identifier used in URLs and filtering. E.g. 'buttons'. */
	slug: string;
	/** Display name for UI labels. E.g. 'Buttons'. */
	name?: string;
	/** Optional icon representing the category. */
	svg?: Component<SVGAttributes<SVGElement>>;
	/** Group of related components. E.g. 'Animated' | 'Form Controls'. */
	sections: readonly ComponentSection[];
};
