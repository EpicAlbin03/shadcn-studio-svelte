import type { RegistryItemFile, RegistryItemType } from '@shadcn-svelte/registry';

export type FileTree = {
	name: string;
	path?: string;
	children?: FileTree[];
};

type ComponentAliases = {
	ui: string;
	utils: string;
	components: string;
	hooks: string;
	lib: string;
};

export function transformTargetPath(target: string, type: RegistryItemType): string {
	switch (type) {
		case 'registry:ui':
			return `lib/components/ui/${target}`;
		case 'registry:component':
			return `lib/components/${target}`;
		case 'registry:lib':
			return `lib/${target}`;
		case 'registry:block':
			return `lib/components/${target}`;
		case 'registry:page':
			return `routes/${target}`;
		case 'registry:hook':
			return `lib/hooks/${target}`;
		default:
			return target;
	}
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

export function transformImportPaths(content: string, componentAliases: ComponentAliases): string {
	const aliases = {
		ui: componentAliases.ui,
		utils: componentAliases.utils,
		components: componentAliases.components,
		blocks: componentAliases.components,
		hooks: componentAliases.hooks,
		lib: componentAliases.lib
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
