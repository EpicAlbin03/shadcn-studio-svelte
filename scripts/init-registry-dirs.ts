/**
 * Ensures the registry output directories exist before running the shadcn
 * registry build on both local and CI environments.
 */

import { mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
	try {
		// Path to the directory shadcn-svelte will write into
		const registryOutputDir = join(__dirname, '../static/registry/themes');

		// Ensure directory exists
		await mkdir(registryOutputDir, { recursive: true });

		console.log(`Created directory: ${registryOutputDir}`);
	} catch (error) {
		console.error('Error initializing registry directories:', error);
		process.exit(1);
	}
}

main();
