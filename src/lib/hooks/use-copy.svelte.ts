import { toast } from 'svelte-sonner';
import { UseClipboard } from './use-clipboard.svelte';

export const useCopy = (duration = 1500, toastMessage?: string, onCopied?: () => void) => {
	const clipboard = new UseClipboard({ delay: duration, reset: true });

	const copy = async (text: string) => {
		const result = await clipboard.copy(text);

		if (result === 'success') {
			if (toastMessage) {
				toast.success(`${toastMessage} copied to clipboard`);
				onCopied?.();
			}
			return true;
		} else {
			console.error(`${toastMessage} failed to copy to clipboard`);
			if (toastMessage) {
				toast.error(`${toastMessage} failed to copy to clipboard`);
			}
			return false;
		}
	};

	return {
		get copied() {
			return clipboard.copied;
		},
		copy
	};
};
