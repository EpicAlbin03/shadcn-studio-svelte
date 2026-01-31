import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	compilerOptions: {
		warningFilter: (warning) => {
			// Disable '#' is not a valid href attribute warning
			if (warning.code === 'a11y_invalid_attribute') return false;
			return true;
		}
	},
	kit: {
		adapter: adapter(),
		prerender: {
			handleMissingId: (details) => {
				if (details.id === '#') return;
				console.warn(details.message);
			}
		}
	},
	vitePlugin: { inspector: true }
};

export default config;
