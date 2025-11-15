import { resolveCommand } from 'package-manager-detector/commands';
import type { Agent, Command, ResolvedCommand } from 'package-manager-detector';

export const PACKAGE_MANAGERS: Agent[] = ['pnpm', 'npm', 'bun', 'yarn'] as const;
export type PackageManager = (typeof PACKAGE_MANAGERS)[number];

export type PackageManagerCommand = Command | 'create' | undefined;

export function getCommand(
	pm: Agent,
	type: PackageManagerCommand,
	command: string | string[]
): ResolvedCommand {
	let args = [];
	if (typeof command === 'string') {
		args = command.split(' ');
	} else {
		args = command;
	}

	if (!type) return { command: pm, args };

	// special handling for create
	if (type === 'create') return { command: pm, args: ['create', ...args] };

	// special handling for yarn execute
	if (type === 'execute' && pm === 'yarn') {
		return { command: 'yarn', args };
	}

	const cmd = resolveCommand(pm, type, args);

	// since docs are static any unresolved command is a code error
	if (cmd === null) throw new Error('Could not resolve command!');

	return cmd;
}
