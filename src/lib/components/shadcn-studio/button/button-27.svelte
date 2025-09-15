<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Button } from '$lib/components/ui/button';
</script>

<Button class="rounded-full ps-2">
	<Avatar.Root class="size-6">
		<Avatar.Image src="/avatars/05.webp" alt="Hallie Richards" />
		<Avatar.Fallback class="text-xs text-foreground">HR</Avatar.Fallback>
	</Avatar.Root>
	@hallierichards
</Button>
