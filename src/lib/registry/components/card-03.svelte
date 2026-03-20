<script lang="ts">
	import CircleFadingPlusIcon from '@lucide/svelte/icons/circle-fading-plus';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
</script>

<Card.Root class="w-full max-w-lg">
	<Card.Header>
		<Card.Title>Meeting Notes</Card.Title>
	</Card.Header>
	<Card.Content class="grid gap-4 sm:grid-cols-2">
		<div class="flex items-center gap-4">
			<CircleFadingPlusIcon />
			<span class="text-sm font-semibold">Invite Member </span>
		</div>
		<div class="flex items-center gap-4">
			<Avatar.Root>
				<Avatar.Image src="/img/avatars/05.webp" alt="Hallie Richards" />
				<Avatar.Fallback class="text-xs">JA</Avatar.Fallback>
			</Avatar.Root>
			<div class="flex flex-col">
				<span class="text-sm font-semibold">Jimmy Androson </span>
				<span class="text-sm text-muted-foreground">UI Designer</span>
			</div>
		</div>
		<div class="flex items-center gap-4">
			<Avatar.Root>
				<Avatar.Image src="/img/avatars/02.webp" alt="Hallie Richards" />
				<Avatar.Fallback class="text-xs">DA</Avatar.Fallback>
			</Avatar.Root>
			<div class="flex flex-col">
				<span class="text-sm font-semibold">Dean Ambrose </span>
				<span class="text-sm text-muted-foreground">UX Designer</span>
			</div>
		</div>
		<div class="flex items-center gap-4">
			<Avatar.Root>
				<Avatar.Image src="/img/avatars/03.webp" alt="Hallie Richards" />
				<Avatar.Fallback class="text-xs">HR</Avatar.Fallback>
			</Avatar.Root>
			<div class="flex flex-col">
				<span class="text-sm font-semibold">Anita John</span>
				<span class="text-sm text-muted-foreground">Branding</span>
			</div>
		</div>
		<div></div>
		<div></div>
	</Card.Content>
</Card.Root>
