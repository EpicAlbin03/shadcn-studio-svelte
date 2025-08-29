<script lang="ts">
	import { SparklesIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
	import { cn } from '$lib/utils';

	type Props = { class?: string };

	let { class: className }: Props = $props();
</script>

<Tooltip>
	<TooltipTrigger>
		{#snippet child({ props })}
			<Button
				{...props}
				variant="ghost"
				size="icon"
				class={cn(
					'cursor-pointer text-muted-foreground opacity-0 transition-none group-focus-within/item:opacity-100 group-hover/item:opacity-100 hover:!bg-transparent hover:text-foreground disabled:opacity-0 disabled:group-hover/item:opacity-50',
					className
				)}
				aria-label="Copy prompt"
				disabled
			>
				<SparklesIcon />
			</Button>
		{/snippet}
	</TooltipTrigger>
	<TooltipContent>Copy prompt (Coming Soon)</TooltipContent>
</Tooltip>
