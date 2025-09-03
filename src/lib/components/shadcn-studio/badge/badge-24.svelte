<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
</script>

<div class="relative w-fit">
	<Avatar class="size-10">
		<AvatarImage src="/avatars/02.png" alt="Hallie Richards" />
		<AvatarFallback>HR</AvatarFallback>
	</Avatar>
	<span
		class="absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2 border-background bg-green-600 dark:bg-green-400"
	>
		<span class="sr-only">Online</span>
	</span>
</div>
