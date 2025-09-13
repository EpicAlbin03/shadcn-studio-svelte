<script lang="ts">
	import { Volume2Icon, VolumeXIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Label } from '$lib/components/ui/label';
	import { Popover, PopoverContent, PopoverTrigger } from '$lib/components/ui/popover';
	import { Slider } from '$lib/components/ui/slider';

	let value = $state(45);
</script>

<Popover>
	<PopoverTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="icon">
				<Volume2Icon />
				<span class="sr-only">Volume control</span>
			</Button>
		{/snippet}
	</PopoverTrigger>
	<PopoverContent class="w-80">
		<div class="space-y-3">
			<div class="flex items-center justify-between gap-2">
				<Label class="leading-5">Volume</Label>
				<output class="text-sm font-medium tabular-nums">{value}</output>
			</div>
			<div class="flex items-center gap-2">
				<VolumeXIcon class="size-4 shrink-0 opacity-60" />
				<Slider type="single" bind:value aria-label="Volume slider" />
				<Volume2Icon class="size-4 shrink-0 opacity-60" />
			</div>
		</div>
	</PopoverContent>
</Popover>
