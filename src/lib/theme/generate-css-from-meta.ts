import type { CssSchema, CssVars } from '@shadcn-svelte/registry';

type CssObject = Record<string, CssSchema>;

function isStringRecord(value: CssSchema): value is Record<string, string> {
	return Object.values(value).every((v) => typeof v === 'string');
}

function formatCssObject(obj: Record<string, string>, indent: string): string {
	return Object.entries(obj)
		.map(([prop, value]) => `${indent}${prop}: ${value};`)
		.join('\n');
}

function formatCssRule(key: string, value: CssSchema, indent = ''): string {
	if (typeof value === 'string') {
		return `${indent}${key}: ${value};`;
	}

	// Check if this is a nested rule (like @keyframes with percentages)
	const hasNestedObjects = Object.values(value).some((v) => typeof v === 'object');

	if (hasNestedObjects) {
		const innerContent = Object.entries(value)
			.map(([innerKey, innerValue]) => {
				if (typeof innerValue === 'object') {
					if (isStringRecord(innerValue)) {
						return `${indent}  ${innerKey} {\n${formatCssObject(innerValue, indent + '    ')}\n${indent}  }`;
					}

					return formatCssRule(innerKey, innerValue, `${indent}  `);
				}
				return `${indent}  ${innerKey}: ${innerValue};`;
			})
			.join('\n');
		return `${indent}${key} {\n${innerContent}\n${indent}}`;
	}

	// Simple object with key-value pairs
	if (isStringRecord(value)) {
		return `${indent}${key} {\n${formatCssObject(value, indent + '  ')}\n${indent}}`;
	}

	const nestedContent = Object.entries(value)
		.map(([innerKey, innerValue]) =>
			typeof innerValue === 'string'
				? `${indent}  ${innerKey}: ${innerValue};`
				: formatCssRule(innerKey, innerValue, `${indent}  `)
		)
		.join('\n');

	return `${indent}${key} {\n${nestedContent}\n${indent}}`;
}

export function generateCssFromMeta(cssVars?: CssVars, css?: CssObject): string | null {
	const parts: string[] = [];

	// Generate @theme inline block for cssVars.theme
	if (cssVars?.theme && Object.keys(cssVars.theme).length > 0) {
		const themeVars = Object.entries(cssVars.theme)
			.map(([key, value]) => `  --${key}: ${value};`)
			.join('\n');

		// Check if css has @keyframes to include inside @theme
		const keyframesInTheme: string[] = [];
		if (css) {
			for (const [key, value] of Object.entries(css)) {
				if (key.startsWith('@keyframes')) {
					keyframesInTheme.push(formatCssRule(key, value, '  '));
				}
			}
		}

		const themeContent =
			keyframesInTheme.length > 0 ? `${themeVars}\n\n${keyframesInTheme.join('\n\n')}` : themeVars;

		parts.push(`@theme inline {\n${themeContent}\n}`);
	}

	// Generate standalone CSS rules (non-keyframes if we already included them in @theme)
	if (css) {
		const hasTheme = cssVars?.theme && Object.keys(cssVars.theme).length > 0;
		for (const [key, value] of Object.entries(css)) {
			// Skip @keyframes if already included in @theme
			if (hasTheme && key.startsWith('@keyframes')) continue;
			parts.push(formatCssRule(key, value));
		}
	}

	return parts.length > 0 ? parts.join('\n\n') : null;
}
