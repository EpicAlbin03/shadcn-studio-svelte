<script lang="ts">
	import { CircleFadingPlus } from '@lucide/svelte';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
</script>

<Card class="w-full max-w-lg">
	<CardHeader>
		<CardTitle>Meeting Notes</CardTitle>
	</CardHeader>
	<CardContent class="grid gap-4 sm:grid-cols-2">
		<div class="flex items-center gap-4">
			<CircleFadingPlus />
			<span class="text-sm font-semibold">Invite Member </span>
		</div>
		<div class="flex items-center gap-4">
			<Avatar>
				<AvatarImage src="/avatars/05.webp" alt="Hallie Richards" />
				<AvatarFallback class="text-xs">JA</AvatarFallback>
			</Avatar>
			<div class="flex flex-col">
				<span class="text-sm font-semibold">Jimmy Androson </span>
				<span class="text-sm text-muted-foreground">UI Designer</span>
			</div>
		</div>
		<div class="flex items-center gap-4">
			<Avatar>
				<AvatarImage src="/avatars/02.webp" alt="Hallie Richards" />
				<AvatarFallback class="text-xs">DA</AvatarFallback>
			</Avatar>
			<div class="flex flex-col">
				<span class="text-sm font-semibold">Dean Ambrose </span>
				<span class="text-sm text-muted-foreground">UX Designer</span>
			</div>
		</div>
		<div class="flex items-center gap-4">
			<Avatar>
				<AvatarImage src="/avatars/03.webp" alt="Hallie Richards" />
				<AvatarFallback class="text-xs">HR</AvatarFallback>
			</Avatar>
			<div class="flex flex-col">
				<span class="text-sm font-semibold">Anita John</span>
				<span class="text-sm text-muted-foreground">Branding</span>
			</div>
		</div>
		<div></div>
		<div></div>
	</CardContent>
</Card>
