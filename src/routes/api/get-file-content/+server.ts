import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import path from 'path';
import { promises as fs } from 'fs';

export const GET: RequestHandler = async (event) => {
	const filePath = event.url.searchParams.get('path');

	if (!filePath) {
		throw error(400, 'No file path provided');
	}

	const fullPath = path.join(process.cwd(), filePath);

	try {
		const fileContent = await fs.readFile(fullPath, 'utf-8');

		return json({ content: fileContent });
	} catch {
		throw error(404, 'File not found');
	}
};
