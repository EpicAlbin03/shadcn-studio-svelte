/**
 * Themes plugin for shadcn-studio-svelte.
 *
 * Generates registry:style items from preset themes, computing shadow
 * CSS variables at all size scales from base shadow parameters.
 */

import fs from 'node:fs';
import path from 'node:path';
import type { Registry } from '@shadcn-svelte/registry';
import type { RegistryPlugin } from './build-registry';
import { presetThemes } from '../src/lib/assets/data/preset-themes.js';

type RegistryItems = Registry['items'];

/** Clean a shadow color and append an opacity value. */
function addOpacity(color: string, opacity: string): string {
	const clean = color.replace(/\s*\/\s*\d+(\.\d+)?%?\s*\)/, ')').replace(/\s+\)/, ')');
	return clean.replace(')', ` / ${opacity})`);
}

/** Compute shadow-2xs through shadow-2xl from base shadow parameters. */
function computeShadows(vars: Record<string, string>): void {
	const color = vars['shadow-color'];
	const opacity = parseFloat(vars['shadow-opacity']);
	const blur = vars['shadow-blur'];
	const spread = vars['shadow-spread'];
	const ox = vars['shadow-offset-x'];
	const oy = vars['shadow-offset-y'];

	const o = (factor: number) => (opacity * factor).toFixed(2);

	vars['shadow-2xs'] = `${ox} ${oy} ${blur} ${spread} ${addOpacity(color, o(0.5))}`;
	vars['shadow-xs'] = `${ox} ${oy} ${blur} ${spread} ${addOpacity(color, o(0.5))}`;
	vars['shadow-sm'] =
		`${ox} ${oy} ${blur} ${spread} ${addOpacity(color, o(1))}, 0px 1px 2px -1px ${addOpacity(color, o(1))}`;
	vars['shadow'] = vars['shadow-sm'];
	vars['shadow-md'] =
		`${ox} ${oy} ${blur} ${spread} ${addOpacity(color, o(1))}, 0px 2px 4px -1px ${addOpacity(color, o(1))}`;
	vars['shadow-lg'] =
		`${ox} ${oy} ${blur} ${spread} ${addOpacity(color, o(1))}, 0px 4px 6px -1px ${addOpacity(color, o(1))}`;
	vars['shadow-xl'] =
		`${ox} ${oy} ${blur} ${spread} ${addOpacity(color, o(1))}, 0px 8px 10px -1px ${addOpacity(color, o(1))}`;
	vars['shadow-2xl'] = `${ox} ${oy} ${blur} ${spread} ${addOpacity(color, o(2.5))}`;
}

function buildThemeItems(): RegistryItems {
	const items: RegistryItems = [];

	const defaultTheme = presetThemes.find((t) => t.name === 'default')!;
	const defaultLightVars = defaultTheme.cssVars.light as Record<string, string>;
	const defaultDarkVars = defaultTheme.cssVars.dark as Record<string, string>;

	for (const theme of presetThemes) {
		// Merge with defaults — theme vars take priority
		const lightVars: Record<string, string> = {
			...defaultLightVars,
			...(theme.cssVars.light as Record<string, string>)
		};
		const darkVars: Record<string, string> = {
			...defaultDarkVars,
			...(theme.cssVars.dark as Record<string, string>)
		};

		// Tracking
		lightVars['tracking-normal'] = lightVars['letter-spacing'];

		// Compute shadow scales for both modes
		computeShadows(lightVars);
		computeShadows(darkVars);

		// Theme-level vars (shared between light/dark)
		const themeVars: Record<string, string> = {
			'font-sans': lightVars['font-sans'],
			'font-serif': lightVars['font-serif'],
			'font-mono': lightVars['font-mono'],
			radius: lightVars['radius'],
			'tracking-tighter': 'calc(var(--tracking-normal) - 0.05em)',
			'tracking-tight': 'calc(var(--tracking-normal) - 0.025em)',
			'tracking-wide': 'calc(var(--tracking-normal) + 0.025em)',
			'tracking-wider': 'calc(var(--tracking-normal) + 0.05em)',
			'tracking-widest': 'calc(var(--tracking-normal) + 0.1em)'
		};

		items.push({
			name: `themes/${theme.name}`,
			type: 'registry:style',
			files: [],
			registryDependencies: [],
			css: {
				'@layer base': {
					body: { 'letter-spacing': 'var(--letter-spacing)' }
				}
			},
			cssVars: {
				theme: themeVars,
				light: lightVars,
				dark: darkVars
			}
		});
	}

	return items;
}

export function themesPlugin(): RegistryPlugin {
	return {
		name: 'themes',
		buildStart() {
			// Ensure the themes output directory exists for the shadcn-svelte CLI
			fs.mkdirSync(path.resolve('static', 'registry', 'themes'), { recursive: true });
		},
		items() {
			return buildThemeItems();
		}
	};
}
