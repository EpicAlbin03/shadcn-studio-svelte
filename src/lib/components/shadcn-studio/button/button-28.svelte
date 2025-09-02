<script lang="ts">
	import { CheckIcon, CopyIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';

	let copied = $state(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText('Thank you for using Shadcn Studio!');
			copied = true;
			setTimeout(() => (copied = false), 1500);
		} catch (err) {
			console.error('Failed to copy text: ', err);
		}
	};
</script>

<Button
	variant="outline"
	class="relative disabled:opacity-100"
	onclick={handleCopy}
	disabled={copied}
>
	<span class={cn('transition-all', copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0')}>
		<CheckIcon class="stroke-green-600 dark:stroke-green-400" />
	</span>
	<span
		class={cn(
			'absolute start-4 transition-all',
			copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
		)}
	>
		<CopyIcon />
	</span>
	{copied ? 'Copied!' : 'Copy'}
</Button>
