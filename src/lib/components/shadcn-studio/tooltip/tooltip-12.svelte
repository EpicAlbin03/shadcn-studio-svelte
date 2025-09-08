<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
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
			<Avatar class="size-10">
				<AvatarImage src="/avatars/05.webp" alt="Hallie Richards" />
				<AvatarFallback class="text-xs">HR</AvatarFallback>
			</Avatar>
		</div>
	</HoverCardContent>
</HoverCard>
