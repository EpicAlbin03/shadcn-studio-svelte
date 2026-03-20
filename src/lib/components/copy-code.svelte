<script lang="ts">
	import { CopyButton, type CopyButtonProps } from '$lib/components/ui/copy-button';
	import { cn } from '$lib/utils';

	let { class: className, ...props }: CopyButtonProps = $props();
</script>

<CopyButton
	class={cn(
		'z-10 size-7 shrink-0 rounded-md p-0 opacity-70 hover:opacity-100 focus-visible:opacity-100',
		className
	)}
	{...props}
/>
