import { browser } from '$app/environment';

export function getLocalStorage<T>(key: string): T | undefined {
	if (browser) {
		try {
			const stored = localStorage.getItem(key);
			if (stored) {
				return JSON.parse(stored);
			}
		} catch (error) {
			console.error(`Error getting localStorage key "${key}":`, error);
		}
	}
}

export function setLocalStorage<T>(key: string, value: T) {
	if (browser) {
		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.error(`Error setting localStorage key "${key}":`, error);
		}
	}
}
