<script lang="ts">
	import { CheckIcon } from '@lucide/svelte';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
</script>

<div class="relative w-fit">
	<Avatar class="ring-2 ring-green-600 ring-offset-2 ring-offset-background dark:ring-green-400">
		<AvatarImage src="/avatars/05.webp" alt="Hallie Richards" />
		<AvatarFallback class="text-xs">HR</AvatarFallback>
	</Avatar>
	<span
		class="absolute -end-1.5 -bottom-1.5 inline-flex size-4 items-center justify-center rounded-full bg-green-600 dark:bg-green-400"
	>
		<CheckIcon class="size-3 text-white" />
	</span>
</div>
