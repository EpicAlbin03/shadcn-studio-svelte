export function cache<T extends readonly unknown[], R>(
	fn: (...args: T) => R | Promise<R>
): (...args: T) => R | Promise<R> {
	const memo = new Map<string, R>();

	return function (...args: T): R | Promise<R> {
		const key = JSON.stringify(args);

		if (memo.has(key)) {
			return memo.get(key)!;
		}

		const result = fn(...args);

		// Handle both sync and async functions
		if (result instanceof Promise) {
			return result.then((resolvedResult) => {
				memo.set(key, resolvedResult);
				return resolvedResult;
			});
		} else {
			memo.set(key, result);
			return result;
		}
	};
}
