/**
 * @type {import("prettier").Config
 *   & import("prettier-plugin-svelte").PluginConfig
 *   & import('prettier-plugin-tailwindcss').PluginOptions
 *   & import("@ianvs/prettier-plugin-sort-imports").PluginConfig
 * }
 */
export default {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 100,
	plugins: [
		'prettier-plugin-svelte',
		'prettier-plugin-tailwindcss',
		'@ianvs/prettier-plugin-sort-imports'
	],
	// https://github.com/IanVS/prettier-plugin-sort-imports/discussions/171
	importOrder: ['^@', '<THIRD_PARTY_MODULES>', '^\\$(?!lib/)', '^\\$lib/', '^[.]'],
	overrides: [
		{
			files: '*.svelte',
			options: {
				parser: 'svelte'
			}
		}
	],
	tailwindStylesheet: './src/app.css'
};
