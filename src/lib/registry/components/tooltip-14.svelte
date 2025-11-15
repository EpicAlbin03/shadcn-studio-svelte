<script lang="ts">
	import { FileQuestionIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { HoverCard, HoverCardContent, HoverCardTrigger } from '$lib/components/ui/hover-card';
</script>

<HoverCard openDelay={0} closeDelay={0}>
	<HoverCardTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="link">Hover Card Alert</Button>
		{/snippet}
	</HoverCardTrigger>
	<HoverCardContent class="w-72">
		<div class="flex flex-col items-center text-center">
			<span class="mb-2.5 flex size-12 items-center justify-center rounded-full bg-destructive/10">
				<FileQuestionIcon class="size-6 text-destructive" />
			</span>
			<div class="mb-1 text-lg font-medium">File is corrupted</div>
			<p class="text-sm">
				It might have some virus or something that might be harmful for your device.
			</p>
		</div>
	</HoverCardContent>
</HoverCard>
