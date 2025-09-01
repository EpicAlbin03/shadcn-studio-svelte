export function deepEqual(obj1: unknown, obj2: unknown): boolean {
	if (obj1 === obj2) return true;

	if (obj1 == null || obj2 == null) return obj1 === obj2;

	if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return obj1 === obj2;

	const keys1 = Object.keys(obj1);
	const keys2 = Object.keys(obj2);

	if (keys1.length !== keys2.length) return false;

	for (const key of keys1) {
		if (!keys2.includes(key)) return false;
		if (!deepEqual((obj1 as Record<string, unknown>)[key], (obj2 as Record<string, unknown>)[key]))
			return false;
	}

	return true;
}
