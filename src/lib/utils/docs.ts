import { error } from '@sveltejs/kit';
import type { Component } from 'svelte';

export type TocItem = {
	title: string;
	url: string;
	items?: TocItem[];
};

export type TableOfContents = {
	items?: TocItem[];
};

export type DocMetadata = {
	title: string;
	description: string;
	toc: TableOfContents;
};

type DocModule = {
	default: Component;
};

function extractHeadings(fileContent: string): TocItem[] {
	const lines = fileContent.split('\n');

	const h2Items: TocItem[] = [];
	let currentH2: TocItem | null = null;

	for (const line of lines) {
		const headingMatch = line.match(
			/<DocHeading\s+heading=["']([^"']+)["'](?:\s+level=\{(\d+)\})?/
		);

		if (headingMatch) {
			const title = headingMatch[1].trim();
			const level = headingMatch[2] ? parseInt(headingMatch[2]) : 2;

			if (!title) continue;

			const url = `#${title
				.toLowerCase()
				.replace(/[^a-z0-9]+/g, '-')
				.replace(/^-|-$/g, '')}`;
			const item: TocItem = { title, url };

			if (level === 2) {
				currentH2 = item;
				h2Items.push(item);
			} else if (level === 3 && currentH2) {
				if (!currentH2.items) {
					currentH2.items = [];
				}
				currentH2.items.push(item);
			}
		}
	}

	return h2Items;
}

async function extractMetadata(slug: string, _module: DocModule): Promise<DocMetadata> {
	const modules = import.meta.glob('/src/routes/**/docs/getting-started/**/*+page.svelte', {
		query: '?raw',
		import: 'default',
		eager: false
	}) as Record<string, () => Promise<string>>;

	let rawModule: (() => Promise<string>) | undefined;
	for (const [path, resolver] of Object.entries(modules)) {
		const match = path.match(/docs\/getting-started\/(.+?)\/\+page\.svelte$/);
		if (match && `getting-started/${match[1]}` === slug) {
			rawModule = resolver;
			break;
		}
	}

	let toc: TableOfContents = { items: [] };
	let title = '';
	let description = '';

	if (rawModule) {
		const fileContent = await rawModule();

		const titleMatch = fileContent.match(/const\s+title\s*=\s*['"]([^'"]+)['"]/);
		if (titleMatch) {
			title = titleMatch[1];
		}

		const descMatch = fileContent.match(/const\s+description\s*=\s*['"]([^'"]+)['"]/);
		if (descMatch) {
			description = descMatch[1];
		}

		const headings = extractHeadings(fileContent);
		toc = { items: headings.length > 0 ? headings : undefined };
	}

	return {
		title,
		description,
		toc
	};
}

export async function getDoc(slug: string): Promise<DocMetadata> {
	const modules = import.meta.glob(
		'/src/routes/**/docs/getting-started/**/*+page.svelte'
	) as Record<string, () => Promise<DocModule>>;

	const normalizedSlug = slug === '' ? 'index' : slug;

	let resolver: (() => Promise<DocModule>) | undefined;
	for (const [path, moduleResolver] of Object.entries(modules)) {
		const match = path.match(/docs\/getting-started\/(.+?)\/\+page\.svelte$/);
		if (match && `getting-started/${match[1]}` === normalizedSlug) {
			resolver = moduleResolver;
			break;
		}
	}

	if (!resolver) {
		error(404, `Could not find the documentation page: ${slug}`);
	}

	const doc = await resolver();
	const metadata = await extractMetadata(normalizedSlug, doc);

	return {
		...metadata
	};
}
