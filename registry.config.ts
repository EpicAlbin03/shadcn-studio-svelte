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
		ui: 'src/lib/registry/ui',
		blocks: 'src/lib/registry/blocks',
		components: 'src/lib/registry/components',
		hooks: 'src/lib/registry/hooks',
		lib: 'src/lib/registry/lib'
	},
	componentMeta,
	plugins: [themesPlugin()]
});
