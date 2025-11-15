import { PUBLIC_URL } from '$lib/config/site-config';
import type { HighlightedBlock } from '../../routes/api/block/[block]/+server';
import { getCommand } from './package-manager';

function getInstallCommand(packageManager: 'npm' | 'yarn' | 'pnpm' | 'bun', componentName: string) {
	const cmd = getCommand(
		packageManager,
		'execute',
		`shadcn-svelte@latest add ${PUBLIC_URL}/registry/${componentName}.json`
	);
	return `${cmd.command} ${cmd.args.join(' ')}`.trim();
}

function getSourceCode(source?: HighlightedBlock) {
	if (!source) return '';

	let code = '';

	for (const file of source.files) {
		const ext = file.target.split('.').pop();
		code += `${file.target}:
			\`\`\`${ext}
			${file.content}
			\`\`\`\n\n`;
	}

	return code.trim();
}

export function getCopyPromptText(
	packageManager: 'npm' | 'yarn' | 'pnpm' | 'bun',
	componentName: string,
	categorySlug: string,
	source?: HighlightedBlock,
	isBlock?: boolean
) {
	return `I'm looking at this shadcn-studio-svelte documentation: ${PUBLIC_URL}/${isBlock ? 'blocks' : 'docs/components'}${categorySlug === '' ? '' : '/'}${categorySlug}#${componentName}.
Help me understand how to use it. Be ready to explain concepts, give examples, or help debug based on it.

Installation:
\`\`\`bash
${getInstallCommand(packageManager, componentName)}
\`\`\`

Source code:
${getSourceCode(source)}`;
}
