import { defineConfig } from './scripts/build-registry';
import { componentMeta } from './src/lib/config/component-meta.js';
import { themesPlugin } from './scripts/themes-plugin';

export default defineConfig({
	name: 'shadcn-studio-svelte',
	homepage: 'https://shadcnstudio-svelte.netlify.app',
	// Remove when moving to @latest
	overrideDependencies: ["vaul-svelte@next", "layerchart@next"],
	aliases: {
		ui: '$lib/registry/ui',
		components: '$lib/registry/components',
		lib: '$lib/registry/lib',
		hooks: '$lib/registry/hooks',
		utils: '$lib/utils'
	},
	registryDir: '$lib/registry',
	componentMeta,
	plugins: [themesPlugin()]
});
