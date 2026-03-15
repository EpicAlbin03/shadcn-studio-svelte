import { createHighlighterCore } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';

const highlightCodeCache = new Map<string, string>();
const jsEngine = createJavaScriptRegexEngine();
const highlighterPromise = createHighlighterCore({
	themes: [import('@shikijs/themes/github-dark'), import('@shikijs/themes/github-light-default')],
	langs: [
		import('@shikijs/langs/typescript'),
		import('@shikijs/langs/svelte'),
		import('@shikijs/langs/css'),
		import('@shikijs/langs/bash')
	],
	engine: jsEngine
});

type Options = {
	lineNumbers?: boolean;
	highlightedLines?: number[];
};

export async function highlightCode(
	code: string,
	language: string = 'svelte',
	options: Options = {}
): Promise<string> {
	const { lineNumbers = true, highlightedLines = [] } = options;
	const cacheKey = `${language}:${lineNumbers ? '1' : '0'}:${highlightedLines.join(',')}:${code}`;
	const cachedCode = highlightCodeCache.get(cacheKey);
	if (cachedCode) return cachedCode;

	const highlighter = await highlighterPromise;
	const highlightedLineSet = new Set(highlightedLines);
	let lineNumber = 0;

	const html = highlighter.codeToHtml(formatCode(code), {
		lang: language,
		themes: {
			dark: 'github-dark',
			light: 'github-light-default'
		},
		transformers: [
			{
				pre(node) {
					node.properties['class'] = [
						'no-scrollbar min-w-0 overflow-x-auto px-4 py-3.5 outline-none has-[[data-highlighted-line]]:px-0 has-[[data-slot=tabs]]:p-0 bg-transparent!',
						lineNumbers && 'has-[[data-line-numbers]]:px-0'
					]
						.filter(Boolean)
						.join(' ');
				},
				code(node) {
					if (lineNumbers) {
						node.properties['data-line-numbers'] = '';
					}
				},
				line(node) {
					lineNumber += 1;
					node.properties['data-line'] = '';
					if (!lineNumbers) {
						node.properties['class'] = 'px-4';
					}
					if (highlightedLineSet.has(lineNumber)) {
						node.properties['data-highlighted-line'] = '';
					}
				}
			}
		]
	});

	highlightCodeCache.set(cacheKey, html);

	return html;
}

function formatCode(code: string): string {
	return code.replace(/\t/g, '  ');
}
