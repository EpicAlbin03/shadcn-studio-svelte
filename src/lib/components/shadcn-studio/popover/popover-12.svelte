<script lang="ts">
	import { ChevronRightIcon, MapPinIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Popover from '$lib/components/ui/popover/index.js';
</script>

<Popover>
	<Popover.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="icon">
				<MapPinIcon />
				<span class="sr-only">About Himalayas</span>
			</Button>
		{/snippet}
	</Popover.Trigger>
	<Popover.Content class="w-85 p-0">
		<div class="flex">
			<div class="space-y-2 p-4">
				<p class="font-medium">About Himalayas</p>
				<p class="text-xs text-muted-foreground">
					The Great Himalayan mountain ranges in the Indian sub-continent region.
				</p>
				<a
					href="https://en.wikipedia.org/wiki/Himalayas"
					target="_blank"
					rel="noopener noreferrer"
					class="flex w-fit text-xs hover:underline"
				>
					Read more
					<ChevronRightIcon class="size-4" />
				</a>
			</div>
			<img
				src="/components/tooltip-01.jpg"
				alt="the himalayas"
				class="h-34 w-2/5 rounded-e-md object-cover"
			/>
		</div>
	</Popover.Content>
</Popover.Root>
