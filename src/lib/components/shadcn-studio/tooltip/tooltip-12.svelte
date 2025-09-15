<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Button } from '$lib/components/ui/button';
	import { HoverCard, HoverCardContent, HoverCardTrigger } from '$lib/components/ui/hover-card';
</script>

<HoverCard openDelay={0} closeDelay={0}>
	<HoverCardTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="link">Hover Card Stats</Button>
		{/snippet}
	</HoverCardTrigger>
	<HoverCardContent class="w-fit">
		<div class="flex items-center gap-1.5">
			<div class="flex flex-col gap-1">
				<div class="text-sm font-medium">Total page views</div>
				<div class="text-xl font-semibold">89,400</div>
				<div class="text-xs text-muted-foreground">21% ↗︎ than last month</div>
			</div>
			<Avatar.Root class="size-10">
				<Avatar.Image src="/avatars/05.webp" alt="Hallie Richards" />
				<Avatar.Fallback class="text-xs">HR</Avatar.Fallback>
			</Avatar.Root>
		</div>
	</HoverCardContent>
</HoverCard>
