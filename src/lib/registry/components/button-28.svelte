<script lang="ts">
	import CheckIcon from '@lucide/svelte/icons/check';
	import CopyIcon from '@lucide/svelte/icons/copy';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';

	let copied = $state(false);

	async function handleCopy() {
		try {
			await navigator.clipboard.writeText('Thank you for using shadcn/studio-svelte!');
			copied = true;
			setTimeout(() => (copied = false), 1500);
		} catch (error) {
			console.error('Failed to copy text: ', error);
		}
	}
</script>

<Button variant="outline" class="disabled:opacity-100" onclick={handleCopy} disabled={copied}>
	<span class="relative size-4 shrink-0">
		<CheckIcon
			class={cn(
				'absolute inset-0 size-4 transition-all',
				copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
				'stroke-green-600 dark:stroke-green-400'
			)}
		/>
		<CopyIcon
			class={cn(
				'absolute inset-0 size-4 transition-all',
				copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
			)}
		/>
	</span>
	{copied ? 'Copied!' : 'Copy'}
</Button>
