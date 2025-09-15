<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Button } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
</script>

<Tooltip.Root>
	<Tooltip.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="sm">Avatar</Button>
		{/snippet}
	</Tooltip.Trigger>
	<Tooltip.Content>
		<div class="flex items-center gap-1.5">
			<Avatar.Root class="size-5">
				<Avatar.Image src="/avatars/05.webp" alt="Hallie Richards" />
				<Avatar.Fallback class="text-xs">HR</Avatar.Fallback>
			</Avatar.Root>
			<p class="font-medium">Hallie Richards</p>
		</div>
	</Tooltip.Content>
</Tooltip.Root>
