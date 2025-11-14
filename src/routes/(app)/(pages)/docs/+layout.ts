import { getDoc } from '$lib/utils/docs';
import type { LayoutLoad } from './$types';

export const prerender = true;

export const load: LayoutLoad = async ({ url }) => {
	const pathParts = url.pathname.split('/').filter(Boolean);
	const docsIndex = pathParts.indexOf('docs');

	if (docsIndex === -1 || pathParts.length <= docsIndex + 1) {
		return { doc: null };
	}

	const slug = pathParts.slice(docsIndex + 1).join('/');

	try {
		const doc = await getDoc(slug);
		return { doc };
	} catch {
		return { doc: null };
	}
};
