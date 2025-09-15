<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Button } from '$lib/components/ui/button';
	import * as Popover from '$lib/components/ui/popover/index.js';
</script>

<Popover>
	<Popover.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Zoom in</Button>
		{/snippet}
	</Popover.Trigger>
	<Popover.Content
		class="origin-center duration-400 data-[state=closed]:!zoom-out-0 data-[state=open]:!zoom-in-0"
	>
		<div class="grid gap-4">
			<div class="flex flex-col items-center gap-2">
				<Avatar.Root class="size-20">
					<Avatar.Image src="/avatars/05.webp" alt="Howard Lloyd" />
					<Avatar.Fallback class="text-xs">HL</Avatar.Fallback>
				</Avatar.Root>
				<div class="flex flex-col items-center text-center">
					<p class="text-lg font-semibold">Howard Lloyd</p>
					<span class="text-sm">@iamhoward</span>
				</div>
			</div>
			<div class="mx-auto h-px w-45 bg-gradient-to-r from-border/20 via-border to-border/20"></div>
			<p class="text-center text-sm italic">
				Product Manager @oliviasparks, passionate about building user-centric solutions that solve
				real problems.
			</p>
			<div class="flex justify-center gap-2 text-sm">
				<div class="font-medium">
					512 <span class="font-normal text-muted-foreground">followers</span>
				</div>
				<div class="font-medium">
					128 <span class="font-normal text-muted-foreground">following</span>
				</div>
			</div>
		</div>
	</Popover.Content>
</Popover.Root>
