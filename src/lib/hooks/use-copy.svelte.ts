import { toast } from '$lib/utils/toast.svelte';

export const useCopy = (duration = 1500, toastMessage?: string) => {
	let copied = $state(false);

	const copy = async (text: string) => {
		try {
			await navigator.clipboard.writeText(text);
			copied = true;
			setTimeout(() => (copied = false), duration);
			if (toastMessage) {
				toast('success', `${toastMessage} copied to clipboard`, {
					position: 'top-right'
				});
			}

			return true;
		} catch (err) {
			console.error(`${toastMessage} failed to copy to clipboard`, err);
			if (toastMessage) {
				toast('error', `${toastMessage} failed to copy to clipboard`, {
					position: 'top-right'
				});
			}

			return false;
		}
	};

	return {
		get copied() {
			return copied;
		},
		copy
	};
};
