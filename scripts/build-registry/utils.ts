import fs from 'node:fs';
import path from 'node:path';

export function writeFileWithDirs(filePath: string, data: string): void {
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, data, 'utf8');
}

export function stripExtension(filename: string): string {
	const lastDot = filename.lastIndexOf('.');
	if (lastDot <= 0) return filename;
	const secondLastDot = filename.lastIndexOf('.', lastDot - 1);
	const cutIndex = secondLastDot > 0 ? secondLastDot : lastDot;
	return filename.slice(0, cutIndex);
}

export function getTypesPackageName(dep: string): string {
	if (!dep.startsWith('@')) return `@types/${dep}`;
	const [scope, pkg] = dep.slice(1).split('/');
	if (!scope || !pkg) return `@types/${dep.slice(1)}`;
	return `@types/${scope}__${pkg}`;
}

export function toSortedArray(values: Set<string>): string[] {
	return [...values].sort((a, b) => a.localeCompare(b));
}

export function toRegistryDependencyName(name: string): string {
	return name.startsWith('local:') ? name.slice('local:'.length) : name;
}

export function toLocalRegistryDependency(name: string): string {
	return name.startsWith('local:') ? name : `local:${name}`;
}
