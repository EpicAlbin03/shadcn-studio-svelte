<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
</script>

<div class="relative w-fit">
	<Avatar class="rounded-sm">
		<AvatarImage src="/avatars/05.webp" alt="Hallie Richards" class="rounded-sm" />
		<AvatarFallback class="text-xs">HR</AvatarFallback>
	</Avatar>
	<span
		class="absolute -end-1.5 -top-1.5 size-3 rounded-full border-2 border-background bg-amber-600 dark:bg-amber-400"
	>
		<span class="sr-only">Away</span>
	</span>
</div>
