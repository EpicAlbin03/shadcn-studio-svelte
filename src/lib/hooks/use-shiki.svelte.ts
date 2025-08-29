import { codeToHtml, createHighlighter } from 'shiki';
import type { BundledLanguage, Highlighter } from 'shiki';
import { browser } from '$app/environment';

let highlighterPromise: Promise<Highlighter> | null = null;

// Initialize the highlighter once for the entire application
const getHighlighter = () => {
	if (!highlighterPromise) {
		highlighterPromise = createHighlighter({
			themes: ['github-light', 'github-dark'],
			langs: ['html', 'css', 'js', 'ts', 'svelte', 'json']
		});
	}

	return highlighterPromise;
};

// Start loading the highlighter as soon as possible
if (browser) {
	getHighlighter().catch((error) => {
		console.error('Failed to initialize Shiki highlighter:', error);
	});
}

export const useShiki = () => {
	let isHighlighterReady = $state(false);
	let highlightedCache = $state<Record<string, string>>({});
	let highlighterRef: Highlighter | null = null;

	$effect(() => {
		// Try to load the highlighter immediately when the component mounts
		getHighlighter()
			.then((highlighter) => {
				highlighterRef = highlighter;
				isHighlighterReady = true;
			})
			.catch((error) => {
				console.error('Failed to initialize syntax highlighter:', error);
			});

		return () => {
			isHighlighterReady = false;
			highlightedCache = {};
		};
	});

	const highlightCode = async (code: string, lang: string) => {
		if (!isHighlighterReady && !highlighterRef) {
			try {
				// If not ready yet, try to get and use the highlighter directly
				highlighterRef = await getHighlighter();
				isHighlighterReady = true;
			} catch (error) {
				console.error('Error getting highlighter:', error);
				return code;
			}
		}

		// Create a cache key from the code and language
		const cacheKey = `${lang}:${code}`;

		// Check if we already have this highlighted code in cache
		if (highlightedCache[cacheKey]) {
			return highlightedCache[cacheKey];
		}

		try {
			const highlighted = await codeToHtml(code, {
				lang: lang as BundledLanguage,
				themes: {
					light: 'github-light',
					dark: 'github-dark'
				}
			});

			// Store in cache
			highlightedCache = {
				...highlightedCache,
				[cacheKey]: highlighted
			};

			return highlighted;
		} catch (error) {
			console.error(`Error highlighting code with language ${lang}:`, error);
			return code;
		}
	};

	return {
		highlightCode,
		get isHighlighterReady() {
			return isHighlighterReady || highlighterRef !== null;
		},
		get highlightedCache() {
			return highlightedCache;
		}
	};
};
