import type { Component, Snippet } from 'svelte';
import type { SVGAttributes } from 'svelte/elements';
import type { ComponentProps } from '$lib/types/components';

export type Badge = 'New' | 'Updated' | string | undefined;

export type ComponentCategory = {
	slug: string;
	name: string;
	links?: { label: string; href: string }[];
} & (
	| {
			components: ComponentProps[];
			breakpoints?: {
				xs?: number;
				sm?: number;
				md?: number;
				lg?: number;
				xl?: number;
			};
			svg: Component<SVGAttributes<SVGElement>>;
			badge?: Badge;
			note?: Snippet;
			hasAnimation?: never | false;
			animation?: never | undefined;
			isComingSoon?: never | false;
	  }
	| {
			components: ComponentProps[];
			breakpoints?: {
				xs?: number;
				sm?: number;
				md?: number;
				lg?: number;
				xl?: number;
			};
			svg: Component<SVGAttributes<SVGElement>>;
			badge?: Badge;
			note?: Snippet;
			hasAnimation: true;
			animation?: {
				badge?: Badge;
				breakpoints?: {
					xs?: number;
					sm?: number;
					md?: number;
					lg?: number;
					xl?: number;
				};
			};
			isComingSoon?: never | false;
	  }
	| {
			svg?: never;
			components?: never;
			breakpoints?: never | undefined;
			badge?: never | undefined;
			note?: never | undefined;
			hasAnimation?: never | undefined;
			animation?: never | undefined;
			isComingSoon: true;
	  }
);
