<script lang="ts">
	import PauseIcon from '@lucide/svelte/icons/pause';
	import PlayIcon from '@lucide/svelte/icons/play';
	import SkipBackIcon from '@lucide/svelte/icons/skip-back';
	import SkipForwardIcon from '@lucide/svelte/icons/skip-forward';
	import { Button } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
</script>

<div class="inline-flex w-fit divide-x divide-primary-foreground/30 rounded-full shadow-xs">
	<Tooltip.Root>
		<Tooltip.Trigger>
			{#snippet child({ props })}
				<Button {...props} class="rounded-none rounded-s-full shadow-none focus-visible:z-10">
					<SkipBackIcon />
					<span class="sr-only">Skip Back</span>
				</Button>
			{/snippet}
		</Tooltip.Trigger>
		<Tooltip.Content class="px-2 py-1 text-xs">Skip Back</Tooltip.Content>
	</Tooltip.Root>
	<Tooltip.Root>
		<Tooltip.Trigger>
			{#snippet child({ props })}
				<Button {...props} class="rounded-none shadow-none focus-visible:z-10">
					<PlayIcon />
					<span class="sr-only">Play</span>
				</Button>
			{/snippet}
		</Tooltip.Trigger>
		<Tooltip.Content class="px-2 py-1 text-xs">Play</Tooltip.Content>
	</Tooltip.Root>
	<Tooltip.Root>
		<Tooltip.Trigger>
			{#snippet child({ props })}
				<Button {...props} class="rounded-none shadow-none focus-visible:z-10">
					<PauseIcon />
					<span class="sr-only">Pause</span>
				</Button>
			{/snippet}
		</Tooltip.Trigger>
		<Tooltip.Content class="px-2 py-1 text-xs">Pause</Tooltip.Content>
	</Tooltip.Root>
	<Tooltip.Root>
		<Tooltip.Trigger>
			{#snippet child({ props })}
				<Button {...props} class="rounded-none rounded-e-full shadow-none focus-visible:z-10">
					<SkipForwardIcon />
					<span class="sr-only">Skip Forward</span>
				</Button>
			{/snippet}
		</Tooltip.Trigger>
		<Tooltip.Content class="px-2 py-1 text-xs">Skip Forward</Tooltip.Content>
	</Tooltip.Root>
</div>
