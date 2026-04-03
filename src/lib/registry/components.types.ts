import type { CssSchema, CssVars } from '@shadcn-svelte/registry';
import type { Component, Snippet } from 'svelte';
import type { SVGAttributes } from 'svelte/elements';

export type ComponentMeta = {
	cssVars?: CssVars;
	css?: CssSchema;
};

export type ComponentProps = {
	id: string;
	name?: string;
	class?: string;
	badge?: string;
	underConstruction?: boolean;
	isAnimated?: boolean;
} & ComponentMeta;

export type ComponentCategory = {
	id: string;
	name?: string;
	svg?: Component<SVGAttributes<SVGElement>>;
	links?: { label: string; href: string }[];
	components: ComponentProps[];
	breakpoints?: {
		xs?: number;
		sm?: number;
		md?: number;
		lg?: number;
		xl?: number;
	};
	badge?: string;
	note?: Snippet;
	comingSoon?: boolean;
};
