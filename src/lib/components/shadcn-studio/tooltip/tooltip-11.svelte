<script lang="ts">
	import { ChevronRightIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { HoverCard, HoverCardContent, HoverCardTrigger } from '$lib/components/ui/hover-card';
</script>

<HoverCard openDelay={0} closeDelay={0}>
	<HoverCardTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="link">Hover Card Media</Button>
		{/snippet}
	</HoverCardTrigger>
	<HoverCardContent>
		<div class="space-y-2">
			<img src="/components/tooltip-01.jpg" alt="Content" class="w-full rounded" />
			<div class="space-y-1">
				<p class="text-sm font-medium">About Himalayas</p>
				<p class="text-xs text-muted-foreground">
					The Great Himalayan mountain ranges in the Indian sub-continent region.{' '}
					<a
						href="https://en.wikipedia.org/wiki/Himalayas"
						target="_blank"
						rel="noopener noreferrer"
						class="flex w-fit underline hover:text-foreground"
					>
						Read more
						<ChevronRightIcon class="size-4" />
					</a>
				</p>
			</div>
		</div>
	</HoverCardContent>
</HoverCard>
