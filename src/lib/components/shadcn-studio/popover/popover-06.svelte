<script lang="ts">
	import { DownloadIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { Progress } from '$lib/components/ui/progress';
	import { cn } from '$lib/utils';

	let isPaused = $state(false);
	let isCanceled = $state(false);
	let value = $state(0);
	let open = $state(false);
	let hasStarted = $state(false);

	$effect(() => {
		if (open && !hasStarted && !isCanceled) {
			hasStarted = true;
		}
	});

	$effect(() => {
		if (!hasStarted || isPaused || isCanceled) return;

		const timer = setInterval(() => {
			if (value < 100) {
				value = Math.min(100, value + Math.floor(Math.random() * 10) + 1);
			} else {
				clearInterval(timer);
			}
		}, 500);

		return () => {
			clearInterval(timer);
		};
	});

	function getText() {
		if (isCanceled) return 'Download Canceled';
		if (isPaused) return 'Download Paused';
		if (value === 100) return 'Download Complete';

		return 'Downloading File';
	}
</script>

<Popover.Root bind:open>
	<Popover.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="icon">
				<DownloadIcon />
				<span class="sr-only">Download File</span>
			</Button>
		{/snippet}
	</Popover.Trigger>
	<Popover.Content class="w-80">
		<div class="grid gap-4">
			<div class="flex items-center gap-2">
				<div class="relative flex size-6 items-center justify-center">
					<span
						class={cn('absolute inset-0 rounded-full border border-dashed border-primary', {
							'animate-spin [animation-duration:3s]': value < 100 && !isPaused && !isCanceled
						})}
					></span>
					<DownloadIcon class="z-1 size-3" />
				</div>
				<span class="flex-1 text-sm font-medium">{getText()}</span>
				{#if !isCanceled}
					<span class="text-sm font-semibold">{value}%</span>
				{/if}
			</div>
			<Progress {value} class="w-full" />
			<div class="grid grid-cols-2 gap-2">
				<Button
					size="sm"
					onclick={() => (isPaused = !isPaused)}
					disabled={value === 100 || isCanceled}
				>
					{isPaused ? 'Resume' : 'Pause'}
				</Button>
				<Button
					variant="secondary"
					size="sm"
					onclick={() => {
						if (value < 100) {
							value = 0;
							isCanceled = true;
							hasStarted = false;
						}
						open = false;
					}}
				>
					Cancel
				</Button>
			</div>
		</div>
	</Popover.Content>
</Popover.Root>
