<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
</script>

<div class="relative w-fit">
	<Avatar.Root class="size-10">
		<Avatar.Image src="/avatars/05.webp" alt="Hallie Richards" />
		<Avatar.Fallback>HR</Avatar.Fallback>
	</Avatar.Root>
	<span
		class="absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2 border-background bg-green-600 dark:bg-green-400"
	>
		<span class="sr-only">Online</span>
	</span>
</div>
