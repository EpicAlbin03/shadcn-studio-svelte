<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
</script>

<div class="relative w-fit">
	<Avatar>
		<AvatarImage src="/avatars/05.webp" alt="Hallie Richards" />
		<AvatarFallback class="text-xs">HR</AvatarFallback>
	</Avatar>
	<span
		class="absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2 border-background bg-destructive"
	>
		<span class="sr-only">Busy</span>
	</span>
</div>
