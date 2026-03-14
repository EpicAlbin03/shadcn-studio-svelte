<script lang="ts">
	import { CopyButton, type CopyButtonProps } from '$lib/components/ui/copy-button';
	import { cn } from '$lib/utils';
	import { SparklesIcon } from '@lucide/svelte';

	type Props = CopyButtonProps & { hidden?: boolean };

	let { hidden, ...props }: Props = $props();
</script>

<CopyButton
	variant={hidden ? 'ghost' : 'outline'}
	icon={SparklesIcon}
	class={cn(
		hidden &&
			'hidden cursor-pointer text-muted-foreground transition-none group-hover/item:block hover:bg-transparent! hover:text-foreground'
	)}
	tooltip="Copy Prompt"
	aria-label="Copy Prompt"
	{...props}
/>
