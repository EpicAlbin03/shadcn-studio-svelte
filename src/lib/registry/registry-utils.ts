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
	return `lib/components/${target}`;
}

export function transformLibPath(target: string): string {
	return `lib/${target}`;
}

export function transformBlockPath(target: string): string {
	return `lib/components/${target}`;
}

export function transformHookPath(target: string): string {
	return `lib/hooks/${target}`;
}

function collapseSingleChildFolders(node: FileTree): FileTree {
	if (node.path) {
		return node;
	}

	if (node.children) {
		node.children = node.children.map(collapseSingleChildFolders);

		if (node.children.length === 1 && node.children[0].children) {
			const child = node.children[0];
			return {
				name: `${node.name}/${child.name}`,
				children: child.children
			};
		}
	}

	return node;
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

	// Collapse single-child folders
	return root.map(collapseSingleChildFolders);
}

export function transformImportPaths(content: string): string {
	const aliases = {
		ui: '$lib/components/ui',
		utils: '$lib/utils',
		components: '$lib/components',
		blocks: '$lib/components',
		hooks: '$lib/hooks',
		lib: '$lib'
	};
	for (const [alias, path] of Object.entries(aliases)) {
		content = content.replaceAll(`$${alias.toUpperCase()}$`, path);
	}
	return content;
}

export function transformBlockRelativeImports(content: string, blockName: string): string {
	// Transform relative imports in block +page.svelte files
	// e.g., ./components/login-01.svelte -> $lib/components/login-01/login-01.svelte
	const relativeImportRegex = /from\s+['"]\.\/components\/([^'"]+)['"]/g;
	return content.replace(relativeImportRegex, (match, componentFile) => {
		const filename = componentFile.replace('.svelte', '');
		return `from '$lib/components/${blockName}/${filename}.svelte'`;
	});
}
