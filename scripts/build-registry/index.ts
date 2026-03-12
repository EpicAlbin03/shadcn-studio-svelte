/**
 * Registry build script for shadcn-svelte registry projects.
 *
 * Usage:
 *   bun run scripts/build-registry
 */
import { build } from './build';

export { build } from './build';
export { defineConfig } from './config';
export {
	type ComponentMeta,
	type RegistryConfig,
	type RegistryDirs,
	type RegistryPlugin
} from './types';

if (import.meta.main) {
	await build();
}
