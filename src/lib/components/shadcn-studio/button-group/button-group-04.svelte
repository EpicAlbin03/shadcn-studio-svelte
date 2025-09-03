<script lang="ts">
	import { PauseIcon, PlayIcon, SkipBackIcon, SkipForwardIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
</script>

<div class="inline-flex w-fit divide-x divide-primary-foreground/30 rounded-full shadow-xs">
	<Tooltip>
		<TooltipTrigger>
			{#snippet child({ props })}
				<Button {...props} class="rounded-none rounded-s-full shadow-none focus-visible:z-10">
					<SkipBackIcon />
					<span class="sr-only">Skip Back</span>
				</Button>
			{/snippet}
		</TooltipTrigger>
		<TooltipContent class="px-2 py-1 text-xs">Skip Back</TooltipContent>
	</Tooltip>
	<Tooltip>
		<TooltipTrigger>
			{#snippet child({ props })}
				<Button {...props} class="rounded-none shadow-none focus-visible:z-10">
					<PlayIcon />
					<span class="sr-only">Play</span>
				</Button>
			{/snippet}
		</TooltipTrigger>
		<TooltipContent class="px-2 py-1 text-xs">Play</TooltipContent>
	</Tooltip>
	<Tooltip>
		<TooltipTrigger>
			{#snippet child({ props })}
				<Button {...props} class="rounded-none shadow-none focus-visible:z-10">
					<PauseIcon />
					<span class="sr-only">Pause</span>
				</Button>
			{/snippet}
		</TooltipTrigger>
		<TooltipContent class="px-2 py-1 text-xs">Pause</TooltipContent>
	</Tooltip>
	<Tooltip>
		<TooltipTrigger>
			{#snippet child({ props })}
				<Button {...props} class="rounded-none rounded-e-full shadow-none focus-visible:z-10">
					<SkipForwardIcon />
					<span class="sr-only">Skip Forward</span>
				</Button>
			{/snippet}
		</TooltipTrigger>
		<TooltipContent class="px-2 py-1 text-xs">Skip Forward</TooltipContent>
	</Tooltip>
</div>
