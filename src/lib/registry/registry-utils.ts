import type { RegistryItemFile } from '@shadcn-svelte/registry';

export type FileTree = {
	name: string;
	path?: string;
	children?: FileTree[];
};

export function transformUIPath(target: string): string {
	return `ui/${target}`;
}

export function transformComponentPath(target: string): string {
	return `components/${target}`;
}

export function transformBlockPath(target: string): string {
	return `blocks/${target}`;
}

export function createFileTreeForRegistryItemFiles(
	files: Array<{ target: string; type: RegistryItemFile['type'] }>
): FileTree[] {
	const root: FileTree[] = [];

	for (const file of files) {
		const path = file.target;
		const parts = path.split('/');
		let currentLevel = root;

		for (let i = 0; i < parts.length; i++) {
			const part = parts[i];
			const isFile = i === parts.length - 1;
			const existingNode = currentLevel.find((node) => node.name === part);

			if (existingNode) {
				if (isFile) {
					existingNode.path = path;
				} else {
					currentLevel = existingNode.children!;
				}
			} else {
				const newNode: FileTree = isFile ? { name: part, path } : { name: part, children: [] };

				currentLevel.push(newNode);

				if (!isFile) {
					currentLevel = newNode.children!;
				}
			}
		}
	}

	return root;
}

export function transformImportPaths(content: string): string {
	const aliases = {
		ui: '$lib/components/ui',
		utils: '$lib/utils',
		components: '$lib/components',
		hooks: '$lib/hooks',
		lib: '$lib'
	};
	for (const [alias, path] of Object.entries(aliases)) {
		content = content.replaceAll(`$${alias.toUpperCase()}$`, path);
	}
	return content;
}
