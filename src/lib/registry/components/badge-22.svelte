<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Badge } from '$lib/components/ui/badge';
</script>

<Badge variant="outline" class="h-auto rounded-full py-1 ps-1 pe-2">
	<Avatar.Root class="size-6">
		<Avatar.Image src="/img/avatars/05.webp" alt="Hallie Richards" />
		<Avatar.Fallback>HR</Avatar.Fallback>
	</Avatar.Root>
	Avatar
</Badge>
