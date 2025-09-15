<script lang="ts">
	import { HomeIcon } from '@lucide/svelte';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
</script>

<Avatar.Root>
	<Avatar.Fallback class="bg-indigo-500/10 text-indigo-500">
		<HomeIcon class="size-4" />
	</Avatar.Fallback>
</Avatar.Root>
