import { defineConfig } from './scripts/build-registry';
import { componentMeta } from './src/lib/config/component-meta.js';
import { themesPlugin } from './scripts/themes-plugin';

export default defineConfig({
	name: 'shadcn-studio-svelte',
	homepage: 'https://shadcnstudio-svelte.netlify.app',
	aliases: {
		ui: '$lib/registry/ui',
		components: '$lib/registry/components',
		lib: '$lib/registry/lib',
		hooks: '$lib/registry/hooks',
		utils: '$lib/utils'
	},
	dirs: {
		ui: '$lib/registry/ui',
		blocks: '$lib/registry/blocks',
		components: '$lib/registry/components',
		hooks: '$lib/registry/hooks',
		lib: '$lib/registry/lib'
	},
	componentMeta,
	plugins: [themesPlugin()]
});
